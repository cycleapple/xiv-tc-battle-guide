import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    'intro',
    {
      type: 'category',
      label: '阿卡狄亞零式登天鬥技場',
      items: [
        {
          type: 'category',
          label: '輕量級',
          items: [
            'savage/light/gearing',
            'savage/light/m1s',
            'savage/light/m2s',
            'savage/light/m3s',
            'savage/light/m4s-1',
            'savage/light/m4s-2',
          ],
        },
        {
          type: 'category',
          label: '中量級',
          items: [
            'savage/cruiser/gearing',
            'savage/cruiser/m5s',
            'savage/cruiser/m6s',
            'savage/cruiser/m7s',
            'savage/cruiser/m8s-1',
            'savage/cruiser/m8s-2',
          ],
        },
        {
          type: 'category',
          label: '重量級',
          items: [
            'savage/heavy/gearing',
            'savage/heavy/m9s',
            'savage/heavy/m10s',
            'savage/heavy/m11s',
            'savage/heavy/m12s-1',
            'savage/heavy/m12s-2',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
