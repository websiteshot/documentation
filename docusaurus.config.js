module.exports = {
  title: "Websiteshot",
  tagline:
    "Never spend time again to create awesome screenshots of your websites",
  // url: "https://websiteshot.github.io",
  // baseUrl: "/documentation/",
  url: "https://docs.websiteshot.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "websiteshot", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Websiteshot",
      logo: {
        alt: "Websiteshot",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "websiteshot/introduction",
          label: "Docs",
          position: "left",
        },
        {
          type: "doc",
          docId: "api/introduction",
          label: "API",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://console.websiteshot.app",
          label: "Console",
          position: "right",
        },
        {
          href: "https://github.com/websiteshot/documentation",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/",
            },
            {
              label: "API",
              to: "docs/api/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/websiteshot",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/websiteshot",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/websiteshot/documentation",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Websiteshot`,
    },
    algolia: {
      apiKey: "5f6ad1f022ff85f0c2fa2b3177b9617a",
      indexName: "websiteshot",
      searchParameters: {}, // Optional (if provided by Algolia)
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/websiteshot/documentation/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/websiteshot/documentation/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
