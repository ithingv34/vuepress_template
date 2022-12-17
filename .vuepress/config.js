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
        path: '/docs/Section1/',
        children: getFilesOf('docs/Section1'),
      },
      {
        title: 'Section2',
        path: '/docs/Section2/',
        children: getFilesOf('docs/Section2'),
      }
    ],
    repo: 'ithingv34/vuepress_template',
    repoLabel: 'GitHub',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Edit this page🙌!',
  },
};
