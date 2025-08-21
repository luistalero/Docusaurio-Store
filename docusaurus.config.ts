import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Wiedii Documentation',
  tagline: 'We learn to improve',
  favicon: 'img/favicon-wiedii.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://documentacion-store.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Conexion con Chatwoot
  //  headTags: [
  //   {
  //     tagName: 'script',
  //     attributes: {
  //       src: 'http://localhost:3000/packs/js/sdk.js',
  //       async: 'true',
  //       onload: 'window.chatwootSDK.run({ websiteToken: "JRk74e8MnPUL7Qx4Mt5RbfYP", baseUrl: "http://localhost:3000/" })'
  //     },
  //   },
  // ],
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/luistalero',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/luistalero',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,   
    },
    image: 'img/docusaurus-social-card.jpg', 
    navbar: {
      title: 'Wiedii Doc.',
      logo: {
        alt: 'My Site Logo',
        src: 'img/wimii-form.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://wiedii.co/',
          label: 'Wiedii',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Facebook',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/margay.wiedii',
            },
          ],
        },
        {
          title: 'Instagram',
          items: [
            {
              label: 'Instragram',
              href: 'https://www.instagram.com/wiedii.co/',
            },
          ],
        },
        {
          title: 'LinkedIn',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/wiediius/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wiedii Doc. Built with Docusaurus for Wiedii.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
