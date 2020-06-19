<template>
    <div id="hotsale">        
        <div class="remai">
            <h2 class="remaititle"><i class="iconfont icon-hot"></i>热卖商品</h2>
            <div class="hot_bottom">
                <ul class="list">
                    <li v-for="img in hotsalelist" :key="img.id">
                        <a class="shopa" :href="img.href">
                            <img :src="img.url" alt="">
                            <p class="shopname">{{img.name}}</p>
                            <p class="shoprice"><span>¥</span>{{img.price}}</p>
                        </a><br>
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
            hotsalelist:[
                {id:1,url:'/img/imgBanner1/banner1.jpg',name:'商品名称11',price:"129.00",href:'https://www.baidu.com/'},
                {id:2,url:'/img/imgBanner1/banner2.png',name:'商品名称12',price:"123.00",href:'https://www.baidu.com/'},
                {id:3,url:'/img/imgBanner1/banner3.jpg',name:'商品名称13',price:"159.00",href:'https://www.baidu.com/'},
                {id:4,url:'/img/imgBanner1/banner4.png',name:'商品名称14',price:"189.00",href:'https://www.baidu.com/'},
                {id:5,url:'/img/imgBanner1/banner5.jpg',name:'商品名称15',price:"187.00",href:'https://www.baidu.com/'},
                {id:6,url:'/img/imgBanner1/banner1.jpg',name:'商品名称16',price:"145.00",href:'https://www.baidu.com/'}
            ]
        }
    },
}
</script>

<style scoped>
/* 整个热卖div */
#hotsale {
    width: 1245px;
    height: 406px;
    margin-left: 130px;
}
/* 热卖标题 */
.remaititle {
    box-sizing: border-box;
    background-color: rgb(75,145,111);
    color: white;
    width: 1245px;
    height:55px;
    line-height: 55px;
    padding-left: 25px;
}
/* 热卖标题里的iconfont */
.remaititle i {
    color: rgb(255,204,51);
    font-size: 28px;
    padding-right: 5px;
}
/* 商品列表ul */
.list {
    width: 1245px;
    margin-left: 0px;
}
/* 商品列表ul下的li */
.list li {
    float: left;
    width: 206.5px;
    height: 320px;
    background-color: white;
    text-align: center;
    border-right: 1px solid lightgray;
}
.list li:last-child {
    border: none;
}
/* 商品列表ul下的img */
.list img {
    width: 207.5px;
    height: 250px;
}
/* 商品列表ul下的商品名称 */
.shopname {
    font-size: 15px;
    margin-top: 5px;
    color: black;
}
/* 商品列表ul下的商品价格 */
.shoprice {
    font-size: 18px;
    margin-top: 5px;
    color: rgb(223,89,0);
}
/* 商品列表价格的¥符号 */
.shoprice span {
    font-size: 14px;
}
/* 商品列表鼠标悬停下商品名称效果 */
.shopa:hover>p {
    color: rgb(223,89,0);
}
/* 商品列表鼠标悬停下商品图片效果 */
.shopa:hover>img {
    opacity: 0.8;
}
</style>