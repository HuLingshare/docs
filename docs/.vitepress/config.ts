import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'HuLingDocs',
  description: 'Vite & Vue powered static site generator.',

  lastUpdated: true,
  cleanUrls: true,

  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    // https://zhuanlan.zhihu.com/p/568538285
    algolia: {
      appId: 'SOQWM2XHFS',
      apiKey: '2bef230dc5c3d129504bee89eb47f05a',
      indexName: 'hulingdocs-index-01',
      placeholder: '请输入关键字',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档',
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消',
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除',
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接',
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈',
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者',
          },
        },
      },
    },
    nav: nav(),

    sidebar: {
      '/web/': sidebarWeb(),
      '/collect': sidebarCollect(),
      '/other': sidebarOther(),
    },

    editLink: {
      pattern: 'https://github.com/HuLingshare/docs',
      text: 'Edit this page on GitHub',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present HuLing',
    },
  },
})

function nav() {
  return [
    { text: 'web文档', link: '/web/css', activeMatch: '/web/' },
    { text: '收藏', link: '/collect/collect', activeMatch: '/collect/' },
    { text: '其他', link: '/other/fastButton', activeMatch: '/other/' },
    {
      text: '0.0.1',
      items: [
        {
          text: 'github',
          link: 'https://github.com/HuLingshare/docs.git',
        },
        {
          text: '百度',
          link: 'https://www.baidu.com/',
        },
      ],
    },
  ]
}

function sidebarWeb() {
  return [
    {
      text: 'Git',
      collapsible: true,
      items: [{ text: 'git', link: '/web/git' }],
    },
    {
      text: 'CSS',
      collapsible: true,
      items: [
        { text: '开始 Tailwind CSS 之旅', link: '/web/Tailwind' },
        { text: 'Less', link: '/web/Less' },
      ],
    },
    {
      text: 'Vue',
      collapsible: true,
      items: [{ text: 'Vue3', link: '/web/Vue3' }],
    },
    {
      text: 'Javascript',
      collapsible: true,
      items: [
        { text: 'Javascript', link: '/web/Javascript' },
        { text: '常用方法', link: '/web/Javascript-funs' },
      ],
    },
    {
      text: 'TypeScript',
      collapsible: true,
      items: [
        {
          text: 'TypeScript',
          link: '/web/TypeScript',
        },
      ],
    },
    {
      text: '单元测试',
      collapsible: true,
      items: [
        {
          text: 'Jest',
          link: '/web/Jest',
        },
      ],
    },
    {
      text: '项目构建',
      collapsible: true,
      items: [
        {
          text: 'Vite',
          link: '/web/Vite',
        },
      ],
    },
    {
      text: '项目规范',
      collapsible: true,
      items: [
        {
          text: 'Husky',
          link: '/web/Husky',
        },
      ],
    },
  ]
}

function sidebarCollect() {
  return [
    {
      text: '喜欢&收藏',
      collapsible: true,
      items: [
        {
          text: '收藏地址',
          link: '/collect/collect',
        },
        {
          text: 'B站的弹幕不遮挡人物效果',
          link: '/collect/videoDemo',
        },
      ],
    },
  ]
}
function sidebarOther() {
  return [
    {
      text: '其他',
      collapsible: true,
      items: [
        {
          text: '快捷键相关',
          link: '/other/fastButton',
        },
      ],
    },
  ]
}
