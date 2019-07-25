<template>
  <div>
    <Header parallax />
    <div class="theme-container">
      <Content/>
    </div>
  </div>  
</template>

<script>
import 'normalize.css'
import Vue from 'vue'
import VueParallaxJs from 'vue-parallax-js'
Vue.use(VueParallaxJs)

export default {

    
}
</script>

<style lang="stylus">
  @import './style/theme.styl'; 
</style>
