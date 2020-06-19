<template>
    <div id="findBuy">
        <div class="findgood">
            <a class="findtext" href="#">每日特价<i class="iconfont icon-gengduo"></i></a>
            <div class="container">
                <div class="six-top">
                    <div class="six-top-item on"><a href="https://www.baidu.com/">精选</a></div>
                    <div class="six-top-item"><a href="https://www.baidu.com/">数码</a></div>
                    <div class="six-top-item"><a href="https://www.baidu.com/">百货</a></div>
                    <div class="six-top-item"><a href="https://www.baidu.com/">家电</a></div>
                    <div class="six-top-item six-top-item-spe"><a href="https://www.baidu.com/">美食</a></div>
                </div>
                <div class="six-cont">
                    <div class="cont six-cont1">
                        <div class="find_in" v-for="info1 in findmenuList1" :key="info1.id">
                            <a class="find_in_a" :href="info1.url">
                                <img class="find_img" :src="info1.img">
                                <p class="goods_name">{{info1.name}}</p>
                                <p class="goods_yj">{{info1.yuanjia}}</p>
                                <p class="goods_price">{{info1.price}}</p>
                            </a>
                        </div>
                    </div>
                    <div class="cont six-cont2">
                        <div class="find_in" v-for="info2 in findmenuList2" :key="info2.id">
                            <a class="find_in_a" :href="info2.url">
                                <img class="find_img" :src="info2.img">
                                <p class="goods_name">{{info2.name}}</p>
                                <p class="goods_yj">{{info2.yuanjia}}</p>
                                <p class="goods_price">{{info2.price}}</p>
                            </a>
                        </div>
                    </div>
                    <div class="cont six-cont3">
                        <div class="find_in" v-for="info3 in findmenuList3" :key="info3.id">
                            <a class="find_in_a" :href="info3.url">
                                <img class="find_img" :src="info3.img">
                                <p class="goods_name">{{info3.name}}</p>
                                <p class="goods_yj">{{info3.yuanjia}}</p>
                                <p class="goods_price">{{info3.price}}</p>
                            </a>
                        </div>
                    </div>
                    <div class="cont six-cont4">
                        <div class="find_in" v-for="info4 in findmenuList4" :key="info4.id">
                            <a class="find_in_a" :href="info4.url">
                                <img class="find_img" :src="info4.img">
                                <p class="goods_name">{{info4.name}}</p>
                                <p class="goods_yj">{{info4.yuanjia}}</p>
                                <p class="goods_price">{{info4.price}}</p>
                            </a>
                        </div>
                    </div>
                    <div class="cont six-cont5">
                        <div class="find_in" v-for="info5 in findmenuList5" :key="info5.id">
                            <a class="find_in_a" :href="info5.url">
                                <img class="find_img" :src="info5.img">
                                <p class="goods_name">{{info5.name}}</p>
                                <p class="goods_yj">{{info5.yuanjia}}</p>
                                <p class="goods_price">{{info5.price}}</p>
                            </a>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        <div id="brandbuy">
            <div class="brandgood">
                <a class="findtext" href="#">品牌闪购<i class="iconfont icon-gengduo"></i></a>
                <div class="brand_left">
                    <a href="#">
                        <p class="brand_name">品牌名称</p>
                        <p class="brand_sg">品牌名称闪购专场</p>
                        <p class="brand_yh">每满400减80上不封顶</p>
                        <img src="/img/imgBanner1/banner1.jpg">
                    </a>
                </div>
                <div class="brand_right">
                    <a v-for="brand in brandList" :key="brand.id" :href="brand.href">
                        <img :src="brand.logo">
                        <p>{{brand.name}}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return{
            findmenuList1:[
                {name:"商品名称1",yuanjia:"¥80.00",price:"¥50.00",img:"/img/imgBanner1/banner1.jpg",url:"goodsDetails.html"},
                {name:"商品名称2",yuanjia:"¥80.00",price:"¥50.00",img:"/img/imgBanner1/banner2.png",url:"https://www.baidu.com/"},
                {name:"商品名称3",yuanjia:"¥80.00",price:"¥50.00",img:"/img/imgBanner1/banner3.jpg",url:"https://www.baidu.com/"},
                {name:"商品名称4",yuanjia:"¥80.00",price:"¥50.00",img:"/img/imgBanner1/banner4.png",url:"https://www.baidu.com/"},
                {name:"商品名称5",yuanjia:"¥80.00",price:"¥50.00",img:"/img/imgBanner1/banner5.jpg",url:"https://www.baidu.com/"}
            ],
            findmenuList2:[
                {name:"商品名称11",yuanjia:"¥90.00",price:"¥45.00",img:"/img/imgBanner1/banner1.jpg",url:"https://www.baidu.com/"},
                {name:"商品名称12",yuanjia:"¥90.00",price:"¥45.00",img:"/img/imgBanner1/banner2.png",url:"https://www.baidu.com/"},
                {name:"商品名称13",yuanjia:"¥90.00",price:"¥45.00",img:"/img/imgBanner1/banner3.jpg",url:"https://www.baidu.com/"},
                {name:"商品名称14",yuanjia:"¥90.00",price:"¥45.00",img:"/img/imgBanner1/banner4.png",url:"https://www.baidu.com/"},
                {name:"商品名称15",yuanjia:"¥90.00",price:"¥45.00",img:"/img/imgBanner1/banner5.jpg",url:"https://www.baidu.com/"}
            ],
            findmenuList3:[
                {name:"商品名称21",yuanjia:"¥100.00",price:"¥60.00",img:"/img/imgBanner1/banner1.jpg",url:"https://www.baidu.com/"},
                {name:"商品名称22",yuanjia:"¥100.00",price:"¥60.00",img:"/img/imgBanner1/banner2.png",url:"https://www.baidu.com/"},
                {name:"商品名称23",yuanjia:"¥100.00",price:"¥60.00",img:"/img/imgBanner1/banner3.jpg",url:"https://www.baidu.com/"},
                {name:"商品名称24",yuanjia:"¥100.00",price:"¥60.00",img:"/img/imgBanner1/banner4.png",url:"https://www.baidu.com/"},
                {name:"商品名称25",yuanjia:"¥100.00",price:"¥60.00",img:"/img/imgBanner1/banner5.jpg",url:"https://www.baidu.com/"}
            ],
            findmenuList4:[
                {name:"商品名称31",yuanjia:"¥110.00",price:"¥55.00",img:"/img/imgBanner1/banner1.jpg",url:"https://www.baidu.com/"},
                {name:"商品名称32",yuanjia:"¥110.00",price:"¥55.00",img:"/img/imgBanner1/banner2.png",url:"https://www.baidu.com/"},
                {name:"商品名称33",yuanjia:"¥110.00",price:"¥55.00",img:"/img/imgBanner1/banner3.jpg",url:"https://www.baidu.com/"},
                {name:"商品名称34",yuanjia:"¥110.00",price:"¥55.00",img:"/img/imgBanner1/banner4.png",url:"https://www.baidu.com/"},
                {name:"商品名称35",yuanjia:"¥110.00",price:"¥55.00",img:"/img/imgBanner1/banner5.jpg",url:"https://www.baidu.com/"}
            ],
            findmenuList5:[
                {name:"商品名称41",yuanjia:"¥120.00",price:"¥65.00",img:"/img/imgBanner1/banner1.jpg",url:"https://www.baidu.com/"},
                {name:"商品名称42",yuanjia:"¥120.00",price:"¥64.00",img:"/img/imgBanner1/banner2.png",url:"https://www.baidu.com/"},
                {name:"商品名称43",yuanjia:"¥120.00",price:"¥67.00",img:"/img/imgBanner1/banner3.jpg",url:"https://www.baidu.com/"},
                {name:"商品名称44",yuanjia:"¥120.00",price:"¥69.00",img:"/img/imgBanner1/banner4.png",url:"https://www.baidu.com/"},
                {name:"商品名称45",yuanjia:"¥120.00",price:"¥68.00",img:"/img/imgBanner1/banner5.jpg",url:"https://www.baidu.com/"}
            ],
            brandList:[
                {logo:"/img/brandBuy/brand1.jpg",name:"品牌名称专场1",href:"https://www.baidu.com/"},
                {logo:"/img/brandBuy/brand2.jpg",name:"品牌名称专场2",href:"https://www.baidu.com/"},
                {logo:"/img/brandBuy/brand3.jpg",name:"品牌名称专场3",href:"https://www.baidu.com/"},
                {logo:"/img/brandBuy/brand4.jpg",name:"品牌名称专场4",href:"https://www.baidu.com/"},
                {logo:"/img/brandBuy/brand5.jpg",name:"品牌名称专场5",href:"https://www.baidu.com/"},
                {logo:"/img/brandBuy/brand1.jpg",name:"品牌名称专场6",href:"https://www.baidu.com/"}
            ],
        }
    },
}
$(function(){
    $('.six-top').on('mouseover','.six-top-item', function() {
            var currentIndex = $(this).index() +1;
            hideAll();
            hideAllTop();
            $(this).css('border-bottom','2px solid rgb(223,89,0)');
            $('.six-cont'+currentIndex).show();
        });
        function hideAll() {
            for (var i=1;i<6;i++) {
                $('.six-cont'+i).hide();
            }
        }
    function hideAllTop(){
        for(var i=0;i<5;i++){
                $('.six-top-item').eq(i).css('border-bottom','none');
            }
        }
})
</script>
<style scoped>
/* 每日特价 */
#findBuy {
    float: left;
    height: 325px;
}
/* 每日特价div */
.findgood {
    margin-left: 130px;
    width: 600px;
    height: 300px;
    background-color: white;
    padding-left: 20px;
    padding-top: 10px;
}
/* 每日特价h2 */
.findtext {
    font-size: 26px;
    font-weight: bold;
    float: left;
}
.findtext:hover>i {
    color: rgb(223,89,0);
}
/* 每日特价iconfont */
.findtext i {
    font-size: 23px;
    padding-top: 8px;
    padding-left: 8px;
}
.six-top {
    margin-left: 350px;
}
/* 每日特价小菜单列表div */
.six-top div {
    float: left;
    margin-right: 15px;
    padding-top: 9px;
}
/* 每日特价小菜单a链接 */
.six-top div>a {
    font-size: 15px;
}
/* 每日特价商品div */
.cont {
    position:absolute;
    margin-top: 50px;
    width: 600px;
    height: 255px;
}
/* 每日特价商品详情的第一个div */
.cont div:first-child {
    width: 150px;
    height: 235px;
    background-color: rgb(248,249,247);
}
.cont div:first-child>a>.goods_name {
    font-size: 16px;
}
.cont div:first-child>a>.goods_yj {
    font-size: 13px;
}
.cont div:first-child>a>.goods_price {
    font-size: 18px;
}
/* 每日特价商品详情第一个div的图片 */
.cont div:first-child>a>img {
    width: 150px;
    height: 150px;
    margin-bottom: 8px;
}
/* 每日特价除了第一个商品之外的商品 */
.cont div:not(:first-child) {
    margin-left: 12px;
    margin-bottom: -16px;
}
/* 每日特价除了第一个商品之外的商品图片 */
.cont div:not(:first-child)>a>img {
    margin-right: 3px;
}
/* 每日特价商品详情 */
.find_in {
    float: left;
    width: 200px;
    height: 140px;
}
/* 每日特价商品图片 */
.find_img {
    float: left;
    width: 115px;
    height: 110px;
}
/* 每日特价商品p标签 */
.find_in_a p {
    padding-top: 3px;
}
/* 每日特价商品名称 */
.goods_name {
    margin-top: 8px;
    color: black;
    font-size: 14px;
    text-align: center;
}
/* 每日特价商品原价 */
.goods_yj {
    font-size: 12px;
    color: rgb(180,180,180);
    text-decoration: line-through;
    text-align: center;
}
/* 每日特价商品现价 */
.goods_price {
    text-align: center;
    color:rgb(214,49,14);
    font-size: 15px;
}
/* 每日特价商品名称鼠标悬停 */
.find_in_a:hover>.goods_name{
    color: rgb(223,89,0);
}
.on{
    border-bottom: 2px solid rgb(223,89,0);
}
.six-cont {    
    position:relative;
}
.six-cont1{
    display:block;
}
.six-cont2,.six-cont3,.six-cont4,.six-cont5 {
    display:none;
}

