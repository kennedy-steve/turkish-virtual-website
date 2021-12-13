// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Turkish Virtual Airline',
  tagline: 'flying on Infinite Flight',
  url: 'https://kennedy-steve.github.io',
  baseUrl: '/turkish-virtual-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kennedy-steve', // Usually your GitHub org/user name.
  projectName: 'turkish-virtual-website', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
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
      navbar: {
        title: 'Turkish Virtual Airline',
        logo: {
          alt: 'Turkish Virtual Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/about-us', label: 'About Us', position: 'left'},
          {
            type: 'dropdown',
            label: 'Operations',
            position: 'left',
            items: [
              {
                label: 'Fleet',
                href: '/operations/fleet',
              },
              {
                label: 'Routes',
                href: '/operations/routes',
              },
              {
                label: 'Ranks',
                href: '/operations/ranks',
              },
              {
                label: 'Hubs',
                href: '/operations/hubs',
              },
              // ... more items
            ],
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Operations',
            items: [
              {
                label: 'Fleet',
                to: '/operations/fleet',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kennedy Steve. Created by Tisuela. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
