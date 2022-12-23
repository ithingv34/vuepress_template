const { getFilesOf } = require('./util.js');

module.exports = {
  base: '/devnote/',
  assetsPublicPath: '/',
  title: "Dev note",
  plugins: ['@vuepress/last-updated'],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      ['/', 'Devnote'],
      {
        title: 'Section1',
        path: '/src/Section1/',
        children: getFilesOf('src/Section1'),
      },
      {
        title: 'Section2',
        path: '/src/Section2/',
        children: getFilesOf('docs/Section2'),
      }
    ],
    base: '/vuepress_template/',
    repo: 'ithingv34/vuepress_template',
    repoLabel: 'GitHub',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Edit this page🙌!',
  },
};
