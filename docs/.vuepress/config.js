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
          title: 'Lehrprojekt Bachelor',
          description: 'Hasskommentare im Internet sind ein zunehmendes Problem. Viele hoffen deshalb auf eine künstliche Intelligenz. Doch können Maschinen für uns das Internet retten?',
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
        ['link', { rel: 'icon', type: 'image/png', sizes:"96x96", href: '/favicon-96x96.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes:"32x32", href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes:"16x16", href: '/favicon-16x16.png' }],

        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],

        
        // og
        ['meta', {property: 'og:image', content: 'https://projekte.lbssr.ch/der-hass-im-netz/der-hass-im-netz.jpg'}],
        ['meta', {property: 'og:title', content: 'Der Hass im Netz'}],
        ['meta', {property: 'og:description', content: 'Hasskommentare im Internet sind ein zunehmendes Problem. Viele hoffen deshalb auf eine künstliche Intelligenz. Doch können Maschinen für uns das Internet retten?'}],
        ['meta', {property: 'og:url', content: 'https://projekte.lbssr.ch/der-hass-im-netz/'}],

      ],

}