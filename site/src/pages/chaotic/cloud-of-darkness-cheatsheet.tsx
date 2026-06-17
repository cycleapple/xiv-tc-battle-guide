import React, {useEffect, useMemo, useState} from 'react';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  chaoticFightConfig,
  chaoticStrats,
  type Alignment,
  type Alliance,
  type ChaoticMechanicStrat,
  type ChaoticStrat,
  type PlayerStrats,
  type Role,
} from '@site/src/data/cloudOfDarknessChaoticData';

type RoleChoice = {
  label: string;
  role: Role;
  party: number;
};

const roleChoices: RoleChoice[] = [
  {label: 'MT', role: 'Tank', party: 1},
  {label: 'ST', role: 'Tank', party: 2},
  {label: 'H1', role: 'Healer', party: 1},
  {label: 'H2', role: 'Healer', party: 2},
  {label: 'D1', role: 'Melee', party: 1},
  {label: 'D2', role: 'Melee', party: 2},
  {label: 'D3', role: 'Ranged', party: 1},
  {label: 'D4', role: 'Ranged', party: 2},
];

const mechanicLabels: Record<string, string> = {
  aoes: '小 AoE',
  'begone with you': '擊退',
  bramble: '荊棘',
  chaser: '追逐',
  idle: '待機',
  pairs: '分攤',
  'priority: t>m>r': '優先順序：T > 近戰 > 遠程',
  'seed placement': '種子放置',
  spinny: '回旋',
  spread: '散開',
  start: '開場',
  swap: '換位',
  towers: '踩塔',
  'wild charge': '突進分攤',
};

