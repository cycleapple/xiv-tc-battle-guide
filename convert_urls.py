"""
Convert Asvel ffxiv-gearing URLs to xiv-tc-gear format.
Decodes Asvel share format (v5), queries XIVAPI for slot info,
re-encodes in xiv-tc-gear format (v2).
"""
import re, json, sys, time
from urllib.request import urlopen, Request
from urllib.error import HTTPError

# ─── Base62 (same charset for both tools) ────────────────────────────────
CHARSET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
CHAR_VAL = {c: i for i, c in enumerate(CHARSET)}

def b62_decode(s):
    r = 0
    for c in s:
        r = r * 62 + CHAR_VAL[c]
    return r

def b62_encode(n):
    if n == 0: return '0'
    r = ''
    while n > 0:
        r = CHARSET[n % 62] + r
        n //= 62
    return r

# ─── Asvel Decoder (v5) ──────────────────────────────────────────────────
ASVEL_JOBS = [
    ('PLD', ['CRT','DET','DHT','SKS','TEN']),
    ('WAR', ['CRT','DET','DHT','SKS','TEN']),
    ('DRK', ['CRT','DET','DHT','SKS','TEN']),
    ('GNB', ['CRT','DET','DHT','SKS','TEN']),
    ('WHM', ['CRT','DET','DHT','SPS','PIE']),
    ('SCH', ['CRT','DET','DHT','SPS','PIE']),
    ('AST', ['CRT','DET','DHT','SPS','PIE']),
    ('SGE', ['CRT','DET','DHT','SPS','PIE']),
    ('MNK', ['CRT','DET','DHT','SKS']),
    ('DRG', ['CRT','DET','DHT','SKS']),
    ('NIN', ['CRT','DET','DHT','SKS']),
    ('SAM', ['CRT','DET','DHT','SKS']),
    ('RPR', ['CRT','DET','DHT','SKS']),
    ('VPR', ['CRT','DET','DHT','SKS']),
    ('BRD', ['CRT','DET','DHT','SKS']),
    ('MCH', ['CRT','DET','DHT','SKS']),
    ('DNC', ['CRT','DET','DHT','SKS']),
    ('BLM', ['CRT','DET','DHT','SPS']),
    ('SMN', ['CRT','DET','DHT','SPS']),
    ('RDM', ['CRT','DET','DHT','SPS']),
    ('PCT', ['CRT','DET','DHT','SPS']),
    ('BLU', ['CRT','DET','DHT','SPS']),
]
SPECIAL_GEAR = [10337,10338,10339,10340,10341,10342,10343,10344,17726]

# Asvel stat name -> user stat key
STAT_MAP = {
    'CRT': 'crit', 'DET': 'determination', 'DHT': 'dhit',
    'SKS': 'skillspeed', 'SPS': 'spellspeed', 'TEN': 'tenacity', 'PIE': 'piety',
}