/* 品牌闪购 */
#brandbuy { 
    width: 581px;
    height: 300px;
    padding-top: 10px;
    background-color: white;
    margin-left: 762px;
    margin-top: -310px;
}
/* 品牌闪购商品列表 */
.brandgood {    
    padding-left: 20px;
}
/* 品牌闪购左边的商品 */
.brand_left {
    float: left;
    margin-top: 42px;
    margin-left: -136px;
    width: 240px;
    height: 246px;
    background-color: rgb(248,249,247);
    text-align: center;
}
/* 品牌闪购左边商品的图片 */
.brand_left a>img {
    float: left;
    width: 130px;
    height: 130px;
    padding-top: 5px;
    margin-bottom: 8px;
    margin: 5px 55px;
}
.brand_left a>p {
    padding-top: 5px;
}
/* 品牌闪购左边商品名称 */
.brand_name {
    font-size: 14px;
    font-weight: bold;
    padding: 13px 0 !important;
}
/* 品牌闪购左边商品闪购 */
.brand_sg {
    font-size: 17px;
    font-weight: bold;
    color: black;
}
/* 品牌闪购左边商品优惠p */
.brand_yh {
    font-size: 12px;
    font-weight: gray ;
}
/* 品牌闪购左边商品鼠标悬停效果 */
.brand_left a:hover>img {
    opacity: 0.8;
}
/* 品牌闪购右边商品列表 */
.brand_right {
    margin: 0px;
    float: left;
    width: 320px;
    height: 300px;
    margin-top: 33px;
    text-align: center;
}
.brand_right a{
    float: left;
    margin-left: 12px;
    margin-top: 4px;
}
.brand_right a:hover {
    opacity: 0.8;
}
.brand_right a>img {
    width: 140px;
    height: 62px;
}
</style>