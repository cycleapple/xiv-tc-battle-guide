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
            'savage/cruiser/index',
          ],
        },
        {
          type: 'category',
          label: '重量級',
          items: [
            'savage/heavy/index',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
