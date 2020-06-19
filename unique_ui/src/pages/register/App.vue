<!--展示模板-->
<template>
  <div id="app">
    <router-view/>
    <loginBottom class="loginBottom" />
  </div>
</template>

<script>
import loginBottom from '../login/components/loginBottom.vue'
export default {
    components:{
      top,
      loginBottom
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
.loginBottom {
  background-color: white;
  margin-top: -22px;
  padding-top: 30px;
  padding-left: 20px;
}
</style>