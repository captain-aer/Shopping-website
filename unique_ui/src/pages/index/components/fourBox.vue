<template>
  <div id="fourList">
    <div class="four_div four1">
        <a class="findtext" href="#">新品首发<i class="iconfont icon-gengduo"></i></a>
        <div class="swiper-container swiper-no-swiping" id="swiper2">
          <div class="swiper-wrapper">
            <div v-for="newSlide in slidemenuList" :key="newSlide.id" class="swiper-slide">
              <a :href="newSlide.href">
                <img :src="newSlide.img" >
              </a>
            </div>
          </div>
            <div class="button swiper-button-prev swiper-button-white"></div>
            <div class="button swiper-button-next swiper-button-white"></div>
        </div>
         <div class="swiper-container swiper-no-swiping">
          <div class="swiper-wrapper">
            <div v-for="newSlide in slidemenuList" :key="newSlide.id" class="swiper-slide">
              <a :href="newSlide.href">
                <p class="newslidep1">{{newSlide.name}}</p>
                <p class="newslidep2">{{newSlide.subName}}</p>
                <p class="newslidep3"><span style="font-size:14px;">¥</span>{{newSlide.price}}<span style="font-size:14px;">起</span></p>
              </a>
            </div>
          </div>
        </div>
    </div>
    <div class="four_div four2">
        <a class="findtext" href="#">排行榜<i class="iconfont icon-gengduo"></i></a>
        <div class="container">
          <div class="ranking">
              <div class="ranking-item on"><a href="https://www.baidu.com/">精选</a></div>
              <div class="ranking-item"><a href="https://www.baidu.com/">数码</a></div>
              <div class="ranking-item"><a href="https://www.baidu.com/">百货</a></div>
              <div class="ranking-item ranking-item-spe"><a href="https://www.baidu.com/">美食</a></div>
          </div>
          <ul class="top">
            <li><i class="iconfont icon-top1"></i></li>
            <li><i class="iconfont icon-top2"></i></li>
            <li><i class="iconfont icon-top3"></i></li>
          </ul>
            <div class="ranking-cont">
              <div class="cont ranking-cont1">
                  <div class="ranking_in" v-for="rank1 in rankingList1" :key="rank1.id">
                      <a class="ranking_in_a" :href="rank1.aherf">
                          <img class="ranking_img" :src="rank1.imgurl">
                          <span class="rank_name">{{rank1.name}}</span>
                      </a>
                  </div>
              </div>
            </div>
            <div class="ranking-cont">
                <div class="cont ranking-cont2">
                    <div class="ranking_in" v-for="rank2 in rankingList2" :key="rank2.id">
                        <a class="ranking_in_a" :href="rank2.aherf">
                            <img class="ranking_img" :src="rank2.imgurl">
                            <span class="rank_name">{{rank2.name}}</span>
                        </a>
                    </div>
                </div>       
            </div>
            <div class="ranking-cont">
                <div class="cont ranking-cont3">
                    <div class="ranking_in" v-for="rank3 in rankingList3" :key="rank3.id">
                        <a class="ranking_in_a" :href="rank3.aherf">
                            <img class="ranking_img" :src="rank3.imgurl">
                            <span class="rank_name">{{rank3.name}}</span>
                        </a>
                    </div>
                </div>       
            </div>
            <div class="ranking-cont">
                <div class="cont ranking-cont4">
                    <div class="ranking_in" v-for="rank4 in rankingList4" :key="rank4.id">
                        <a class="ranking_in_a" :href="rank4.aherf">
                            <img class="ranking_img" :src="rank4.imgurl">
                            <span class="rank_name">{{rank4.name}}</span>
                        </a>
                    </div>
                </div>       
            </div>
        </div>
    </div>
    <div class="four_div four3">
        <a class="findtext" href="#">逛好店<i class="iconfont icon-gengduo"></i></a>
        <div class="store">
          <div v-for="stInfo in storeList" :key="stInfo.id" class="storeMenu">
            <a class="storeInfo" :href="stInfo.storeHref">
              <p class="name_p">{{stInfo.name}}</p>
              <p class="number_p">{{stInfo.number}}万人关注</p>
              <img :src="stInfo.storeImg" alt="">
            </a>
          </div>
        </div>
    </div>
    <div class="four_div four4">
        <a class="findtext" href="#">领券中心<i class="iconfont icon-gengduo"></i></a>
        <div class="voucherList">
          <div v-for="voucher in voucherList" :key="voucher.id" class="voucerInfo">
            <a class="vouInfoList" :href="voucher.vouhref">
              <img :src="voucher.vouimg" alt="">              
              <p class="vouprice"><span>¥ </span>{{voucher.vouprice}}</p>              
              <p class="more">更多<i class="iconfont icon-gengduo"></i></p>
              <p class="voucon">{{voucher.condition}}</p>
              <p class="vouuse" :title="voucher.voUser">{{voucher.voUser}}</p>                      
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
            slidemenuList:[
                {name:"商品名称1",subName:"来这里发现更多新品",price:"100.00",img:'/img/imgBanner1/banner1.jpg',href:'https://www.baidu.com/'},
                {name:"商品名称2",subName:"来这里发现更多新品",price:"101.00",img:'/img/imgBanner1/banner2.png',href:'https://www.iconfont.cn/'},
                {name:"商品名称3",subName:"来这里发现更多新品",price:"102.00",img:'/img/imgBanner1/banner3.jpg',href:'https://www.baidu.com/'},
                {name:"商品名称4",subName:"来这里发现更多新品",price:"103.00",img:'/img/imgBanner1/banner4.png',href:'https://www.iconfont.cn/'},
                {name:"商品名称5",subName:"来这里发现更多新品",price:"104.00",img:'/img/imgBanner1/banner5.jpg',href:'https://www.baidu.com/'}
            ],
            rankingList1:[
              {name:"商品名称11商品名称11",imgurl:"/img/imgBanner1/banner1.jpg",aherf:"https://www.baidu.com/"},
              {name:"商品名称12商品名称12",imgurl:"/img/imgBanner1/banner2.png",aherf:"https://www.iconfont.cn/"},
              {name:"商品名称13商品名称13",imgurl:"/img/imgBanner1/banner3.jpg",aherf:"https://www.baidu.com/"},
            ],
            rankingList2:[
              {name:"商品名称21商品名称21",imgurl:"/img/imgBanner1/banner2.png",aherf:"https://www.baidu.com/"},
              {name:"商品名称22商品名称22",imgurl:"/img/imgBanner1/banner3.jpg",aherf:"https://www.iconfont.cn/"},
              {name:"商品名称23商品名称23",imgurl:"/img/imgBanner1/banner4.png",aherf:"https://www.baidu.com/"},
            ],
            rankingList3:[
              {name:"商品名称31商品名称31",imgurl:"/img/imgBanner1/banner3.jpg",aherf:"https://www.baidu.com/"},
              {name:"商品名称32商品名称32",imgurl:"/img/imgBanner1/banner4.png",aherf:"https://www.iconfont.cn/"},
              {name:"商品名称33商品名称33",imgurl:"/img/imgBanner1/banner5.jpg",aherf:"https://www.baidu.com/"},
            ],
            rankingList4:[
              {name:"商品名称41商品名称41",imgurl:"/img/imgBanner1/banner5.jpg",aherf:"https://www.baidu.com/"},
              {name:"商品名称42商品名称42",imgurl:"/img/imgBanner1/banner3.jpg",aherf:"https://www.iconfont.cn/"},
              {name:"商品名称43商品名称43",imgurl:"/img/imgBanner1/banner2.png",aherf:"https://www.baidu.com/"},
            ],
            storeList:[
              {name:"店铺名称1店铺名称1店铺名称1店铺名称1",number:"162.5",storeImg:"/img/imgBanner1/banner2.png",storeHref:"https://www.iconfont.cn/"},
              {name:"店铺名称2店铺名称2店铺名称2店铺名称2",number:"212.5",storeImg:"/img/imgBanner1/banner4.png",storeHref:"https://www.baidu.com/"}
            ],
            voucherList:[
              {vouimg:"/img/imgBanner1/banner1.jpg",vouprice:"25",condition:"满88元可用",voUser:"仅可购买食品饮料部分商品",vouhref:"https://www.iconfont.cn/"},
              {vouimg:"/img/imgBanner1/banner2.png",vouprice:"20",condition:"满59元可用",voUser:"仅可购买清洁部分商品",vouhref:"https://www.baidu.com/"},
              {vouimg:"/img/imgBanner1/banner3.jpg",vouprice:"10",condition:"满49元可用",voUser:"仅可购买食品饮料部分商品",vouhref:"https://www.iconfont.cn/"}
            ],
        }
    },
    mounted(){         
        var mySlideSwiper = new Swiper('#swiper2', {//控制图片的轮播
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          autoplay:3000,
          autoplayDisableOnInteraction:false,
          speed:300,
          loop:true,
          grabCursor : true,
          effect : 'coverflow',//设置slide的切换效果，coverflow（3d流）
          slidesPerView: 3,//设置slider容器同时显示的slides数量为3。
          centeredSlides: true,//设定为true时，active slide会居中，而不是默认状态下的居左。
        })
        var newSlideSwiper = new Swiper('#swiper3', {//控制文字信息的轮播
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
          autoplay:3000,
          autoplayDisableOnInteraction:false,
          speed:300,
          loop:true,
          grabCursor : true,
          effect : 'coverflow',//设置slide的切换效果，coverflow（3d流）
        })
    },
}
$(function(){
    $('.ranking').on('mouseover','.ranking-item', function() {
            var currentIndex = $(this).index() +1;
            hideAll();
            hideAllTop();
            $(this).css('background-color','rgb(223,89,0)');
            $('.ranking-item a').css('color','white');
            $('.ranking-cont'+currentIndex).show();
        });
        function hideAll() {
            for (var i=1;i<6;i++) {
                $('.ranking-cont'+i).hide();
            }
        }
    function hideAllTop(){
        for(var i=0;i<5;i++){
                $('.ranking-item').eq(i).css('background','rgb(170,179,176)');
            }
        }
})
</script>

