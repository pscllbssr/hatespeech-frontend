<template>
    <div class="social">
        <h3>Teilen:</h3>
        <a :href="`https://twitter.com/intent/tweet?${ twitterQueryString }`" class="btn btn--social btn--twitter" target="_blank" title="Twitter">
            <i class="fa fa-twitter"></i> 
        </a>
        <a :href="`https://www.facebook.com/sharer/sharer.php?${ facebookQueryString }`" class="btn btn--social btn--fb" target="_blank" title="Facebook">
            <i class="fa fa-facebook"></i>
        </a>        
        <a :href="`https://www.linkedin.com/shareArticle?${ linkedInQueryString }`" class="btn btn--social btn--in" target="_blank" title="LinkedIn">
            <i class="fa fa-linkedin"></i>
        </a>                
        <a :href="`mailto:info@example.com?${ mailQueryString }`" class="btn btn--social btn--mail" target="_blank" title="Mail">
            <i class="fa fa-envelope"></i>
        </a>    
    </div>    
</template>

<script>
const querystring = require('querystring')

export default {
     data() {
        return { 
            social: {
                twitter: {
                        url: window.location.href,
                        text: '',
                },
                facebook: {u: window.location.href},
                linkedin: {mini: true, url: window.location.href, title: '', summary: ''},
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

        const description = this.$site.locales['/'].description || this.$site.description
        const title = this.$page.title || this.$site.locales['/'].title

        this.social.twitter.text =  description
        this.social.linkedin.summary = description
        this.social.linkedin.title = title
        this.social.mail.subject = 'Artikel: ' + title
        this.social.mail.body = `${description}\n\n<a href="${window.location.href}>Zum Artikel</a>"`
    }

}
</script>

