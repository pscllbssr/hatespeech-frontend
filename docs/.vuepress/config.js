var infoBox = require( './theme/blocks/infoBox');
var centerBox = require( './theme/blocks/centerBox');

module.exports = {
    //API_LOCATION: 'http://192.168.1.128:5000/predict/',
    markdown:{
        anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '' },
        config: md => {
            md.use(require("markdown-it-container"), "info", infoBox)
            md.use(require("markdown-it-container"), "center", centerBox)
            md.use(require('markdown-it-abbr'))
        }
    },
    base: '/der-hass-im-netz/',
    locales: {
        '/': {
          lang: 'de-CH',
          title: 'Der Hass im Netz',
          description: 'Ein Artikel über den Hass im Netz und die Frage, ob uns Maschinen dabei helfen können, ihn zu bekämpfen.',
          date: '9. August 2019',
          author: 'Pascal Albisser'
        }
    },
    themeConfig: {
        api: 'https://pascal.pythonanywhere.com/predict/',
    },
    head: [
        [
          "link",
          {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          }
        ],
          ['link', { rel: 'icon', href: '/favicon.ico' }]
        
      ]

}