<style scoped>
/* 整个div */
#fourList {
  margin-left: 130px;
  height: 340px;
  width: 1264px;
  margin-top: 20px;
}
/* 标题 */
.findtext {
    margin-top: 10px;
    margin-left: 25px;
    font-size: 24px;
    font-weight: bold;
    float: left;
    margin-right: 10px;
}
/* 标题下的iconfont */
.findtext:hover>i {
    color: rgb(223,89,0);
}
/* 标题下的iconfont */
.findtext i {
    font-size: 23px;
    padding-top: 8px;
    padding-left: 8px;
}
/* 四个小div */
.four_div {
  float: left;
  width: 296px;
  height: 340px;
  margin-right: 10px;
  background-color: white;
}

/* 第一个div第一个div第一个div */

/* 图品轮播 */
#swiper2 {
  margin-top: 70px;
  margin-left: -7px;
}
/* 图片轮播点击滑动下一张图片按钮 */
.swiper-button-next {
    margin-top: -15px;
    height: 20px;
    width: 26px;    
}
/* 图片轮播点击滑动上一张图片按钮 */
.swiper-button-prev {
    margin-top: -15px;
    margin-left: 14px;
    height: 20px;
    width: 26px;    
}
/* 图片轮播点击滑动上一张图片按钮鼠标悬停 */
.swiper-button-prev:hover {
    opacity: 0.6;
}
/* 图片轮播点击滑动下一张图片按钮鼠标悬停 */
.swiper-button-next:hover {
    opacity: 0.6;
}
/* 图片轮播的图片样式 */
.swiper-slide a>img {
  width: 120px;
  height: 120px;
}
/* 图片轮播的文字样式 */
.newslidep1,.newslidep2,.newslidep3 {
  text-align: center;
}
/* 图片轮播的商品名称 */
.newslidep1 {
  margin-top: 15px;
  font-size: 18px;
}
/* 图片轮播的副标题 */
.newslidep2 {
  font-size: 12px;
  margin-top: 5px;
  color: #999;
}
/* 图片轮播的价格 */
.newslidep3 {
  font-size: 24px;
  margin-top: 25px;
  color: rgb(223,89,0);
}
/* .swiper-wrapper a:hover {
  opacity: 0.8;
} */
/* .swiper-slide a:hover>.newslidep1 {
  color: rgb(223,89,0);
} */
/* 第一个div */
.four1 {
  background: url('/img/bej.jpg') no-repeat;
}
/* 轮播图片的鼠标悬停效果 */
.swiper-slide:hover>a {
  opacity: 0.8;
}
/* 轮播商品名称的鼠标悬停效果 */
.swiper-slide:hover>a>.newslidep1 {
  color: rgb(223,89,0);
}

