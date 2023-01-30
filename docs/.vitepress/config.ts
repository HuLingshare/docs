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
      level: [0, 0]
    }
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/web/': sidebarWeb(),
      '/collect': sidebarCollect(),
      '/beibei': sidebarBeibei(),
    },

    editLink: {
      pattern: 'https://github.com/HuLingshare/docs',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present HuLing'
    }
  }
})

function nav() {
  return [
    { text: 'web文档', link: '/web/css', activeMatch: '/web/' },
    { text: '收藏', link: '/collect/collect', activeMatch: '/collect/' },
    { text: 'BBDuoRua', link: '/beibei/index', activeMatch: '/beibei/' },
    {
      text: '0.0.1',
      items: [
        {
          text: 'github',
          link: 'https://github.com/HuLingshare/docs.git'
        },
        {
          text: '百度',
          link: 'https://www.baidu.com/'
        },
      ]
    }
  ]
}

function sidebarWeb() {
  return [
    {
      text: 'Git',
      collapsible: true,
      items: [
        { text: 'git', link: '/web/git' }
      ]
    },
    {
      text: 'CSS',
      collapsible: true,
      items: [
        { text: '开始 Tailwind CSS 之旅', link: '/web/Tailwind' },
        { text: 'Less', link: '/web/Less' },
      ]
    },
    {
      text: 'Vue',
      collapsible: true,
      items: [
        { text: 'Vue3', link: '/web/Vue3' }
      ]
    },
    {
      text: 'TypeScript',
      collapsible: true,
      items: [
        {
          text: 'TypeScript',
          link: '/web/TypeScript'
        }
      ]
    },
    {
      text: '单元测试',
      collapsible: true,
      items: [
        {
          text: 'Jest',
          link: '/web/Jest'
        }
      ]
    },
    {
      text: '项目构建',
      collapsible: true,
      items: [
        {
          text: 'Vite',
          link: '/web/Vite'
        }
      ]
    },
    {
      text: '项目规范',
      collapsible: true,
      items: [
        {
          text: 'Husky',
          link: '/web/Husky'
        }
      ]
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
          link: '/collect/collect'
        }
      ]
    }
  ]
}
function sidebarBeibei() {
  return [
    {
      text: '贝贝',
      collapsible: true,
      items: [
        {
          text: '贝贝',
          link: '/beibei/index'
        }
      ]
    }
  ]
}