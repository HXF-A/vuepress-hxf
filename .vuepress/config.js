module.exports = {
  "title": "博客",
  "description": "HXF博客",
  "base": '/',
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
        // 密钥
    // "keyPage": {
    //   "keys": ['e10adc3949ba59abbe56e057f20f883e'], // 1.3.0 版本后需要设置为密文
    //   "color": '#42b983', // 登录页动画球的颜色
    //   "lineColor": '#42b983' // 登录页动画线的颜色
    // },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/HXF-A",
            "icon": "reco-github"
          },
          {
            "text": "Google",
            "icon": "reco-Google",
            "link": "https://www.google.com/"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "HXF",
    "authorAvatar": "/gua.jpeg",
    "record": "xxxx",
    "startYear": "2017"
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-katex'))
    }
  },
  plugins: [
    ['@vuepress-reco/comments', {
    solution: 'vssue',
    options: {
      title: 'vuepress-theme-reco',
      platform: 'github-v4',
      owner: 'HXF-A',
      repo: 'vuepress-reco',
      clientId: '2de4084bd53f1f7229f8',
      clientSecret: '4b87b6be76f4425dc1dd4be8706b8bf6d3ce37a3',
    }
  }],
  ['@vuepress-reco/vuepress-plugin-bgm-player', {
      audios: [
        // 网络文件示例
        {
          name: '강남역 4번 출구',
          artist: 'Plastic / Fallin` Dild',
          url: 'https://assets.smallsunnyfox.com/music/2.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
        {
          name: '一丝不挂',
          artist: '陈奕迅',
          url: 'https://sharefs.yun.kugou.com/202010121000/2fb14aa3fe506d1f6be0ec93e5f5b0c7/G093/M06/1F/09/PZQEAFu9rbeAFDhPADoJT_Xlt4o476.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
        },
        {
          name: '森林',
          artist: '陈奕迅',
          url: 'https://sharefs.yun.kugou.com/202010121001/4eb77d31f1b04bed2dd8378129f53dda/G193/M04/13/0F/oZQEAF5pXXaAfBIBAEsLmSAARnw387.mp3',
          cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
        },
      ],
      position : {
        right: "10px",
        top: "100px",
        zIndex: "999999"
      },
      autoShrink : true,
      floatPosition : "right",
      floatStyle : { 
        top: "128px",
        zIndex: "999999"
      }
  }]
],

}