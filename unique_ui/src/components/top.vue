<template>
    <div id="top">
        <ul class="top_left">
          <li><img class="imgLoca" src="/img/iconfonts/sy.png" /></li>
          <li class="location_"><a href="index.html">网站首页</a></li>
        </ul>
        <ul class="top_right">
          <li><a href="#">网站导航</a></li>
          <li><a href="#">客户服务</a></li>
          <li><a href="#">我的会员</a></li>
          <li><a href="myOrder.html">我的订单</a></li>
          <li><a href="login.html">您好，请登录</a> / <a href="register.html">免费注册</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'top',
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
a:hover {
  color: rgb(208,70,36) !important;
  font-weight: normal !important;
}
#top {
  background-color: rgb(242,244,243) !important;
}
</style>