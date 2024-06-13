// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NETOPIA Development Portal',
  tagline: 'Get started with NETOPIA Payments APIs',
  favicon: 'img/favicon.ico',
  url: 'https://docs.netopia-payments.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'netopiapayments', // Usually your GitHub org/user name.
  projectName: 'doc.netopia-payments.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'NETOPIA Developer Portal',
        logo: {
          alt: 'NETOPIA Developer Portal',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/blog', 
            label: 'News', 
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'NETOPIA services',
            items: [
              {
                label: 'NETOPIA Payments',
                to: 'https://netopia-payments.com',
              },
              {
                label: 'Web2sms',
                to: 'https://web2sms.ro',
              },
              {
                label: 'mobilPay Wallet',
                to: 'https://netopia-payments.com/servicii/mobilpay-wallet-plata-cu-mobilul/',
              }
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/NETOPIAPayments/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@netopiagroup',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/netopia-system/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NETOPIA Payments.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
