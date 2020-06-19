<template>
    <div id="shoppingCart">
      <div id="head">
          <img class="webLogo" src="../logo2-.png">
          <h1>购物车</h1>
          <input  value="请输入要搜索的关键词" onfocus="javascript:if(this.value=='请输入要搜索的关键词')this.value='';" type="text" autocomplete="off" id="search" accesskey="s" />
          <div class="seimg_span">
              <img class="search_img" src="/img/iconfonts/search.png" />
          </div>
      </div>
      <div class="shopCar">
        <div class="shopCarTop">
            <p>全部商品<span>{{list.length}}</span></p>
        </div>
        <div v-cloak v-if="list.length">
            <table>
              <thead>
                <tr>
                    <th><input id="checkAll" type="checkbox" class="checkAll" @click="checkAllOrNot($event)"></th>
                    <th>商品信息</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>金额</th>
                    <th>操作</th>
                </tr>
              </thead>
              <tbody>
              <tr v-for="(item,index) in list" :key="index">
                  <td><input type="checkbox" class="checkItem" @click="checkItem($event,index)"></td>                  
                  <td>
                    <img class="shopimg" :src="item.img" alt="">
                    <a :href="item.shophref" class="itemname">{{item.name}}</a>
                  </td>
                  <td>
                    <p class="oldpri"><span class="renmb">￥</span>{{item.oldprice}}</p>
                    <p class="newpri"><span class="renmb">￥</span>{{item.price}}</p>
                  </td>
                  <td>
                      <button class="numbtn" @click="reduceCount(index)" :disabled="item.count===1">-</button>
                      <input class="itemcount" type="text" :value="item.count">
                      <button class="numbtn" @click="addCount(index)">+</button>
                  </td>
                  <td class="jine"><span class="renmb">￥</span>{{item.price * item.count}}</td>
                  <td>
                      <button class="delete" @click="remove(index)">删除</button>
                  </td>
              </tr>
              </tbody>
          </table>
          <div class="gwcbuttom fixedbuttom1">
            <input id="checkAll2" type="checkbox" class="checkAll" @click="checkAllOrNot($event)">
            <span class="quanxuan">全选</span>            
            <a class="delete2">删除</a>              
            <a class="collection">移入收藏夹</a>
            <p class="seleshop">已选商品<span>{{checkList.length}}</span>件</p>
            <p class="priceAll">合计：<span class="renmb">￥</span><span class="totalpri">{{totalPrice}}</span></p>                           
            <button @click="ToPayTotalMoney" class="jiesuan">结算</button>
          </div>          
        </div>        
        <div v-else>购物车内暂时没有商品</div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      /**
         * 购物车中的商品列表
         */
        list: [
            {
                id: 1,
                name: '韩国进口海牌海苔',
                oldprice:45.00,
                price: 35.00,
                img:'/img/imgBanner1/banner1.jpg',
                count: 1,
                shophref:'#'
            },
            {
                id: 2,
                name: '印尼进口 Nabati 丽巧克（Richoco）休闲零食 巧克力味 威化饼干',
                oldprice:65.00,
                price: 45.00,
                img:'/img/imgBanner1/banner2.png',
                count: 1,
                shophref:'#'
            },
            {
                id: 3,
                name: '菲律宾进口 道吉草 奶油夹',
                oldprice:25.00,
                price: 15.50,
                img:'/img/imgBanner1/banner3.jpg',
                count: 1,
                shophref:'#'
            },
            {
                id: 4,
                name: '韩国进口海牌海苔',
                oldprice:45.00,
                price: 35.00,
                img:'/img/imgBanner1/banner1.jpg',
                count: 1,
                shophref:'#'
            },
            {
                id: 5,
                name: '印尼进口 Nabati 丽巧克（Richoco）休闲零食 巧克力味 威化饼干',
                oldprice:65.00,
                price: 45.00,
                img:'/img/imgBanner1/banner2.png',
                count: 1,
                shophref:'#'
            },
            {
                id: 6,
                name: '菲律宾进口 道吉草 奶油夹',
                oldprice:25.00,
                price: 15.50,
                img:'/img/imgBanner1/banner3.jpg',
                count: 1,
                shophref:'#'
            },
            {
                id: 1,
                name: '韩国进口海牌海苔',
                oldprice:45.00,
                price: 35.00,
                img:'/img/imgBanner1/banner1.jpg',
                count: 1,
                shophref:'#'
            },
            {
                id: 2,
                name: '印尼进口 Nabati 丽巧克（Richoco）休闲零食 巧克力味 威化饼干',
                oldprice:65.00,
                price: 45.00,
                img:'/img/imgBanner1/banner2.png',
                count: 1,
                shophref:'#'
            },
            {
                id: 3,
                name: '菲律宾进口 道吉草 奶油夹',
                oldprice:25.00,
                price: 15.50,
                img:'/img/imgBanner1/banner3.jpg',
                count: 1,
                shophref:'#'
            },
            {
                id: 4,
                name: '韩国进口海牌海苔',
                oldprice:45.00,
                price: 35.00,
                img:'/img/imgBanner1/banner1.jpg',
                count: 1,
                shophref:'#'
            },
            {
                id: 5,
                name: '印尼进口 Nabati 丽巧克（Richoco）休闲零食 巧克力味 威化饼干',
                oldprice:65.00,
                price: 45.00,
                img:'/img/imgBanner1/banner2.png',
                count: 1,
                shophref:'#'
            },
            {
                id: 6,
                name: '菲律宾进口 道吉草 奶油夹',
                oldprice:25.00,
                price: 15.50,
                img:'/img/imgBanner1/banner3.jpg',
                count: 1,
                shophref:'#'
            },
        ],
        //选中的商品列表，用于计算总价
        checkList: [],
        fixedbot:false
    }
  },
  computed:{
    /**
     * 总价
     * @returns {string}
     */
    totalPrice: function () {
        var total = 0;
        for (var i = 0; i < this.checkList.length; i++) {
            var item = this.checkList[i];
            total += item.price * item.count;
        }
        return total.toLocaleString();
    },    
  },
  methods: {
    /**
     * 减少购买数量
     * @param index
     */
    reduceCount: function (index) {
        if (this.list[index].count === 1) return;
        this.list[index].count--;
    },
    /**
     * 增加购买数量
     * @param index
     */
    addCount: function (index) {
        this.list[index].count++;
    },
    /**
     * 移除商品
     * @param index
     */
    remove: function (index) {
        console.log("remove-index:" + index);
        this.list.splice(index, 1);

        //获取商品序号
        var id = index + 1;
                //移除实际参与计算的商品
        var $checkList = this.checkList;
        for (var i = 0; i < $checkList.length; i++) {
            var item = $checkList[i];
            if (item.id == id) {
                $checkList.splice(i, 1);
            }
        }
    },
    /**
     * 全选或全不选
     * @param event
     */
    checkAllOrNot: function (event) {
        if (event.target.checked) {//全选
            this.checkAll();
            console.log("checkList：" + this.checkList);
        } else { // 全不选
            console.log("全不选");
            this.checkInItems('noCheckAll');
            this.checkList.splice(0);//清空数组
        }
    },
    /**
     * 全选
     */
    checkAll: function () {
        console.log("全选");
        this.checkInItems('checkAll');
        this.checkList = this.list.concat();//复制商品列表
    },
    /**
     * 全选或全不选
     * @param type checkAll：全选；其他：全不选
     */
    checkInItems: function (type) {
        var items = document.querySelectorAll('.checkItem');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (type === 'checkAll') {
                item.checked = true;
            } else {
                item.checked = false;
            }
        }
    },
    /**
     * 勾选或不勾选
     */
    checkItem: function (event, index) {
        console.log("checkItem");
        var element = event.target;
        var $allCheck = document.querySelector(".checkAll");
        if (element.checked) {//勾选，加入已选择列表
            this.checkList.push(this.list[index]);
            this.checkAllElement($allCheck);
        } else {//不勾选，从已选择列表中去除
            this.checkList.splice(index, 1);
            $allCheck.checked = false;
        }
    },
    /**
     * 勾选全选框
     * @param element
     */
    checkAllElement: function (element) {
        //如果所有的商品都已被勾选，则勾选全选框
        if (this.checkList.length == this.list.length) {
            element.checked = true;
        }
    },
    ToPayTotalMoney(){
        //localStorage.setItem('totalMoney',this.totalMoney)
        console.log(this.totalMoney)
        // bus.$emit("getTotalMoney",this.totalMoney);
        if(this.checkList.length<=0){
            window.confirm("请选择商品")
        }else{
            this.$router.push({
                path:"/pay",
                params:{
                    payTotalMoney:this.totalMoney
                }
            })
        }        
    }
  }
}
$(function(){
  //获取要定位元素距离浏览器顶部的距离
        var navH = $(".fixedbuttom1").offset().top;
        // console.log(navH);
        //滚动条事件
        $(window).scroll(function(){
            //获取滚动条的滑动距离
            var scroH = $(this).scrollTop();
            // console.log(scroH);
            //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
            if(scroH<=navH){
                $(".fixedbuttom1").css({"position":"sticky","bottom":0});
            }else if(scroH<navH){
                $(".fixedbuttom1").css({"position":"static"});
            }
         })
})
</script>

<style lang="scss" scoped>
  @import url('../css/shoppingCart.css');
</style>

