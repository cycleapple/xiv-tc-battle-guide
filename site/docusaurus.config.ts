import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FF14 繁中高難攻略',
  tagline: 'Final Fantasy XIV 繁體中文高難度副本攻略指南',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://cycleapple.github.io',
  baseUrl: '/xiv-tc-battle-guide/',

  organizationName: 'cycleapple',
  projectName: 'xiv-tc-battle-guide',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FF14 繁中高難攻略',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: '攻略指南',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '攻略',
          items: [
            {
              label: '零式攻略',
              to: '/savage/light/m1s',
            },
          ],
        },
        {
          title: '參考資源',
          items: [
            {
              label: 'Game8 攻略 (日文原文)',
              href: 'https://game8.jp/ff14',
            },
            {
              label: 'Kitten ERP Guides (英文參考)',
              href: 'https://kitten-erp-guides.moe/',
            },
          ],
        },
      ],
      copyright: `FF14 繁體中文高難攻略 | 攻略內容參考 Game8`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