def asvel_decode(code):
    val = b62_decode(code)
    def read(rng):
        nonlocal val
        r = val % rng
        val //= rng
        return r
    def read_bool():
        return read(2) == 1

    version = read(77)
    if version != 5:
        raise ValueError(f"Unsupported Asvel version: {version}")

    job_idx = read(33)
    job_name, stat_decode = ASVEL_JOBS[job_idx]
    materia_stat_count = len(stat_decode)

    synced = read_bool()
    job_levels = [50, 60, 70, 80, 90, 100]
    job_level = job_levels[read(6)] if synced else 100
    sync_level = read(800) if synced else None

    # Gear type flags
    gear_type_decode = []
    for i in range(8):
        if read_bool():
            gear_type_decode.append(i)

    # Materia dictionary
    min_mat_grade = read(13)
    materia_decode = []
    for grade in range(12, min_mat_grade - 1, -1):
        if grade == 0: continue
        for stat_idx in range(materia_stat_count):
            if read_bool():
                materia_decode.append((stat_decode[stat_idx], grade))
    if min_mat_grade == 0:
        materia_decode.append(None)

    # Gear entries
    gears = []
    gear_id_delta_range = 0
    gear_id_delta_dir = 0
    rings_inversed = False
    item_id = -1
    first = True

    while val != 0:
        gt = gear_type_decode[read(len(gear_type_decode))]
        materias = []
        custom_stats = None

        if gt == 6:  # Special
            sid = SPECIAL_GEAR[read(9)]
            gears.append({'id': sid, 'materias': [], 'custom': None})
            continue
        if gt == 7:  # Customizable
            custom_stats = {}
            for s in stat_decode:
                v = read(1001)
                if v > 0:
                    custom_stats[s] = v
        else:
            for _ in range(gt):
                mi = read(len(materia_decode))
                materias.append(materia_decode[mi])

        if first:
            item_id = read(60000)
            gear_id_delta_range = read(item_id)
            gear_id_delta_dir = 1 if read_bool() else -1
            rings_inversed = read_bool()
            first = False
        else:
            is_last = (val == 0)
            delta = read(gear_id_delta_range)
            if is_last:
                delta -= 1
            item_id += delta * gear_id_delta_dir

        gears.append({'id': item_id, 'materias': materias, 'custom': custom_stats})

    if rings_inversed != (gear_id_delta_dir == -1):
        gears.reverse()

    # Fix: Asvel format stores item IDs offset by -1 from actual game IDs
    for g in gears:
        if g['id'] > 0:
            g['id'] += 1

    return {
        'job': job_name,
        'job_level': job_level,
        'sync_level': sync_level,
        'gears': gears,
    }

# ─── XIVAPI: Get item slot info ─────────────────────────────────────────
SLOT_CACHE = {}

def get_item_slot(item_id):
    if item_id in SLOT_CACHE:
        return SLOT_CACHE[item_id]
    try:
        url = f"https://beta.xivapi.com/api/1/sheet/Item/{item_id}?fields=EquipSlotCategory,ItemUICategory"
        req = Request(url, headers={'User-Agent': 'xiv-tc-converter/1.0'})
        with urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
        cat = data.get('fields', {}).get('EquipSlotCategory', {}).get('fields', {})
        ui_cat = data.get('fields', {}).get('ItemUICategory', {}).get('row_id', 0)
        # UI category 46 = meal/food
        if ui_cat in (44, 45, 46, 47):
            slot = 'Food'
        elif cat.get('MainHand', 0) > 0:
            slot = 'Weapon'
        elif cat.get('OffHand', 0) > 0:
            slot = 'OffHand'
        elif cat.get('Head', 0) > 0:
            slot = 'Head'
        elif cat.get('Body', 0) > 0:
            slot = 'Body'
        elif cat.get('Gloves', 0) > 0:
            slot = 'Hand'
        elif cat.get('Legs', 0) > 0:
            slot = 'Legs'
        elif cat.get('Feet', 0) > 0:
            slot = 'Feet'
        elif cat.get('Ears', 0) > 0:
            slot = 'Ears'
        elif cat.get('Neck', 0) > 0:
            slot = 'Neck'
        elif cat.get('Wrists', 0) > 0:
            slot = 'Wrist'
        elif cat.get('FingerL', 0) > 0 or cat.get('FingerR', 0) > 0:
            slot = 'Ring'
        else:
            slot = 'Unknown'
        SLOT_CACHE[item_id] = slot
        return slot
    except Exception as e:
        print(f"  XIVAPI error for item {item_id}: {e}", file=sys.stderr)
        SLOT_CACHE[item_id] = 'Unknown'
        return 'Unknown'

# ─── User's xiv-tc-gear Encoder (v2) ────────────────────────────────────
USER_JOBS = [
    'PLD','WAR','DRK','GNB','WHM','SCH','AST','SGE',
    'MNK','DRG','NIN','SAM','RPR','VPR','BRD','MCH','DNC',
    'BLM','SMN','RDM','PCT','BLU'
]
USER_SLOTS = ['Weapon','OffHand','Head','Body','Hand','Legs','Feet','Ears','Neck','Wrist','RingLeft','RingRight']
USER_MATERIA_STATS = ['crit','dhit','determination','skillspeed','spellspeed','tenacity','piety']
USER_LEVELS = [70, 80, 90, 100]

