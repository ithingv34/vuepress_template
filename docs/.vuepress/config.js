const { getFilesOf } = require('./util.js');

module.exports = {
  base: '/vuepress_template/devnote/',
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
        children: getFilesOf('src/Section2'),
      }
    ],
    repo: 'ithingv34/vuepress_template',
    repoLabel: 'GitHub',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Edit this page🙌!',
  },
};
