<template>
  <div>
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
      <ul class="head_menu">
        <li v-for="headmenu in headmenuList" :key="headmenu.id"><a :href="headmenu.url">{{headmenu.name}}</a></li>
      </ul>      
    </div>
    <div class="headtop"> 
        <img class="webLogo" src="../logo2-.png">
        <input value="请输入要搜索的关键词" onfocus="javascript:if(this.value=='请输入要搜索的关键词')this.value='';" type="text" autocomplete="off" id="search" accesskey="s" />
        <div class="seimg_span">
        <img class="search_img" src="/img/iconfonts/search.png" />
      </div>
    </div>    
    <div id="head_M">
      <div class="M_left">
        <ul class="M_left_menu">
          <li><a href="goodsort.html">家用电器</a></li>
          <li>
            <a href="goodsort.html">手机</a><span>|</span>
            <a href="goodsort.html">运营商</a><span>|</span>
            <a href="goodsort.html">数码</a>
          </li>
          <li>
            <a href="goodsort.html">电脑</a><span>|</span>
            <a href="goodsort.html">办公</a>
          </li>
          <li>
            <a href="goodsort.html">家居</a><span>|</span>
            <a href="goodsort.html">家具</a><span>|</span>
            <a href="goodsort.html">家装</a><span>|</span>
            <a href="goodsort.html">厨具</a>
          </li>
          <li>
            <a href="goodsort.html">男装</a><span>|</span>
            <a href="goodsort.html">女装</a><span>|</span>
            <a href="goodsort.html">童装</a><span>|</span>
            <a href="goodsort.html">内衣</a>
          </li>
          <li>
            <a href="goodsort.html">美妆</a><span>|</span>
            <a href="goodsort.html">个护清洁</a><span>|</span>
            <a href="goodsort.html">宠物</a>
          </li>
          <li>
            <a href="goodsort.html">女鞋</a><span>|</span>
            <a href="goodsort.html">箱包</a><span>|</span>
            <a href="goodsort.html">钟表</a><span>|</span>
            <a href="goodsort.html">珠宝</a>
          </li>
          <li>
            <a href="goodsort.html">男鞋</a><span>|</span>
            <a href="goodsort.html">运动</a><span>|</span>
            <a href="goodsort.html">户外</a>
          </li>
          <li>
            <a href="goodsort.html">房产</a><span>|</span>
            <a href="goodsort.html">汽车</a><span>|</span>
            <a href="goodsort.html">汽车用品</a>
          </li>
          <li>
            <a href="goodsort.html">母婴</a><span>|</span>
            <a href="goodsort.html">玩具乐器</a>
          </li>
          <li>
            <a href="goodsort.html">食品</a><span>|</span>
            <a href="goodsort.html">酒类</a><span>|</span>
            <a href="goodsort.html">生鲜</a><span>|</span>
            <a href="goodsort.html">特产</a>
          </li>
          <li>
            <a href="goodsort.html">艺术</a><span>|</span>
            <a href="goodsort.html">礼品鲜花</a><span>|</span>
            <a href="goodsort.html">绿植</a>
          </li>
          <li>
            <a href="goodsort.html">医药保健</a><span>|</span>
            <a href="goodsort.html">护理护具</a>
          </li>
          <li>
            <a href="goodsort.html">图书</a><span>|</span>
            <a href="goodsort.html">文娱</a><span>|</span>
            <a href="goodsort.html">教育</a>
          </li>
          <li>
            <a href="goodsort.html">机票</a><span>|</span>
            <a href="goodsort.html">酒店</a><span>|</span>
            <a href="goodsort.html">旅游</a><span>|</span>
            <a href="goodsort.html">生活</a>
          </li>
          <li>
            <a href="goodsort.html">安装</a><span>|</span>
            <a href="goodsort.html">维修</a><span>|</span>
            <a href="goodsort.html">二手</a><span>|</span>
            <a href="goodsort.html">清洗</a>
          </li>
          <li>
            <a href="goodsort.html">工业品</a>
          </li>
        </ul>
      </div>
      <div class="M_middle_l">
        <imgsBanner1 />
      </div>
      <div class="M_middle_r">
        <imgsBanner2 />
      </div>
      <div class="M_right">
          <div v-for="user in userlist" :key="user.id" class="user_info">
            <a href="personalData.html"><img class="headimg" :src="user.headImg"></a>
            <p class="welcome">Hi~ {{name}}，欢迎登录绝!</p>
            <div class="login_t">
              <a href="login.html">登录</a><span> | </span>
              <a href="register.html">注册</a>
            </div>
            <div class="xinren">新人福利</div>
            <div class="vip">UNI会员</div>
          </div>
          <hr />
          <div class="imgBanner3">
              <h4 class="toHot">今日特卖</h4>
              <span class="toMore">更多 ></span>
              <imgsBanner3 />
          </div>
          <hr style="margin-top:10px;" />
          <div class="icon_menu">
            <ul v-for="icon in iconfontlist" :key="icon.id" class="icon_menuList">
              <li class="icon_float">
                <a class="icon_list" :href="icon.url"><i :class="icon.iconfont"></i></a>
                <div><a class="icon_text" :href="icon.url">{{icon.name}}</a></div>
              </li>       
            </ul>
          </div>
      </div>
    </div>
    <div class="scrollBanner">
      <imgscrollBanner />
    </div>
    <div id="menuList">
        <ul class="menu_ul">
            <li>今日特价</li>
            <li>发现好货</li>
            <li>特色优选</li>
            <li>频道广场</li>
            <li>联系客服</li>
            <li>意见反馈</li>
            <li>返回顶部</li>
        </ul>
    </div>
    <div class="findBuy">
      <findGoods />
    </div>    
    <div class="imgsBanner4">
      <imgsBanner4 />
    </div>    
    <div id="fourBox">
      <fourBox />
    </div>
    <div id="pindao">
      <pindaogc />
    </div>
  </div>