const replacements: [RegExp, string][] = [
  [/DOUBLE CHECK MACROS IF USED/g, '若使用巨集請再次確認'],
  [/Both 2 tiles east to ([A-Z/]+) corner tile/g, '兩人都向東 2 格到 $1 角落地板'],
  [/Both 2 tiles west to ([A-Z/]+) corner tile/g, '兩人都向西 2 格到 $1 角落地板'],
  [/1 tile east to ([A-Z/]+) corner tile/g, '向東 1 格到 $1 角落地板'],
  [/1 tile west to ([A-Z/]+) corner tile/g, '向西 1 格到 $1 角落地板'],
  [/([A-Z/]+) east of corner tile/g, '$1 角落地板的東側'],
  [/([A-Z/]+) west of corner tile/g, '$1 角落地板的西側'],
  [/([A-Z/]+) corner tile/g, '$1 角落地板'],
  [/([A-Z/]+) inner tile/g, '$1 內側地板'],
  [/([A-Z/]+) central tile/g, '$1 中央地板'],
  [/([A-Z/]+) (North|South|East|West) inner tile/g, '$1 內側地板偏$2'],
  [/(North|South) from ([A-Z/]+) corner tile/g, '從 $2 角落地板往$1'],
  [/(North|South) tile from ([A-Z]+) corner/g, '$2 角落往$1的地板'],
  [/(North|South) tile of ([A-Z]+) corner/g, '$2 角落的$1側地板'],
  [/(North|South|East|West) of ([A-Z]+) corner tile/g, '$2 角落地板的$1側'],
  [/(East|West) of ([A-Z]+) corner tile/g, '$2 角落地板的$1側'],
  [/Idle tile/g, '待機地板'],
  [/CCW of corner tile/g, '角落地板逆時針側'],
  [/All platform add-related mechanics are Wall\/Add Relative/g, '所有平台小怪相關機制皆以牆／小怪相對為準'],
  [/R1 is generally Caster in the diagrams/g, '圖中 R1 通常代表法系遠程'],
  [/R2 is generally Phys Ranged in the diagrams/g, '圖中 R2 通常代表物理遠程'],
  [/I got a clean swap to the NE or SE tiles! Now what\?/g, '我乾淨換到東北或東南地板，接下來？'],
  [/I got a clean swap to the NW or SW tiles! Now what\?/g, '我乾淨換到西北或西南地板，接下來？'],
  [/I got a clean swap to the East platform! Now what\?/g, '我乾淨換到東側平台，接下來？'],
  [/I got a clean swap to the West platform! Now what\?/g, '我乾淨換到西側平台，接下來？'],
  [/I got a clean swap to the east platform! Now what\?/g, '我乾淨換到東側平台，接下來？'],
  [/I got a clean swap to the west platform! Now what\?/g, '我乾淨換到西側平台，接下來？'],
  [/I got a clean swap to a platform! Now what\?/g, '我乾淨換到平台，接下來？'],
  [/You will need to take the R1 spot/g, '你需要補 R1 的位置'],
  [/Taken from the post by @idyllshireinfo/g, '來源：@idyllshireinfo 的文章'],
  [/Taken from HealerOutCAR by Jake Hale/g, '來源：Jake Hale 的 HealerOutCAR'],
  [/Source: Raidplan by Aurelia Netcash/g, '來源：Aurelia Netcash 的 Raidplan'],
  [/Source: CODCAR by RADAR/g, '來源：RADAR 的 CODCAR'],
  [/First or last person to follow the train/g, '第一個或最後一個跟隊列的人'],
  [/Last of the train if chased; otherwise vertical dead end/g, '被追則排隊尾，否則進垂直死路'],
  [/Follow the tank of the Corner Team if chased/g, '被追則跟角落組坦克'],
  [/Lead the Corner Team if chased/g, '被追則帶角落組'],
  [/or go into vertical end/g, '否則進垂直端點'],
  [/or go into horizontal end/g, '否則進水平端點'],
  [/Stick to left side of the tile facing boss/g, '面向王時貼地板左側'],
  [/Tuck in!/g, '往內縮！'],
  [/None, stay on boss/g, '無，留在王腳下'],
  [/See image/g, '看圖'],
  [/Close to boss/g, '靠近王'],
  [/Far from boss/g, '遠離王'],
  [/Face boss/g, '面向王'],
  [/Boss faces/g, '王面向'],
  [/Facing cloud/g, '面向雲'],
  [/Supports/g, '支援職'],
  [/Melees/g, '近戰'],
  [/DPS/g, 'DPS'],
  [/Tank/g, '坦克'],
  [/Healer/g, '補師'],
  [/Ranged/g, '遠程'],
  [/Melee/g, '近戰'],
  [/Caster/g, '法系'],
  [/Phys Ranged/g, '物理遠程'],
  [/Platform/g, '平台'],
  [/platform/g, '平台'],
  [/Tiles/g, '地板'],
  [/tiles/g, '地板'],
  [/tile/g, '地板'],
  [/corner/g, '角落'],
  [/cubby/g, '凹槽'],
  [/central/g, '中央'],
  [/inside/g, '內側'],
  [/Inside/g, '內側'],
  [/outside/g, '外側'],
  [/Outside/g, '外側'],
  [/Inner/g, '內圈'],
  [/Outer/g, '外圈'],
  [/Relative/g, '相對'],
  [/True North/g, '真北'],
  [/True South/g, '真南'],
  [/Wall\/Add Relative/g, '牆／小怪相對'],
  [/Wall Relative/g, '牆相對'],
  [/Original/g, '原版'],
  [/Northwest/g, '西北'],
  [/Northeast/g, '東北'],
  [/Southeast/g, '東南'],
  [/Southwest/g, '西南'],
  [/North/g, '北'],
  [/South/g, '南'],
  [/East/g, '東'],
  [/West/g, '西'],
  [/\beast\b/g, '東'],
  [/\bwest\b/g, '西'],
  [/\bnorth\b/g, '北'],
  [/\bsouth\b/g, '南'],
  [/Left/g, '左'],
  [/Right/g, '右'],
  [/Middle/g, '中間'],
  [/Center/g, '中央'],
  [/Both/g, '兩人都'],
  [/from/g, '來自'],
  [/with/g, '與'],
  [/w\//g, '與 '],
  [/to/g, '到'],
  [/of/g, '的'],
  [/if chased/g, '若被追'],
  [/if not/g, '若沒有'],
  [/Lead/g, '帶頭'],
  [/Follow/g, '跟隨'],
  [/Idle/g, '待機'],
  [/Ring/g, '環形區'],
  [/Corner Team/g, '角落組'],
  [/dead end/g, '死路'],
  [/train/g, '隊列'],
  [/person/g, '玩家'],
  [/1 tile/g, '1 格'],
  [/2 tiles/g, '2 格'],
];

function translate(text = ''): string {
  let translated = text;
  for (const [pattern, value] of replacements) {
    translated = translated.replace(pattern, value);
  }
  const directions: [RegExp, string][] = [
    [/\bNNE\b/g, '北北東'],
    [/\bNNW\b/g, '北北西'],
    [/\bENE\b/g, '東北東'],
    [/\bESE\b/g, '東南東'],
    [/\bSSE\b/g, '南南東'],
    [/\bSSW\b/g, '南南西'],
    [/\bWNW\b/g, '西北西'],
    [/\bWSW\b/g, '西南西'],
    [/\bNE\b/g, '東北'],
    [/\bNW\b/g, '西北'],
    [/\bSE\b/g, '東南'],
    [/\bSW\b/g, '西南'],
  ];
  for (const [pattern, value] of directions) {
    translated = translated.replace(pattern, value);
  }
  return translated;
}

function roleLabel(role: Role, party: number, useJpNaming = false): string {
  if (role === 'Tank') return party === 1 ? 'MT' : useJpNaming ? 'ST' : 'OT/ST';
  if (role === 'Healer') return party === 1 ? 'H1' : 'H2';
  if (role === 'Melee') return party === 1 ? 'D1' : 'D2';
  return party === 1 ? 'D3' : 'D4';
}

function getPlayerStrat(
  strat: ChaoticStrat | undefined,
  alliance: Alliance,
  role: Role,
  party: number,
): PlayerStrats | undefined {
  return strat?.strats.find(
    (entry) => entry.alliance === alliance && entry.role === role && entry.party === party,
  );
}

function StepCard({
  step,
  spotlight,
  alignment,
  assetBase,
}: {
  step: ChaoticMechanicStrat;
  spotlight: boolean;
  alignment: Alignment;
  assetBase: string;
}) {
  const imageUrl = step.alignmentImages?.[alignment] ?? step.imageUrl ?? '';
  const mask = spotlight ? step.alignmentMasks?.[alignment] ?? step.mask ?? '' : '';
  const transform = step.alignmentTransforms?.[alignment] ?? step.transform ?? '';
  const resolvedImageUrl = imageUrl
    ? `${assetBase}${imageUrl.replace(/^\.\//, '')}`
    : '';

  return (
    <article className={`cod-cheat-step ${step.alignmentImages?.[alignment] ? 'cod-cheat-step--wide' : ''}`}>
      <h3>{mechanicLabels[step.mechanic] ?? translate(step.mechanic)}</h3>
      <p>{translate(step.description)}</p>
      {resolvedImageUrl && (
        <img
          src={resolvedImageUrl}
          alt={mechanicLabels[step.mechanic] ?? step.mechanic}
          style={{
            WebkitMaskImage: mask || undefined,
            maskImage: mask || undefined,
            transform: transform || undefined,
          }}
        />
      )}
    </article>
  );
}

export default function CloudOfDarknessCheatsheet(): React.ReactNode {
  const pageTitle = 'FF14 滅 暗黑之雲 小抄工具｜滅・暗黑之雲激鬥戰繁中站位';
  const pageDescription =
    'FF14 滅 暗黑之雲小抄工具，整合 WTFDIG The Cloud of Darkness (Chaotic) 全策略、聯盟、職能位置與繁中站位提示，支援イディル改、CODCAR、HealerOut 與 Raidplan。';
  const canonicalUrl =
    'https://cycleapple.github.io/xiv-tc-battle-guide/chaotic/cloud-of-darkness-cheatsheet/';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    inLanguage: 'zh-Hant',
    isAccessibleForFree: true,
    about: {
      '@type': 'VideoGame',
      name: 'Final Fantasy XIV',
    },
    keywords: [
      'FF14 滅 暗黑之雲 小抄',
      'FF14 滅 暗黑之雲 攻略',
      '滅・暗黑之雲激鬥戰',
      'The Cloud of Darkness Chaotic',
      'WTFDIG',
      'イディル改',
    ],
    license: 'https://github.com/mczub/wtfdig/blob/main/LICENSE',
    isBasedOn: 'https://github.com/mczub/wtfdig',
  };
  const assetBase = useBaseUrl('/wtfdig/71/');
  const [stratName, setStratName] = useState('idyll');
  const [alliance, setAlliance] = useState<Alliance>('A');
  const [role, setRole] = useState<Role>('Tank');
  const [party, setParty] = useState(1);
  const [spotlight, setSpotlight] = useState(true);
  const [alignment, setAlignment] = useState<Alignment>('original');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    const nextStrat = params.get('strat');
    const nextAlliance = params.get('alliance') as Alliance | null;
    const nextRole = params.get('role') as Role | null;
    const nextParty = Number(params.get('party'));
    const nextAlignment = params.get('alignment') as Alignment | null;
    const nextSpotlight = params.get('spotlight');

    if (nextStrat && chaoticStrats.some((strat) => strat.stratName === nextStrat)) {
      setStratName(nextStrat);
    }
    if (nextAlliance && chaoticFightConfig.allianceOptions.includes(nextAlliance)) {
      setAlliance(nextAlliance);
    }
    if (nextRole && roleChoices.some((choice) => choice.role === nextRole)) {
      setRole(nextRole);
    }
    if (nextParty === 1 || nextParty === 2) {
      setParty(nextParty);
    }
    if (
      nextAlignment &&
      chaoticFightConfig.alignmentOptions.some((option) => option.value === nextAlignment)
    ) {
      setAlignment(nextAlignment);
    }
    if (nextSpotlight === '0') {
      setSpotlight(false);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams({
      strat: stratName,
      alliance,
      role,
      party: String(party),
      alignment,
      spotlight: spotlight ? '1' : '0',
    });
    window.history.replaceState(null, '', `#${params.toString()}`);
  }, [stratName, alliance, role, party, alignment, spotlight]);

  const selectedStrat = useMemo(
    () => chaoticStrats.find((strat) => strat.stratName === stratName),
    [stratName],
  );
  const playerStrat = useMemo(
    () => getPlayerStrat(selectedStrat, alliance, role, party),
    [selectedStrat, alliance, role, party],
  );
  const useJpNaming = Boolean(chaoticFightConfig.strats[stratName]?.jpRoles);
  const selectedRoleLabel = roleLabel(role, party, useJpNaming);
  const hasAlignmentControls = Boolean(
    playerStrat?.strats.some((step) => step.alignmentTransforms || step.alignmentImages),
  );

  const sourceLinks =
    typeof selectedStrat?.stratUrl === 'string'
      ? [{label: translate(selectedStrat.description), href: selectedStrat.stratUrl}]
      : Object.entries(selectedStrat?.stratUrl ?? {}).map(([label, href]) => ({label, href}));

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1300);
  }

  return (
    <main className="cod-cheatsheet-page">
      <Head>
        <title>{pageTitle}</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="FF14,FFXIV,滅 暗黑之雲 小抄,滅 暗黑之雲 攻略,滅・暗黑之雲激鬥戰,The Cloud of Darkness Chaotic,WTFDIG,イディル改,CODCAR,HealerOut,Raidplan,滅級攻略"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="FF14 繁中高難攻略" />
        <meta property="og:locale" content="zh_TW" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <section className="cod-cheat-header">
        <div>
          <p className="cod-cheat-eyebrow">WTFDIG 繁中整合版</p>
          <h1>滅・暗黑之雲激鬥戰小抄工具</h1>
          <p>
            依打法、聯盟與職能位置產生個人化站位小抄。資料與圖片移植自{' '}
            <a href="https://github.com/mczub/wtfdig" target="_blank" rel="noreferrer">
              mczub/wtfdig
            </a>
            ，原專案採 MIT License，Copyright (c) 2024 matthew czubakowski。
          </p>
        </div>
        <Link className="cod-cheat-back" to="/chaotic/cloud-of-darkness">
          回攻略文
        </Link>
      </section>

      <section className="cod-cheat-controls" aria-label="小抄設定">
        <label>
          <span>打法</span>
          <select value={stratName} onChange={(event) => setStratName(event.target.value)}>
            {chaoticStrats.map((strat) => (
              <option key={strat.stratName} value={strat.stratName}>
                {chaoticFightConfig.strats[strat.stratName]?.label ?? strat.stratName}
              </option>
            ))}
          </select>
        </label>

        <div>
          <span>聯盟</span>
          <div className="cod-cheat-segment">
            {chaoticFightConfig.allianceOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={alliance === option ? 'is-active' : ''}
                onClick={() => setAlliance(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span>位置</span>
          <div className="cod-cheat-role-grid">
            {roleChoices.map((choice) => {
              const active = role === choice.role && party === choice.party;
              return (
                <button
                  key={choice.label}
                  type="button"
                  className={active ? 'is-active' : ''}
                  onClick={() => {
                    setRole(choice.role);
                    setParty(choice.party);
                  }}
                >
                  {choice.label}
                </button>
              );
            })}
          </div>
        </div>

        <label className="cod-cheat-toggle">
          <input
            type="checkbox"
            checked={spotlight}
            onChange={(event) => setSpotlight(event.target.checked)}
          />
          <span>高亮我的位置</span>
        </label>

        {hasAlignmentControls && (
          <div>
            <span>方向基準</span>
            <div className="cod-cheat-segment">
              {chaoticFightConfig.alignmentOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={alignment === option.value ? 'is-active' : ''}
                  onClick={() => setAlignment(option.value)}
                >
                  {translate(option.label)}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="cod-cheat-summary">
        <div>
          <h2>
            {chaoticFightConfig.strats[stratName]?.label ?? stratName} - {alliance} 聯盟{' '}
            {selectedRoleLabel}
          </h2>
          {playerStrat && <p>{translate(playerStrat.notes)}</p>}
          <div className="cod-cheat-links">
            {sourceLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
            <button type="button" onClick={copyLink}>
              {copied ? '已複製連結' : '複製此設定連結'}
            </button>
          </div>
        </div>
      </section>

      {playerStrat ? (
        <>
          <section className="cod-cheat-grid" aria-label="主要小抄">
            {playerStrat.strats.map((step, index) => (
              <StepCard
                key={`${step.mechanic}-${index}`}
                step={step}
                spotlight={spotlight}
                alignment={alignment}
                assetBase={assetBase}
              />
            ))}
          </section>

          {playerStrat.swapNote && playerStrat.swapStrats && (
            <details className="cod-cheat-swaps" open>
              <summary>{translate(playerStrat.swapNote)}</summary>
              {playerStrat.swapWarning && (
                <p className="cod-cheat-warning">{translate(playerStrat.swapWarning)}</p>
              )}
              <div className="cod-cheat-grid cod-cheat-grid--swap">
                {playerStrat.swapStrats.map((step, index) => (
                  <StepCard
                    key={`swap-${step.mechanic}-${index}`}
                    step={step}
                    spotlight={spotlight}
                    alignment={alignment}
                    assetBase={assetBase}
                  />
                ))}
              </div>
            </details>
          )}
        </>
      ) : (
        <section className="cod-cheat-empty">
          找不到這個打法、聯盟與位置的資料。請換一組設定試試。
        </section>
      )}
    </main>
  );
}