/* 第二个div第二个div第二个div */
.ranking {
    float: left;
    margin-top: 7px;
    padding-left:9px;
    width: 296px;
    height: 30px;
}
/* 排行小菜单 */
.ranking-item {
  float: left;
  margin-right: 10px;
}
/* 排行榜小菜单a链接 */
.ranking-item a {
  font-size: 13px;
  color: white;
}
/* 排行榜小菜单 */
.ranking-item {
  width: 62px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background-color: rgb(170,179,176);
  border-radius: 20px;
}
/* 排行榜iconfont */
.top {
  float: left;
  margin-left: 15px;
  margin-top: -17px;
}
/* 排行榜三个iconfont列表 */
.top li {
  margin-top: 40px;
}
/* 排行榜iconfont */
.iconfont {
  font-size: 40px;
}
.icon-top1 {
  color: rgb(249,187,0);
}
.icon-top2 {
  color: rgb(255,127,39);
}
.icon-top3 {
  color: rgb(224,130,73);
}
/* 商品div */
.cont {
    position:absolute;
    margin-top:80px;
    margin-left: 65px;
    width: 290px;
    height: 280px;
}
.ranking_in_a:hover>img {
  opacity: 0.8;
}
.ranking_in_a:hover {
  color: rgb(223,89,0);
}
/* 轮播商品列表1 */
.ranking-cont1{
    display:block;
}
/* 轮播商品列表2,3,4 */
.ranking-cont2,.ranking-cont3,.ranking-cont4 {
    display:none;
}
/* 商品图片 */
.ranking_img {
  width: 90px;
  height: 75px;
  margin-top: 4px;
  margin-right: 14px;
}
/* 商品名称 */
.rank_name {
  width: 108px;
  font-size: 15px;
  position: absolute;
  margin-top: 20px;
}
.on{
  background-color:rgb(223,89,0);
}
.on a {
  color: white;
}

