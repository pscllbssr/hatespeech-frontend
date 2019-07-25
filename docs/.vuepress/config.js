var infoBox = require( './theme/blocks/infoBox');
module.exports = {
    //API_LOCATION: 'http://192.168.1.128:5000/predict/',
    markdown:{
        anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '' },
        config: md => {
            md.use(require("markdown-it-container"), "info", 
                infoBox
            );
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
    }

}