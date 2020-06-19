<template>
    <div id="detailbot">
        <div class="botleft">

        </div>
        <div class="botright">
            <div class="allbtn">
                <button class="btn1 btn active" @click="goodsinfo">商品详情</button>
                <button class="btn2 btn" @click="evaluatebtn">累计评价</button>
            </div>            
            <div id="spxq" v-show="shangpin">
                <div class="allinfodiv">
                    <ul class="allinfo">
                        <li class="infoname">商品名称：</li>                 
                        <li v-for="goItem in goodsInfoData.goodsItem" :key="goItem.info">{{goItem.name}} ：{{goItem.info}}</li>
                    </ul>
                    <ul class="infoimg">
                        <li v-for="goodimg in goodsInfoData.goodsimg" :key="goodimg.imgurl"><img :src="goodimg.imgurl" alt=""></li>
                    </ul>
                </div>
            </div>
            <div id="ljpj" v-show="evaluate">
                <div class="leiji">累计评价 {{evaluateInfo.length}}</div>
                <ul class="evaul">
                    <li v-for="evainfo in evaluateInfo" :key="evainfo.username">
                        <div class="eval1">
                            <p class="content">{{evainfo.content}}</p>
                            <img class="evaimage" :src="evainfo.evaimg" alt="">                        
                            <p class="evatime">{{evainfo.evatime}}</p>
                        </div>
                        <div class="eval2">
                            <p>颜色分类：<span>{{evainfo.color}}</span></p>
                            <p>尺码：<span>{{evainfo.evasize}}</span></p>
                        </div>
                        <p class="evauser">{{evainfo.username}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            goodsInfoData:{
                "goodsItem":[
                    {"name":"品牌","info":"品牌1"},
                    {"name":"图案","info":"图案1"},
                    {"name":"颜色分类","info":"颜色分类1"},
                    {"name":"材质成分","info":"材质成分1"},
                    {"name":"领型","info":"领型1"},
                    {"name":"品牌","info":"品牌1"},
                    {"name":"图案","info":"图案1"},
                    {"name":"颜色分类","info":"颜色分类1"},
                    {"name":"材质成分","info":"材质成分1"},
                    {"name":"领型","info":"领型1"},
                    {"name":"品牌","info":"品牌1"},
                    {"name":"图案","info":"图案1"},
                    {"name":"颜色分类","info":"颜色分类1"},
                    {"name":"材质成分","info":"材质成分1"},
                    {"name":"领型","info":"领型1"}
                ],
                "goodsimg":[
                    {"imgurl":"/img/imgBanner1/banner1.jpg"},
                    {"imgurl":"/img/imgBanner1/banner2.png"},
                    {"imgurl":"/img/imgBanner1/banner3.jpg"},
                    {"imgurl":"/img/imgBanner1/banner4.png"},
                    {"imgurl":"/img/imgBanner1/banner5.jpg"},
                ]
            },
            evaluateInfo:[
                {content:"评价文字1评价文字1评价文字1评价文字1评价文字1评价文字1评价文字1评价文字1评价文字1",evaimg:"/img/imgBanner1/banner1.jpg",color:"蓝色",evasize:"xl",username:"用户名1",evatime:"2020-03-01"},
                {content:"评价文字2",evaimg:"/img/imgBanner1/banner2.png",color:"绿色",evasize:"l",username:"用户名2",evatime:"2020-03-02"},
                {content:"评价文字3",evaimg:"/img/imgBanner1/banner3.jpg",color:"青色",evasize:"xs",username:"用户名3",evatime:"2020-03-08"},
                {content:"评价文字4",evaimg:"/img/imgBanner1/banner4.png",color:"紫色",evasize:"m",username:"用户名4",evatime:"2020-03-09"},
                {content:"评价文字5",evaimg:"/img/imgBanner1/banner5.jpg",color:"黄色",evasize:"xxl",username:"用户名5",evatime:"2020-03-11"},
                {content:"评价文字6",evaimg:"/img/imgBanner1/banner1.jpg",color:"蓝色",evasize:"xl",username:"用户名1",evatime:"2020-04-01"},
                {content:"评价文字7",evaimg:"/img/imgBanner1/banner2.png",color:"绿色",evasize:"l",username:"用户名2",evatime:"2020-04-02"},
                {content:"评价文字8",evaimg:"/img/imgBanner1/banner3.jpg",color:"青色",evasize:"xs",username:"用户名3",evatime:"2020-04-08"},
                {content:"评价文字9",evaimg:"/img/imgBanner1/banner4.png",color:"紫色",evasize:"m",username:"用户名4",evatime:"2020-04-09"},
                {content:"评价文字10",evaimg:"/img/imgBanner1/banner5.jpg",color:"黄色",evasize:"xxl",username:"用户名5",evatime:"2020-04-11"},

                {content:"评价文字11",evaimg:"/img/imgBanner1/banner1.jpg",color:"蓝色",evasize:"xl",username:"用户名1",evatime:"2020-04-12"},
                {content:"评价文字12",evaimg:"/img/imgBanner1/banner2.png",color:"绿色",evasize:"l",username:"用户名2",evatime:"2020-04-16"},
                {content:"评价文字13",evaimg:"/img/imgBanner1/banner3.jpg",color:"青色",evasize:"xs",username:"用户名3",evatime:"2020-04-18"},
                {content:"评价文字14",evaimg:"/img/imgBanner1/banner4.png",color:"紫色",evasize:"m",username:"用户名4",evatime:"2020-04-22"},
                {content:"评价文字15",evaimg:"/img/imgBanner1/banner5.jpg",color:"黄色",evasize:"xxl",username:"用户名5",evatime:"2020-04-25"},
                {content:"评价文字16",evaimg:"/img/imgBanner1/banner1.jpg",color:"蓝色",evasize:"xl",username:"用户名1",evatime:"2020-05-12"},
                {content:"评价文字17",evaimg:"/img/imgBanner1/banner2.png",color:"绿色",evasize:"l",username:"用户名2",evatime:"2020-05-16"},
                {content:"评价文字18",evaimg:"/img/imgBanner1/banner3.jpg",color:"青色",evasize:"xs",username:"用户名3",evatime:"2020-05-18"},
                {content:"评价文字19",evaimg:"/img/imgBanner1/banner4.png",color:"紫色",evasize:"m",username:"用户名4",evatime:"2020-05-22"},
                {content:"评价文字20",evaimg:"/img/imgBanner1/banner5.jpg",color:"黄色",evasize:"xxl",username:"用户名5",evatime:"2020-05-25"}
            ],
            shangpin:true,
            evaluate:true,
        }
    },
    methods:{
        goodsinfo:function() {
            this.shangpin = true;
            this.evaluate = false;
            $('.btn').toggleClass('active');
        },
        evaluatebtn:function() {
            this.shangpin = false;
            this.evaluate = true;
            $('.btn').toggleClass('active');
        },
    }
}
</script>

