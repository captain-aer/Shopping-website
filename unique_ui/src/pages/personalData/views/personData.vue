<template>
    <div id="personDatadiv">
        <div id="head">
            <img class="webLogo" src="../logo2-.png">
            <h1>MY UNIQUE</h1>
            <input  value="请输入要搜索的关键词" onfocus="javascript:if(this.value=='请输入要搜索的关键词')this.value='';" type="text" autocomplete="off" id="search" accesskey="s" />
            <div class="seimg_span">
                <img class="search_img" src="/img/iconfonts/search.png" />
            </div>
        </div>
        <div id="mainPart">
            <div class="mainLeft">
                <p>账户管理</p>
                <ul class="mainmenu">
                    <li><button>安全设置</button></li>
                    <li><button class="mainLi active" @click="personInfo">个人资料</button></li>
                    <li><button class="mainLi" @click="addressbtn">收货地址</button></li>
                </ul>
            </div>
            <div v-show="personinfolist" class="mainright">
                <p class="peinfo">个人资料</p>
                <div class="babtn">
                    <button class="chanbtn infoActive" @click="chaninfo">基本资料</button>
                    <button class="chanbtn" @click="headimg">头像照片</button>
                </div>
                <div id="basicInfo">
                    <form v-show="basicshow" action="" method="get" class="basicData">
                        <p class="textp">亲爱的username，填写真实的资料，有助于好友找到你哦。</p>
                        <div class="headimg">                        
                            <span>当前头像：</span>
                            <img src="/img/imgBanner1/banner2.png" alt="">
                        </div>
                        <p class="nickname">
                            <span class="batitle">*昵称：</span>
                            <input type="text" maxlength="25" placeholder="不超过25个字符" name="" id="">
                        </p>
                        <p class="truename">
                            <span>真实姓名：</span>
                            <input type="text" maxlength="6" placeholder="不超过6个字符" name="" id="">
                        </p>
                        <p class="trsex">
                            <span class="batitle">*性别：</span>
                            <label><input type="radio" name="sex" checked="checked" id="">男</label>
                            <label><input type="radio" name="sex" id="">女</label>
                        </p>
                        <input type="submit" class="basicPreser" value="保存">
                    </form>
                    <div v-show="headshow" class="headInfo">
                        <p class="tip">仅支持JPG、GIF、PNG文件，且文件小于5M<span class="error">{{errorStr}}</span></p>
                        <div class="user-header">
                            <input type="file" name="image" accept="image/*" @change='onchangeImgFun'
                            class="header-upload-btn user-header-com">
                            <img  alt="" :src='imgStr' class="user-header-img user-header-com"><br>
                            <input type="submit" class="preservation" value="保存">
                        </div>
                        <div class="allhead">
                            <div class="bighead">
                                <p class="imgTips">您上传的头像会自动生成三种尺寸，请注意中小尺寸的头像是否清晰</p>
                                <img :src="imgStr" alt="" class="user-bigimg">
                                <p class="imgsize1">大尺寸头像，160×160像素</p>
                            </div>
                            <div class="Mhead">
                                <img :src="imgStr" class="user-Mimg" alt="">
                                <p class="imgsize2">中尺寸头像60×60像素</p>
                            </div>
                            <div class="Shead">
                                <img :src="imgStr" class="user-Simg" alt="">
                                <p class="imgsize2">小尺寸头像30×30像素</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="addressinfolist" id="addressinfo">
                <addressList></addressList>
            </div>
        </div>
    </div>
</template>

<script>
import addressList from '../components/addressList.vue'
export default {
    data() {
        return{            
            basicshow:true,
            headshow:false,
            personinfolist:true,
            addressinfolist:false,
            imgStr:'',
            errorStr: ''
        }
    },
    methods:{
        addressbtn:function() {
            $('.mainLi').toggleClass('active');
            this.personinfolist = false;
            this.addressinfolist = true;
        },
        personInfo:function() {
            $('.mainLi').toggleClass('active');
            this.personinfolist = true;
            this.addressinfolist = false;
        },

        chaninfo:function(){
            this.basicshow = true,
            this.headshow = false,
            $('.chanbtn').toggleClass('infoActive')
        },
        headimg:function(){
            this.basicshow = false,
            this.headshow = true,
            $('.chanbtn').toggleClass('infoActive')
        },

        onchangeImgFun (e) {
            var file = e.target.files[0]
            console.log(file)
            // 获取图片的大小，做大小限制有用
            let imgSize = file.size
            console.log(imgSize)
            var _this = this // this指向问题，所以在外面先定义
            // 比如上传头像限制5M大小，这里获取的大小单位是b
            if (imgSize / 1024 /1024 < 5) {
                // 合格
                _this.errorStr = ''
                console.log('大小合适')
                // 开始渲染选择的图片
                // 本地路径方法 1
                // this.imgStr = window.URL.createObjectURL(e.target.files[0])
                // console.log(window.URL.createObjectURL(e.target.files[0])) // 获取当前文件的信息

                // base64方法 2
                var reader = new FileReader()
                reader.readAsDataURL(file) // 读出 base64
                reader.onloadend = function () {
                // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
                var dataURL = reader.result
                console.log(dataURL)
                _this.imgStr = dataURL
                // 下面逻辑处理
                }
            } else {
                console.log('大小不合适')
                _this.errorStr = '图片大小超出范围'
            }
        }
    },
    components:{
        addressList
    }
}
</script>

<style lang="scss" scoped>
  @import url('../css/persondata.css');
</style>