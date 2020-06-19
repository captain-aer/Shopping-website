<template>
    <div id="register_div">
        <div class="register_top">            
            <img class="webLogo" src="../logo2-.png">
            <p>欢迎注册!</p>
            <p class="reTologin">已有账户？<a href="login.html">请登录></a></p>
        </div>
        <div class="register_info">
            <div class="regspeed">
                <!-- <div class="respinfo on">
                    <div class="number">1</div>
                    <span>验证手机号</span>
                </div> -->
                <div class="respinfo on">
                    <div class="number">1</div>
                    <span>设置账号信息</span>
                </div>
                <div class="respinfo">
                    <div class="number">2</div>
                    <span>完成验证</span>
                </div>

                <!-- <div v-show="regsone" class="regsone">
                    <div class="phone_input">
                        <div class="phone_p">中国0086></div>
                        <input type="text" placeholder="请输入手机号码">
                    </div>
                    <p class="tishi" v-show="phoneTishi">请输入正确的手机号码</p>
                    <div class="check_input">
                        <div class="check_p">验证码</div>
                        <input type="text" placeholder="请输入验证码">
                        <button class="btn_checknum">免费获取验证码</button>
                        <p class="tishi" v-show="checkTishi">验证码错误</p>
                    </div>
                    <button class="regnext">下一步</button>
                </div> -->

                <div v-show="regstwo" class="regstwo">
                    <div class="input user_input">
                        <div class="phone_p">用户名</div>
                        <input v-model="newUsername" type="text" name="userName" placeholder="您的账户名和登录名">
                    </div>
                    <div class="input mima_input">
                        <div class="check_p">设置密码</div>
                        <input type="password" v-model="newPassword" placeholder="建议使用两种或两种以上字符组合">
                    </div>
                    <div class="input chemima_input">
                        <div class="phone_p">确认密码</div>
                        <input type="password" v-model="checkpassword" placeholder="请再次输入密码">
                    </div>
                    <div class="input email_input">
                        <div class="check_p">邮箱验证</div>
                        <input type="text" v-model="email" placeholder="请输入邮箱">
                    </div>
                    <!-- <div class="input emche_input">
                        <div class="check_p">邮箱验证码</div>
                        <input type="text" placeholder="请输入邮箱验证码">
                        <button class="btn_checknum">免费获取验证码</button>
                        <p class="tishi" v-show="emcheTishi">! 验证码错误</p>
                    </div> -->
                    <button class="regnext" @click="register">注册</button>
                </div>

                <div v-show="regsthree" class="regsthree">
                    <img src="../finish.png" alt="">
                    <h1>完成注册！</h1>
                    <button class="backtologin"><a href="login.html">返回登录</a></button>
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>
<script>
import {setCookie,getCookie} from '../../js/cookie.js'
import axios from 'axios'
import 'vue-resource'
export default {
    data(){
        return{
            // regsone:true,   //验证手机号
            regstwo:true,   //设置账号信息
            regsthree:false,   //完成
            newUsername:'',
            newPassword:'',
            checkpassword:'',
            email:'',
            // phoneTishi:false,  //输入手机号码
            // checkTishi:false,  //手机号码验证码
            // userTishi:false,    //用户名
            // mimaTishi:false,    //密码
            // chemimaTishi:false,  //确认密码
            // emailTishi:false,   //邮箱
            // emcheTishi:false     //邮箱验证码
        }
    },
    methods:{
        register(){
            if(this.newUsername == "" || this.newPassword == ""){
                alert("请输入用户名或密码")
            }else if (this.checkpassword == ''){
                alert("请再次输入密码")
            }else if(this.checkpassword != this.newPassword){
                alert("两次密码输入不一致")
            }else if (this.email == ''){
                alert("请输入邮箱")
            }else{
                var reg = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/;
                if (!reg.test(this.email)) {
                    alert("邮箱格式不正确，请重新输入！")
                }else {
                let data = {'username':this.newUsername,'password':this.newPassword,'email':this.email}
                    axios.post('/api/jue/public/zc',data).then((res)=>{
                    console.log(res)
                    if(res.data == "ok"){                        
                        this.username = ''
                        this.password = ''
                        this.email = ''
                        // this.regstwo = false
                        // this.regsthree = true
                        // setTimeout(function(){
                        // }.bind(this),1000)
                    }
                    this.regstwo = false
                    this.regsthree = true              
                    alert("注册成功!")
                    $('.respinfo').toggleClass('on');
                })             
                
            }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
  @import url('../css/register.css');
</style>