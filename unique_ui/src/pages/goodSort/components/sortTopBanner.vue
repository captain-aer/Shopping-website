<template>
    <div id="sortBanner">
        <div class="gallery-top-box">
            <div class="swiper-container gallery-top" id="sortSwi1">
                <div class="swiper-wrapper">
                    <a v-for="sort in sortimgList" :key="sort.img" :href="sort.imghref" :style="sort.imgurl" class="swiper-slide">
                        <!-- <div> -->
                        <!-- <a class="bigimg_a" :href="sort.imghref">
                            <img class="bigImg" :src="sort.imgurl" >
                        </a> -->
                    <!-- </div> -->
                    </a>
                </div>            
                <div class="button swiper-button-prev swiper-button-white"></div>
                <div class="button swiper-button-next swiper-button-white"></div>
            </div>
        </div>
        <div class="gallery-thumbs-box">
            <div class="swiper-container gallery-thumbs" id="sortSwi2">
                <div class="swiper-wrapper">
                    <div v-for="sort in sortimgList" :key="sort.img" :href="sort.imghref" :style="sort.imgurl" class="swiper-slide">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import { swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    data(){
        return{
            sortimgList:[
                {imgurl:"background:url(/img/imgBanner1/banner1.jpg) no-repeat",imghref:"httpa://www.baidu.com/"},
                {imgurl:"background:url(/img/imgBanner1/banner2.png) no-repeat",imghref:"httpa://www.baidu.com/"},
                {imgurl:"background:url(/img/imgBanner1/banner3.jpg) no-repeat",imghref:"httpa://www.baidu.com/"},
                {imgurl:"background:url(/img/imgBanner1/banner4.png) no-repeat",imghref:"httpa://www.baidu.com/"},
                {imgurl:"background:url(/img/imgBanner1/banner5.jpg) no-repeat",imghref:"httpa://www.baidu.com/"},
                {imgurl:"background:url(/img/imgBanner2/banner2-1.jpg) no-repeat",imghref:"httpa://www.baidu.com/"},
                {imgurl:"background:url(/img/imgBanner2/banner2-2.jpg) no-repeat",imghref:"httpa://www.baidu.com/"},
                {imgurl:"background:url(/img/imgBanner2/banner2-3.jpg) no-repeat",imghref:"httpa://www.baidu.com/"},
                {imgurl:"background:url(/img/imgBanner2/banner2-4.jpg) no-repeat",imghref:"httpa://www.baidu.com/"},
                {imgurl:"background:url(/img/imgBanner2/banner2-5.jpg) no-repeat",imghref:"httpa://www.baidu.com/"}
            ]
        }
    },
    mounted(){
        var leftScreenVal, moveLeftVal;
        var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        observer: true,
        observeParents: true,
        autoplay: 5000,
        onSlidePrevEnd: function(swiper) {
            //这里因为居中显示的时候，按照我屏幕默认距离屏幕左边570像素，所以是以570为基准，然后再算每一个图片宽度155，有几张
            leftScreenVal = document.getElementsByClassName('swiper-slide-active')[1].getBoundingClientRect().left;
            if (leftScreenVal < 475) {
                moveLeftVal = document.getElementsByClassName('swiper-slide-active')[1].offsetLeft;
                moveLeftVal = 200 - moveLeftVal;
                document.querySelector('.gallery-thumbs > .swiper-wrapper').style.left = moveLeftVal + 'px';
            }
        },
        onSlideNextEnd: function(swiper) {
            //这里因为居中显示的时候，按照我屏幕默认距离屏幕左边570像素，所以是以570为基准，然后再算每一个图片宽度155，有几张
            var leftScreenVal = document.getElementsByClassName('swiper-slide-active')[1].getBoundingClientRect().left;
            if (leftScreenVal >= 1475) { // 这里880是因为我基准570加上下边一行默认只显示两张155宽度的缩略图
                moveLeftVal = document.getElementsByClassName('swiper-slide-active')[1].offsetLeft;
                moveLeftVal = 0 - moveLeftVal;
                document.querySelector('.gallery-thumbs > .swiper-wrapper').style.left = moveLeftVal + 'px';
            }
        }
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        centeredSlides: true,
        slidesPerView: 5,
        slideToClickedSlide: true,
        observer: true,
        observeParents: true,
        spaceBetween: 2
    });

    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
    }
}
</script>

<style scoped>
.gallery-thumbs .swiper-slide-active {
    opacity: 1 !important;
}
.gallery-thumbs .swiper-slide {
    opacity: 0.4;
}
#sortBanner {
    margin-left: 246px;
    padding-top: 15px;
}
.swiper-container {
    width: 1000px;
    height: 500px;
}
#sortSwi2 {
    margin-top: 10px;
    height: 110px;
}
.bigimg_a:hover {
  opacity: 0.8;
}
.swiper-slide {
    background-size:cover !important;
}
/* 轮播大图片 */
.bigImg {
    width: 1000px;
    height: 520px;
}
/* 轮播小图片 */
.smallImg {
    width: 250px;
    height: 110px;
}
/* 点击切换下一张按钮 */
.swiper-button-next {
    margin-top: -15px;
    margin-right: 8px;
    height: 30px;
    width: 36px;    
}
/* 点击切换上一张按钮 */
.swiper-button-prev {
    margin-top: -15px;
    margin-left: 8px;
    height: 30px;
    width: 36px;    
}
/* 点击切换上一张按钮鼠标悬停 */
.swiper-button-prev:hover {
    opacity: 0.6;
}
/* 点击切换下一张按钮鼠标悬停 */
.swiper-button-next:hover {
    opacity: 0.6;
}
</style>