def user_encode(job, level, slots_data, food_id=0, food_hq=True):
    """
    slots_data: dict of slot_key -> {'itemId': int, 'materia': [{'stat': str, 'grade': int}, ...]}
    """
    value = 0

    def write(v, rng):
        nonlocal value
        value = value * rng + v

    # Write slots in reverse order
    for slot_key in reversed(USER_SLOTS):
        sd = slots_data.get(slot_key, {'itemId': 0, 'materia': []})
        mats = sd.get('materia', [])
        # Write materia in reverse
        for m in reversed(mats):
            stat_idx = USER_MATERIA_STATS.index(m['stat'])
            write(m['grade'] - 1, 12)  # MATERIA_GRADE_RANGE
            write(stat_idx, 7)         # MATERIA_STAT_RANGE
        write(len(mats), 6)            # MATERIA_COUNT_RANGE
        write(sd.get('itemId', 0), 100000)  # ITEM_ID_RANGE

    # Food
    write(1 if food_hq else 0, 2)      # FOOD_HQ_RANGE
    write(food_id, 100000)             # FOOD_RANGE

    # Level
    level_idx = USER_LEVELS.index(level) if level in USER_LEVELS else 3
    write(level_idx, 4)                # LEVEL_RANGE

    # Job
    job_idx = USER_JOBS.index(job)
    write(job_idx, 22)                 # JOB_RANGE

    # Version
    write(2, 4)                        # VERSION_RANGE

    return b62_encode(value)

# ─── Convert one URL ─────────────────────────────────────────────────────
def convert_url(asvel_url):
    # Extract code from URL
    code = asvel_url.split('?')[-1].strip()
    if code.startswith('s='):
        code = code[2:]

    # Decode Asvel
    gearset = asvel_decode(code)
    job = gearset['job']
    level = gearset['job_level']

    # Query XIVAPI for each item's slot
    slots = {}
    food_id = 0
    ring_count = 0

    for gear in gearset['gears']:
        iid = gear['id']
        if iid <= 0:
            continue
        slot = get_item_slot(iid)
        time.sleep(0.05)  # Rate limit

        # Convert materias
        user_mats = []
        for m in gear['materias']:
            if m is None:
                continue
            asvel_stat, grade = m
            user_stat = STAT_MAP.get(asvel_stat)
            if user_stat:
                user_mats.append({'stat': user_stat, 'grade': grade})

        if slot == 'Food':
            food_id = iid
        elif slot == 'Ring':
            ring_count += 1
            ring_key = 'RingLeft' if ring_count == 1 else 'RingRight'
            slots[ring_key] = {'itemId': iid, 'materia': user_mats}
        elif slot in USER_SLOTS:
            slots[slot] = {'itemId': iid, 'materia': user_mats}

    # Encode in user format
    user_code = user_encode(job, level, slots, food_id, True)
    return f"https://cycleapple.github.io/xiv-tc-gear/?s={user_code}"

# ─── Main: Convert all URLs from gearing.md ──────────────────────────────
if __name__ == '__main__':
    with open('site/docs/gearing.md', 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = re.compile(r'https://ffxivgearing\.neko7ina\.com/\?([A-Za-z0-9]+)')
    matches = pattern.findall(content)
    unique_codes = list(dict.fromkeys(matches))

    print(f"Found {len(unique_codes)} unique Asvel URLs to convert", file=sys.stderr)

    url_map = {}
    for i, code in enumerate(unique_codes):
        old_url = f"https://ffxivgearing.neko7ina.com/?{code}"
        try:
            new_url = convert_url(old_url)
            url_map[old_url] = new_url
            print(f"  [{i+1}/{len(unique_codes)}] OK: {code[:20]}... -> {new_url.split('=')[1][:20]}...", file=sys.stderr)
        except Exception as e:
            print(f"  [{i+1}/{len(unique_codes)}] FAIL: {code[:20]}... -> {e}", file=sys.stderr)
            url_map[old_url] = old_url  # Keep original on failure

    # Replace URLs in content
    for old, new in url_map.items():
        content = content.replace(old, new)

    with open('site/docs/gearing.md', 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"\nDone! Converted {sum(1 for v in url_map.values() if 'xiv-tc-gear' in v)}/{len(url_map)} URLs", file=sys.stderr)
