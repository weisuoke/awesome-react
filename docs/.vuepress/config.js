module.exports = {
  dest: 'dist',
  title: 'Awesome react',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    search: false,
    lastUpdated: "更新时间",
    nav: [],
    sidebar: [
      {
        title: "UI Component",
        path: "/ui/",
        collapsable: true,
        sidebarDepth: 1,
      },
    ]
  }
}