</template>

<script>
import imgsBanner1 from '../components/imgsBanner-one.vue'
import imgsBanner2 from '../components/imgsBanner-two.vue'
import imgsBanner3 from '../components/imgsBanner-three.vue'
import imgsBanner4 from '../components/imgsBanner-four.vue'
import imgscrollBanner from '../components/imgscrollBanner.vue'
import findGoods from '../components/findGoods.vue'
import pindaogc from '../components/pindaogc.vue'
import fourBox from '../components/fourBox.vue'
import { setCookie,getCookie,delCookie } from '../../js/cookie.js'
export default {
  data(){
    return{
      name:'',
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
      // 顶部菜单导航数据
      headmenuList:[
        {id:1,name:"秒杀",url:'https://www.baidu.com/'},
        {id:2,name:"优惠",url:'https://www.iconfont.cn/'},
        {id:3,name:"UNI会员",url:'https://www.baidu.com/'},
        {id:4,name:"品牌购",url:'https://www.iconfont.cn/'},
        {id:5,name:"家电",url:'https://www.baidu.com/'},
        {id:6,name:"超市",url:'https://www.iconfont.cn/'},
        {id:7,name:"生鲜",url:'https://www.baidu.com/'},
        {id:8,name:"服装",url:'https://www.iconfont.cn/'},
        {id:9,name:"护肤",url:'https://www.baidu.com/'},
        {id:10,name:"日常",url:'https://www.iconfont.cn/'}
      ],
      userlist:[
        {id:1,name:"张三",headImg:"./img/touxiang.jpg"}
      ],
      iconfontlist:[
        {id:1,name:"巴黎",iconfont:"iconfont icon-bali",url:"https://www.baidu.com/"},
        {id:2,name:"北京",iconfont:"iconfont icon-beijing",url:"https://www.baidu.com/"}, 
        {id:3,name:"广州",iconfont:"iconfont icon-guangzhou",url:"https://www.baidu.com/"},
        {id:4,name:"大理",iconfont:"iconfont icon-dali",url:"https://www.baidu.com/"},
        {id:5,name:"丽江",iconfont:"iconfont icon-lijiang",url:"https://www.baidu.com/"},
        {id:6,name:"上海",iconfont:"iconfont icon-shanghai",url:"https://www.baidu.com/"},
        {id:7,name:"土耳其",iconfont:"iconfont icon-tuerqi",url:"https://www.baidu.com/"},        
        {id:8,name:"荷兰",iconfont:"iconfont icon-helan",url:"https://www.baidu.com/"}
      ],
      currentImg:0,//当前默认选中
    }
  },
  mounted(){
            /*页面挂载获取保存的cookie值，渲染到页面上*/
            let uname = getCookie('username')
            this.name = uname
            /*如果cookie不存在，则跳转到登录页*/
            if(uname == ""){
                this.$router.push('/')
            }
        },
        methods:{
            quit(){
                /*删除cookie*/
                delCookie('username')
            }
        },
  components:{
    imgsBanner1,
    imgsBanner2,
    imgsBanner3,
    imgsBanner4,
    imgscrollBanner,
    findGoods,
    pindaogc,
    fourBox
  }
}
$(function(){
  var rNavLi = $('.menu_ul li')
  $('#menuList').hide()
  $(window).scroll(function(){
    if($(this).scrollTop() > 400){
      $('#menuList').fadeIn();
    }else{
      $('#menuList').fadeOut();
    }
  });
  rNavLi.eq(0).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var _i = $(this).index();
			$('body, html').animate({
				scrollTop: 650
      }, 400);
		});
		rNavLi.eq(1).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var _i = $(this).index();
			$('body, html').animate({
				scrollTop: 1270
			}, 400);
		});
		rNavLi.eq(2).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var _i = $(this).index();
			$('body, html').animate({
				scrollTop: 1555
			}, 400);
		});
		rNavLi.eq(3).click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			var _i = $(this).index();
			$('body, html').animate({
				scrollTop: 1895
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
$(function(){
  //获取要定位元素距离浏览器顶部的距离
  $('.headtop').hide();
  // var navH = $(".headtop").offset().top;
  // console.log(navH);
  //滚动条事件
  $(window).scroll(function(){
      //获取滚动条的滑动距离
      var scroH = $(this).scrollTop();
      // console.log(scroH);
      //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
      if(scroH>=166){
        $('.headtop').show();
        $(".headtop").css({"position":"fixed","top":0});
      }else if(scroH<166){
        $('.headtop').hide();
        $(".headtop").css({"position":"fixed"});
      }
    })
})
</script>
<style lang="scss" scoped>
  @import url('../css/index.css');
</style>
