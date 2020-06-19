<template>
    <div id="login_div">
        <div class="login_top">            
            <img class="webLogo" src="../logo2-.png">
            <p>欢迎登录!</p>
            <a class="Toindex" href="index.html">返回首页></a>
        </div>
        <div class="login_middle">
            <img class="lobj" src="/img/loginbj.png" alt="">
            <div class="loginInfo">
                <h3>账户密码登录</h3>
                <div class="user_input">                    
                    <div class="usericon"><i class="iconfont icon-yonghu"></i></div>
                    <input type="text" placeholder="请输入用户名" v-model="username">
                </div>
                <!-- <p class="tishi" v-show="showTishi">! 用户不存在</p> -->
                <div class="mima_input">
                    <div class="pswicon"><i class="iconfont icon-mima"></i></div>
                    <input type="password" placeholder="请输入密码" v-model="password">
                </div>
                <!-- <p class="tishi" v-show="userTishi">密码错误</p> -->
                <a class="forget" href="">忘记密码</a><br>   
                <button class="btn_login" @click="login">登录</button>
                <div class="login_bottom">
                    <a class="weqq boqq" href="">
                        <img class="qq" src="/img/iconfonts/QQ.png" alt="">
                        <span>QQ</span>
                    </a>
                    <a class="weqq" href="">
                        <img src="/img/iconfonts/wechat.png" alt="">
                        <span>微信</span>
                    </a>
                    <span class="toregister"><a href="register">立即注册<i class="iconfont icon-gengduo"></i></a></span>
                </div>
            </div>
        </div>
        <div>
            <cart></cart>
        </div>
    </div>
</template>

<script>
import {setCookie,getCookie} from '../../js/cookie.js'
import axios from 'axios'
import cart from '../components/cart.vue'
export default {
    data(){
        return {
            // showTishi:false,
            // tishi:'',
            username:'',
            password:'',
        }
    },
    mounted(){
        if(getCookie('username')){
            this.$router.push('/index')
        }
    },
     methods:{
    login(){
        if(this.username == "" || this.password == ""){
            alert("请输入用户名或密码")
        }else{
            let data = {'username':this.username,'password':this.password}
            /*接口请求*/
            axios.post('/api/jue/public/login',data).then((res)=>{
                console.log(res)
             /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
              if(res.data == -1){
                  alert("用户名不存在")
                //   this.showTishi = true
              }else if(res.data == 0){
                  alert("密码输入错误")
                //   this.showTishi = true
              }else if(res.data == 'admin'){
              /*路由跳转this.$router.push*/
                  this.$router.push('/main')
              }else{
                  alert("登录成功")
                //   this.showTishi = true
                //   setCookie('username',this.username,1000*60)
                //   setTimeout(function(){
                //       this.$router.push('/')
                //   }.bind(this),1000)
              }
          })
      }
    }
  },
  components:{
      cart,
  }
}
</script>

<style lang="scss" scoped>
  @import url('../css/login.css');
</style>