<style scoped>
/* 左边的div */
.botleft {
    width: 200px;
    height: 500px;
    background-color: rgb(55,143,119);
    float: left;
}
/* 右边的div */
.botright {    
    margin-left: 225px;
}
/* 两个按钮的div */
.allbtn {    
    width: 800px;
    height: 40px;
    border: 1px solid gray;
}
/* 两个按钮 */
.btn1,.btn2 {
    width: 90px;
    height: 42px;
    margin-top: -1px;
    margin-left: -1px;
    background-color: white;
    color: teal;
    border: 1px solid gray;
}
/* 按钮鼠标悬停效果 */
.btn1:hover,.btn2:hover,.active {
    background-color: teal;
    color: white;
    border: 1px solid teal;
}
/* 产品参数 */
.allinfo {
    box-sizing: border-box;
    height: 200px;
    margin-left: 0px;
    width: 802px;
    padding: 16px 30px;
    border: 1px solid gray;
    border-top: none;
}
/* 商品名称 */
.infoname {
    float: none !important;
}
/* 产品参数li */
.allinfo li {
    float: left;
    padding-right: 25px;
    padding-top: 10px;
    font-size: 14px;
}
/* 图片div */
.infoimg {
    margin-left: 0;
    margin-top: 10px;
}
/* 图片 */
.infoimg li>img {
    width: 800px;
    height: 500px;
}

/* 累计评价div */
#ljpj {
    margin-top: 20px;
}
/* 累计评价标题 */
.leiji {
    box-sizing: border-box;
    width: 800px;
    height: 35px;
    line-height: 35px;
    padding-left: 15px;
    color: white;
    background-color: teal;
}
/* 评价区的图片、 */
.evaimage {
    width: 40px;
    height: 40px;
    margin: 12px 0;
}
/* 评价ul */
.evaul {
    margin: 12px 0;
}
/* 评价区li */
.evaul li {
    box-sizing: border-box;
    width: 800px;
    height: 160px;
    padding-left: 15px;
    padding-top: 12px;
    border-bottom: 1px solid gray;
}
.eval1,.eval2{
    float: left;
}
.eval2 {
    padding:0 36px;
    font-size: 14px;
}
/* 用户名 */
.evauser {
    font-size: 14px;
}
/* 评价文字 */
.content {
    width: 530px;
    height: 50px;
    font-size: 14px;
}
.eval2 p>span {
    color: gray;
}
/* 日期 */
.evatime {
    color: gray;
    font-size: 14px;
}
</style>