// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Earn Alliance',
  tagline: 'Guild of Guilds',
  url: 'https://earnalliance.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'earn-alliance', // Usually your GitHub org/user name.
  projectName: 'earnalliance.com', // Usually your repo name.
  customFields: {
    // Put your custom environment here
    signupurl: process.env.SIGNUP_BASE_URL,
    loginurl: process.env.LOGIN_BASE_URL,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      autoCollapseSidebarCategories: false,
      navbar: {
        title: 'Earn Alliance',
        logo: {
          alt: 'Earn Alliance Logo',
          src: 'img/EarnHome.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/overview',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://app.earnmanagement.com',
          //   label: 'Login',
          //   position: 'right',
          //   className: 'header-login-link'
          // },
          // {
          //   href: 'https://app.earnmanagement/signup',
          //   label: 'Register',
          //   position: 'right',
          //   className: 'header-register-link'
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site',
            items: [
              {
                label: 'Docs',
                to: '/docs/getting-started/overview',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              // {
              //   label: 'Login',
              //   href: 'https://app.earnmanagement.com'
              // },
              // {
              //   label: 'Register',
              //   href: 'https://app.earnmanagement.com/signup'
              // },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Roadmap',
                href: 'https://roadmap.earnmanagement.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/EmGzug9FKd',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/earnalliance',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact Us',
                to: '/contact',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Earn Alliance Limited. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
