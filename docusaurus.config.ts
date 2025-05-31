import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "asbplayer",
  tagline: "Learn languages with subtitles",
  favicon: "img/favicon.ico",
  url: "https://killergerbah.github.io",
  baseUrl: "/asbplayer-docs",
  organizationName: "killergerbah",
  projectName: "asbplayer-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/killergerbah/asbplayer-docs/edit/main",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "asbplayer",
      logo: {
        alt: "asbplayer logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "User Guide",
          to: "/docs/intro",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/killergerbah/asbplayer",
          className: "header-github-link",
          position: "right",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "User Guide",
          items: [
            {
              label: "User Guide",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/ad7VAQru7m",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/killergerbah/asbplayer",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} asbplayer authors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
