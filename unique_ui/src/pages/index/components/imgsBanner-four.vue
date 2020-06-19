<template>
    <div id="all">
        <div class="findG">
            <a id="findGo" href="#">
                <img class="find_img" src="/img/find.png" alt="">
                <div class="findText">
                    <h1>发现好货</h1>
                    <i class="iconfont icon-icon-test"></i>
                </div>
            </a>
        </div>
        <div class="swiper-container swiper-no-swiping" id="swiper1">
          <div class="swiper-wrapper">
            <div v-for="slidemenu in slidemenuList" :key="slidemenu.id" class="swiper-slide">
              <a :href="slidemenu.href">
                <img :src="slidemenu.img" >
                <p class="slidep1">{{slidemenu.name}}</p>
                <p class="slidep2">{{slidemenu.price}}</p>
                <p class="slidep3">{{slidemenu.yj}}</p>
              </a>
            </div>
          </div>
            <div class="button swiper-button-prev swiper-button-white"></div>
            <div class="button swiper-button-next swiper-button-white"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    data(){
        return{
            slidemenuList:[
                {name:"商品名称1",yj:"¥120.00",price:"¥100.00",img:'/img/imgBanner1/banner1.jpg',href:'https://www.baidu.com/'},
                {name:"商品名称2",yj:"¥121.00",price:"¥101.00",img:'/img/imgBanner1/banner2.png',href:'https://www.iconfont.cn/'},
                {name:"商品名称3",yj:"¥122.00",price:"¥102.00",img:'/img/imgBanner1/banner3.jpg',href:'https://www.baidu.com/'},
                {name:"商品名称4",yj:"¥123.00",price:"¥103.00",img:'/img/imgBanner1/banner4.png',href:'https://www.iconfont.cn/'},
                {name:"商品名称5",yj:"¥124.00",price:"¥104.00",img:'/img/imgBanner1/banner5.jpg',href:'https://www.baidu.com/'},
                {name:"商品名称6",yj:"¥125.00",price:"¥105.00",img:'/img/imgBanner1/banner1.jpg',href:'https://www.baidu.com/'},
                {name:"商品名称7",yj:"¥126.00",price:"¥106.00",img:'/img/imgBanner1/banner2.png',href:'https://www.iconfont.cn/'},
                {name:"商品名称8",yj:"¥127.00",price:"¥107.00",img:'/img/imgBanner1/banner3.jpg',href:'https://www.baidu.com/'}
            ],
        }
    },
    mounted(){
        var mySlideSwiper = new Swiper('#swiper1', {
          slidesPerView:4,//设置slider容器同时显示的slides数量为4
          slidesPerGroup:4,//在carousel mode下定义slides的数量4个为一组。
          prevButton:'.swiper-button-prev',//上一组按钮
          nextButton:'.swiper-button-next',//下一组按钮
          autoplay:3000,//设置自动轮播
          autoplayDisableOnInteraction:false,//设置为false，表示用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
          speed:300,//切换速度，即slider自动滑动开始到结束的时间为300（单位ms）
          loop:true,//开启loop模式
          grabCursor : true, //设置鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
        })
    },
}
</script>

<style scoped>
/* 发现好货div */
.findG {
    margin-left: 130px;
    background-color: white;
    margin-right: -153px;
    float: left;
    width: 200px;
    height: 270px;
}
i {
    font-size: 120px;
}
.find_img {
    width: 200px;
    height: 270px;
}
/* 发现好货a链接 */
#findGo {
    color: white;
}
.findText {
    font-size: 16px;
    margin-top: -230px;
    margin-left: 39px;
}
.findText h1 {
    margin-bottom: 10px;
}
#findGo:hover {
    color: #ffffcc;
}
.item_span {
  position: absolute;
  color: white;  
}

/* 图片轮播 */
.swiper-container {
    width: 1000px;
    height: 270px;
    margin-top: 5px;  
}
.swiper-slide:hover {
  opacity: 0.8;
}
img {
    width: 245px;
    height: 270px;
}
.swiper-button-next {
    margin-top: -15px;
    height: 20px;
    width: 26px;    
}
.swiper-button-prev {
    margin-top: -15px;
    margin-left: -4px;
    height: 20px;
    width: 26px;    
}
.swiper-button-prev:hover {
    opacity: 0.6;
}
.swiper-button-next:hover {
    opacity: 0.6;
}
.slidep1,.slidep2,.slidep3 {
  position: absolute;
  left: 100px;
  top: 200px;
  color: white;
  text-align: center;
  font-size:13px;
}
.slidep2 {
  margin-left: -56px;
  margin-top: 30px;
  width: 85px;
  height: 26px;
  line-height: 26px;
  font-size: 19px;
  font-weight: bold;
  color: white;
  border: 1px solid rgb(223,89,0); 
  background-color: rgb(223,89,0);
}
.slidep3 { 
  width: 70px;
  height: 26px;
  line-height: 26px;
  margin-top: 30px;
  margin-left: 30px;
  color:  rgb(180,180,180);
  text-decoration: line-through;
  background-color: white;
  border: 1px solid rgb(223,89,0); 
}

</style>