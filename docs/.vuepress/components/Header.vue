<template>
    <div class="theme-header" ref="header">
        <header>
            <div>
                <h1>{{ $page.frontmatter.title }}</h1>
                <div class="sans-serif theme-header__meta">{{ $page.frontmatter.date }} - {{ $page.frontmatter.author }}</div>
            </div>            
        </header> 
        <div class="parallax bubble-1" data-offset="0.1"></div>
        <div class="parallax bubble-2" data-offset="0.2"></div> 
        <div class="parallax bubble-3" data-offset="0.3"></div>   
        <div class="parallax bubble-4" data-offset="0.4"></div>       
    </div>
</template>
<script>

export default {
    data() {
        return { 
            parallax_children: []
        }
    },
    mounted: function(){
        let header_div = this.$refs["header"]
        this.parallax_children = header_div.getElementsByClassName('parallax')
        window.addEventListener('scroll', this.parallaxer)        
    },
    methods: {
        parallaxer(){
            for(let i = 0; i < this.parallax_children.length; i++) {
                let offset_co = this.parallax_children[i].dataset.offset
                let offset = offset_co * window.pageYOffset
                this.parallax_children[i].style.transform = 'translateY(' + offset + 'px)'
            }
        }
    }
}
</script>