/* 第三个div第三个div第三个div */
.store {
  margin-top: 53px;
}
/* 店铺列表 */
.storeMenu {
  width: 276px;
  height: 130px;
  margin-left: 10px;
  margin-top: 13px;
}
/* 第一个店铺div */
.storeMenu:first-child {
  background-color: rgb(243,241,234);
}
/* 第二个店铺div */
.storeMenu:last-child {
  background-color: rgb(246,239,243);
}
/* 店铺div的图片 */
.storeInfo img {
  width: 100px;
  height: 100px;
  margin-left: 160px;
  margin-top: -85px;
  border-radius: 10px;
}
/* 店铺div鼠标悬停效果 */
.storeInfo:hover>img {
  opacity: 0.8;
}
/* 店铺div鼠标悬停效果 */
.storeInfo:hover>.name_p {
  color: rgb(223,89,0);
}
/* 店铺名称 */
.storeInfo p {
  margin-left: 20px;
  padding-top: 20px;
  font-size: 13px;
  margin-top: 10px;
  width: 130px;
}
/* 关注人数 */
.number_p {
  font-size: 11px;
  color: #999;
}

/* 第四个div第四个div第四个div */
/* 第四个div的背景图片 */
.four4 {
  background: url('/img/voucherbj.jpg') no-repeat;
}
/* 整个第四个div */
.voucherList {
  margin-top: 68px;
}
/* 第四个div里的三个小div */
.voucerInfo {
  margin-top: 22px;
}
/* 第四个div的图片img */
.vouInfoList img {
  position: absolute;
  float: left;
  margin-left: 30px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.vouInfoList:hover>img {
  opacity: 0.8;
}
/* 优惠券的金额 */
.vouprice {
  color: rgb(223,89,0);
  font-size: 24px;
  font-weight: bold;
}
/* 优惠券的金额¥符号 */
.vouprice span {
  font-weight: normal;
  font-size: 14px;
}
/* 优惠券的有效前提 */
.voucon {
  color: #999;
  margin-bottom: 2px;
}
/* 优惠券的使用限制 */
.vouuse {
  color: black;
  width: 108px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* 文字部分 */
.vouInfoList p {
  margin-left: 112px;
}
/* 更多 */
.more {
  box-sizing: border-box;
  position: absolute;
  margin-top: -4px;
  padding-left: 120px;
}
.more:hover {
  color: rgb(223,89,0);
}
/* 更多的iconfont */
.more i {
  position: absolute;
  margin-top: -1px;
  font-size:18px;
  margin-left: 2px;
}
</style>