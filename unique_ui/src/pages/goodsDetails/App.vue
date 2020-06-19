<!--展示模板-->
<template>
  <div id="app">
    <top />
    <router-view/>
    <bottom id="bottom" />
  </div>
</template>

<script>
import top from '@/components/top.vue'
import bottom from '@/components/bottom.vue'
export default {
    components:{
      top,
      bottom
    }
}
</script>

<style lang="scss">
@import url(/css/App.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
    font-size: 12px;
    color: rgb(84,117,74);
    text-decoration: none;
    text-indent: none;
    &.router-link-exact-active {
      color: #42b983;
  }
}
#bottom {
  margin-top: 60px;
}
</style>