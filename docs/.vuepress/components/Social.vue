<template>
    <div class="social">
        <a :href="`https://twitter.com/intent/tweet?${ twitterQueryString }`" class="btn btn--social" target="_blank">
            Twitter
        </a>
        <a :href="`https://www.facebook.com/sharer/sharer.php?${ facebookQueryString }`" class="btn btn--social" target="_blank">
            Facebook
        </a>        
        <a :href="`https://www.linkedin.com/shareArticle?${ linkedInQueryString }`" class="btn btn--social" target="_blank">
            LinkedIn
        </a>                
        <a :href="`mailto:info@example.com?${ mailQueryString }`" class="btn btn--social" target="_blank">
            Mail
        </a>    
    </div>    
</template>

<script>
const querystring = require('querystring');

export default {
     data() {
        return { 
            social: {
                twitter: {
                        url: window.location.href,
                        text: '',
                        hashtags: ''
                },
                facebook: {u: window.location.href},
                linkedin: {mini: true, url: 'https://projekte.lbssr.ch/der-hass-im-netz/', title: '', summary: 'null', source: ''},
                mail: { subject: null, body: null}
            }                
        }
    },
    computed: {
        twitterQueryString: function(){
            return querystring.stringify(this.social.twitter)
        },
        facebookQueryString:  function(){
            return querystring.stringify(this.social.facebook)
        },
        linkedInQueryString: function(){
            return querystring.stringify(this.social.linkedin)
        },
        mailQueryString: function() {
            return querystring.stringify(this.social.mail)
        }

    },
    mounted(){
        this.social.twitter.text = this.$site.locales['/'].description || this.$site.description 
        this.social.linkedin.summary = this.$site.locales['/'].description || this.$site.description 
        this.social.linkedin.title = this.$page.title || this.$site.locales['/'].title
    }

}
</script>

