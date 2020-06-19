<template>
<div>
    <div class="swiper-container swiper-no-swiping">
      <div class="swiper-wrapper">
        <div v-for="slide in slideimgList" :key="slide.id" class="swiper-slide">
          <a :href="slide.href">
            <img :src="slide.img" >
          </a>
        </div>
      </div>
    </div>
    <div class="swiper-container swiper-no-swiping">
      <div class="swiper-wrapper">
        <div v-for="slide in slideimgList" :key="slide.id" class="swiper-slide">
          <a :href="slide.href">
            <img :src="slide.img" >
          </a>
        </div>
      </div>
        <div class="button swiper-button-prev swiper-button-white"></div>
        <div class="button swiper-button-next swiper-button-white"></div>
    </div>
    <div class="swiper-container swiper-no-swiping">
      <div class="swiper-wrapper">
        <div v-for="slide in slideimgList" :key="slide.id" class="swiper-slide">
          <a :href="slide.href">
            <img :src="slide.img" >
          </a>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    data(){
        return{
            slideimgList:[
                {img:'/img/imgBanner1/banner1.jpg',href:'https://www.baidu.com/'},
                {img:'/img/imgBanner1/banner2.png',href:'https://www.iconfont.cn/'},
                {img:'/img/imgBanner1/banner3.jpg',href:'https://www.baidu.com/'},
                {img:'/img/imgBanner1/banner4.png',href:'https://www.iconfont.cn/'},
                {img:'/img/imgBanner1/banner5.jpg',href:'https://www.baidu.com/'}
            ],
            currentIndex:0,
        }
    },
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          prevButton:'.swiper-button-prev',//上一张按钮
          nextButton:'.swiper-button-next',//下一张按钮
          autoplay:3000,//设置自动切换
          autoplayDisableOnInteraction:false,//设置为false，表示用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
          loop:true,//开启loop模式。会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的。
          grabCursor : true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
        })
    },
}
</script>
<style scoped>
.swiper-container {
    width: 180px;
    height: 145px;  
    margin-top: 5px;  
}
.swiper-container:hover {
  opacity: 0.8;
}
img {
    width: 180px;
    height: 145px;
}
.swiper-button-next {
    margin-top: -15px;
    margin-right: -4px;
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
</style>