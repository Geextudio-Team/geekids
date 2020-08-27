module.exports = {

    /* configureWebpack: {
      resolve: {
        alias: {
          '@homeurl':'/static/images',
        }
      }
    }, */

    dest: 'dist',
    
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
          title: '《故事泡泡》',
          description: '姑苏小沈同学给孩子们讲的睡前故事，加了点梦和想象的泡泡.'
        },

       /*  '/en/': {
          lang: 'en-US',
          title: 'The Tale Bubbles',
          description: 'Tales bubbles with dreams & imagination for kids.'
        } */
      },

      themeConfig: {

        logo: 'https://raw.githubusercontent.com/Geextudio-Team/geekids/master/talebubbles/docs/static/images/wizardlogo.svg',

        locales: {

            '/': {
                lang: 'zh-CN',

                // 多语言下拉菜单的标题
                // selectText: '选择语言',

                // 该语言在下拉菜单中的标签
                label: '简体中文',

                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',

                // Service Worker 的配置
                serviceWorker: {
                  updatePopup: {
                    message: "发现新内容可用.",
                    buttonText: "刷新"
                  }
                },

                // 当前 locale 的 algolia docsearch 选项
                algolia: {},

                // 导航菜单
                nav: [
                  { text: '首页', link: '/' }
                ],

              },  

          /*   '/en/': {
                lang: 'en-US', 
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                algolia: {},

                // navigator
                nav: [
                  { text: 'Home', link: '/en/' }
                ],

            } */
            
        }
      }
  };