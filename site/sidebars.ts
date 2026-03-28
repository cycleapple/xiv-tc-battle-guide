import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guideSidebar: [
    'intro',
    {
      type: 'category',
      label: '阿卡狄亞零式登天鬥技場（輕量級）',
      items: [
        'savage/m1s',
        'savage/m2s',
        'savage/m3s',
        'savage/m4s-1',
        'savage/m4s-2',
      ],
    },
  ],
};

export default sidebars;
