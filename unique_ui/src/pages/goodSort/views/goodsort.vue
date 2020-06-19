<template>
    <div id="goodSort_div">
        <div id="head">
            <img class="webLogo" src="../logo2-.png">
            <input  value="请输入要搜索的关键词" onfocus="javascript:if(this.value=='请输入要搜索的关键词')this.value='';" type="text" autocomplete="off" id="search" accesskey="s" />
            <div class="seimg_span">
                <img class="search_img" src="/img/iconfonts/search.png" />
            </div>
            <div class="shop_car">
                <img class="img_shop_car" src="/img/iconfonts/gouwuche.png" />
                <a class="shop-car-text" href="shoppingCart.html">我的购物车</a>
            </div>
            <div class="hot_search">
                <a v-for="hot in hotlist" :key="hot.id" :href="hot.url">{{hot.name}}</a>
            </div>
        </div>

        <div id="middle">
            <div class="mi_left">
                <h3>食品饮料</h3>
                <div class="fenlei">
                    <a class="fenl_a" href="">进口食品<i class="iconfont icon-gengduo1"></i></a>
                    <ul class="feninfo">
                        <li v-for="leinfo1 in leftInfoList1" :key="leinfo1.infoName"><a :href="leinfo1.infoHref">{{leinfo1.infoName}}</a></li>
                    </ul>
                </div>
                <div class="fenlei">
                    <a class="fenl_a" href="">休闲食品<i class="iconfont icon-gengduo1"></i></a>
                    <ul class="feninfo">
                        <li v-for="leinfo2 in leftInfoList2" :key="leinfo2.infoName"><a :href="leinfo2.infoHref">{{leinfo2.infoName}}</a></li>
                    </ul>
                </div>
                <div class="fenlei">
                    <a class="fenl_a" href="">饮料冲调<i class="iconfont icon-gengduo1"></i></a>
                    <ul class="feninfo">
                        <li v-for="leinfo3 in leftInfoList3" :key="leinfo3.infoName"><a :href="leinfo3.infoHref">{{leinfo3.infoName}}</a></li>
                    </ul>
                </div>
                <div class="fenlei">
                    <a class="fenl_a" href="">粮油调味<i class="iconfont icon-gengduo1"></i></a>
                    <ul class="feninfo">
                        <li v-for="leinfo4 in leftInfoList4" :key="leinfo4.infoName"><a :href="leinfo4.infoHref">{{leinfo4.infoName}}</a></li>
                    </ul>
                </div>
                <div class="fenlei">
                    <a class="fenl_a" href="">茗  茶<i class="iconfont icon-gengduo1"></i></a>
                    <ul class="feninfo">
                        <li v-for="leinfo5 in leftInfoList5" :key="leinfo5.infoName"><a :href="leinfo5.infoHref">{{leinfo5.infoName}}</a></li>
                    </ul>
                </div>
            </div>
            <div class="mi_right">
                <sortTopBanner />
            </div>
        </div>
        <div id="menuList">
            <ul class="menu_ul">
                <li>热卖商品</li>
                <li>休闲食品</li>
                <li>饼干蛋糕</li>
                <li>坚果蜜饯</li>
                <li>速食冲调</li>
                <li>茗茶名酒</li>
                <li>返回顶部</li>
            </ul>
        </div>
        <div id="hotsl">
            <hotSale />
        </div>
        <div id="spShow">
            <spShow />
        </div>
    </div>
</template>

<script>
import sortTopBanner from '../components/sortTopBanner.vue'
import hotSale from '../components/hotSale.vue'
import spShow from '../components/spShow.vue'
export default {
    data(){
        return {
            // 热门搜索数据
            hotlist:[
                {id:1,name:"热门搜索1",url:'https://www.baidu.com/'},
                {id:2,name:"热门搜索2",url:'https://www.iconfont.cn/'},
                {id:3,name:"热门搜索3",url:'https://www.baidu.com/'},
                {id:4,name:"热门搜索4",url:'https://www.iconfont.cn/'},
                {id:5,name:"热门搜索5",url:'https://www.baidu.com/'},
                {id:6,name:"热门搜索6",url:'https://www.iconfont.cn/'},
                {id:7,name:"热门搜索7",url:'https://www.baidu.com/'},
                {id:8,name:"热门搜索8",url:'https://www.iconfont.cn/'}
            ],
            leftInfoList1:[
                {infoName:"进口牛奶",infoHref:"goodsortList.html"},
                {infoName:"巧克力",infoHref:"goodsortList.html"},
                {infoName:"橄榄油",infoHref:"goodsortList.html"},
                {infoName:"饼干蛋糕",infoHref:"goodsortList.html"}
            ],
            leftInfoList2:[
                {infoName:"月饼",infoHref:"goodsortList.html"},
                {infoName:"老字号",infoHref:"goodsortList.html"},
                {infoName:"营养零食",infoHref:"goodsortList.html"},
                {infoName:"休闲零食",infoHref:"goodsortList.html"},
                {infoName:"坚果炒货",infoHref:"goodsortList.html"},
                {infoName:"肉干",infoHref:"goodsortList.html"}
            ],
            leftInfoList3:[
                {infoName:"饮料",infoHref:"goodsortList.html"},
                {infoName:"牛奶酸奶",infoHref:"goodsortList.html"},
                {infoName:"饮用水",infoHref:"goodsortList.html"},
                {infoName:"咖啡牛奶",infoHref:"goodsortList.html"}
            ],
            leftInfoList4:[
                {infoName:"大米",infoHref:"goodsortList.html"},
                {infoName:"食用油",infoHref:"goodsortList.html"},
                {infoName:"面条",infoHref:"goodsortList.html"},
                {infoName:"杂粮",infoHref:"goodsortList.html"},
                {infoName:"方便面食",infoHref:"goodsortList.html"}
            ],
            leftInfoList5:[
                {infoName:"绿茶",infoHref:"goodsortList.html"},
                {infoName:"铁观音",infoHref:"goodsortList.html"},
                {infoName:"普洱",infoHref:"goodsortList.html"},
                {infoName:"龙井",infoHref:"goodsortList.html"}
            ]
        }
    },
    components:{
        sortTopBanner,
        hotSale,
        spShow
    }
}
$(function(){
  var rNavLi = $('.menu_ul li')
  $('#menuList').hide()
  $(window).scroll(function(){
    if($(this).scrollTop() > 570){
      $('#menuList').fadeIn();
    }else{
      $('#menuList').fadeOut();
    }
  });
  rNavLi.eq(0).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var _i = $(this).index();
			$('body, html').animate({
				scrollTop: 837
      }, 400);
		});
		rNavLi.eq(1).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var _i = $(this).index();
			$('body, html').animate({
				scrollTop: 1223
			}, 400);
		});
		rNavLi.eq(2).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var _i = $(this).index();
			$('body, html').animate({
				scrollTop: 1873
			}, 400);
		});
		rNavLi.eq(3).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var _i = $(this).index();
			$('body, html').animate({
				scrollTop: 2523
			}, 400);
        });
        rNavLi.eq(4).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var _i = $(this).index();
			$('body, html').animate({
				scrollTop: 3173
			}, 400);
        });
        rNavLi.eq(5).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var _i = $(this).index();
			$('body, html').animate({
				scrollTop: 3823
			}, 400);
        });
        rNavLi.eq(6).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var _i = $(this).index();
			$('body, html').animate({
				scrollTop: 0
			}, 500);
		});
})
</script>

<style lang="scss" scoped>
  @import url('../css/goodsort.css');
</style>

