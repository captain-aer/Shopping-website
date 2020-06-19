<template>
    <div>
        <div class="toSale">
            <a id="tosales" href="#">
                <img src="/img/beijing.jpg" alt="">
                <div class="saleText">
                    <h1>今日特卖</h1>
                    <i class="iconfont icon-temai"></i>
                </div>
            </a>
        </div>
        <div id="wrap">
            <ul id="list">
                <li v-for="img in imglist" :key="img.id">
                    <a :href="img.href"><img :src="img.url" alt=""></a>
                    <p><a :href="img.href">{{img.name}}</a></p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imglist:[
                {id:1,url:'/img/imgBanner1/banner1.jpg',name:'11',href:'https://www.baidu.com/'},
                {id:2,url:'/img/imgBanner1/banner2.png',name:'12',href:'https://www.baidu.com/'},
                {id:3,url:'/img/imgBanner1/banner3.jpg',name:'13',href:'https://www.baidu.com/'},
                {id:4,url:'/img/imgBanner1/banner4.png',name:'14',href:'https://www.baidu.com/'},
                {id:5,url:'/img/imgBanner1/banner5.jpg',name:'15',href:'https://www.baidu.com/'},
                {id:6,url:'/img/imgBanner1/banner1.jpg',name:'16',href:'https://www.baidu.com/'},
                {id:7,url:'/img/imgBanner1/banner2.png',name:'17',href:'https://www.baidu.com/'},
                {id:8,url:'/img/imgBanner1/banner3.jpg',name:'18',href:'https://www.baidu.com/'},
                {id:9,url:'/img/imgBanner1/banner4.png',name:'19',href:'https://www.baidu.com/'},
                {id:10,url:'/img/imgBanner1/banner5.jpg',name:'20',href:'https://www.baidu.com/'}
            ]
        }
    }
}
</script>
<style scoped>
/* 今日特卖div */
.toSale {
    margin-right: -165px;
    margin-left: 130px;
    background-color: white;
    float: left;
    width: 200px;
    height: 270px;
}
/* 轮播div */
#wrap{
    width: 1000px;
    height: 270px; 
    position: relative; 
    margin: 12px 342px; 
    overflow: hidden;
}
#list{
    position: absolute;
    left: 0; 
    top: 0; 
    margin: 0; 
    padding: 0;    
    -webkit-animation: 12s move infinite linear; 
    width: 200%; 
}
#list li {
    list-style: none; 
    width: 200px; 
    height: 270px; 
    text-align: center;
    float: left;
}
@-webkit-keyframes move{
    0% {
          left: 0;
    }
    100% {
          left: -1000px;
    }
}
@keyframes move {
    0% {
       left: 0;
    }
    100% {
       left: -1000px;
    }
}
#wrap:hover #list {
    -webkit-animation-play-state: paused; /*动画暂停播放*/
}
img {    
    width: 200px; 
    height: 270px; 
}
p {
    margin-top: -250px;
}
a {    
    color: white;
    font-size: 16px;
}
a:hover {    
    color: rgb(223,89,0);
}
i {
    font-size: 120px;
}
#tosales {
    color: rgb(223,89,0);
}
.saleText {
    margin-top: -230px;
    margin-left: 39px;
}
#tosales:hover {
    color: rgb(153,0,51);
}
#list li:hover {
    opacity: 0.8;
}
</style>