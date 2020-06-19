<template>
    <div id="myOrder">
      <div id="head">
          <img class="webLogo" src="../logo2-.png">
          <h1>MY UNIQUE</h1>
          <input  value="请输入要搜索的关键词" onfocus="javascript:if(this.value=='请输入要搜索的关键词')this.value='';" type="text" autocomplete="off" id="search" accesskey="s" />
          <div class="seimg_span">
              <img class="search_img" src="/img/iconfonts/search.png" />
          </div>
      </div>
      <div id="orderBody">
        <div class="mainLeft">
            <p>全部功能</p>
            <ul class="mainmenu">
                <li><a class="mainLi" href="shoppingCart.html">我的购物车</a></li>
                <li><a class="mainLi active">已买到的宝贝</a></li>
                <li><a class="mainLi">购买过的店铺</a></li>
                <li><a href="myCollection.html" class="mainLi">我的收藏</a></li>
                <li><a class="mainLi">我的评价</a></li>
            </ul>
        </div>        
        <div class="mainright">
          <div class="orderTop">
              <div class="activeli">
                <span>全部订单</span>
                <span class="liright">|</span>
              </div>
              <div>
                <span>待付款</span>
                <span class="liright">|</span>
              </div>
              <div>
                <span>待发货</span>
                <span class="liright">|</span>
              </div>
              <div>
                <span>待收货</span>
                <span class="liright">|</span>
              </div>
              <div>
                <span>待评价</span>
              </div>
          </div>
          <div>
            <input class="ddss" type="text" placeholder="输入商品标题或订单号进行搜索">
            <button class="ddbtn">订单搜索</button>
          </div>
          <div class="orderList">
            <ul class="orderlistop">
              <li>宝贝</li>
              <li>单价</li>
              <li>数量</li>
              <li>商品操作</li>
              <li>实付款</li>
              <li>交易状态</li>
              <li>交易操作</li>
            </ul>
            <ul class="orderlistinfo">
              <li v-for="item in orderList" :key="item.ordernumber" class="orderinfo">
                <a class="orderlj" href="">
                <div class="orderinfotop">
                  <span>{{item.time}}</span>
                  <span>订单号：{{item.ordernumber}}</span>
                  <i title="删除订单" class="iconfont icon-shanchu"></i>
                </div>
                <div class="orderinfobody">
                  <div><img class="orderimg" :src="item.img" alt=""></div>
                  <div class="textinfo">
                    <p class="itemname">{{item.name}}</p>
                    <p v-for="infol in item.speciinfo" :key="infol.title">{{infol.title}}：{{infol.content}}</p>
                  </div>
                  <div class="allprice">
                    <p><span class="rmb">￥</span>{{item.oldprice}}</p>
                    <p><span class="rmb">￥</span>{{item.price}}</p>
                  </div>
                  <div class="ordercount">
                    <p>{{item.num}}</p>
                  </div>
                  <div class="orderOperation">
                    <a href="">退款/退货</a><br>
                    <a href="">投诉商家</a>
                  </div>
                  <ul class="infoend">
                    <li class="totalpri"><span class="rmb">￥</span>{{item.totalprice}}</li>
                    <li>
                      <p>{{item.orderstate}}</p>
                      <a href="">订单详情</a>
                    </li>
                    <li>
                      <a href="">修改订单</a><br>
                      <a href="">确认收货</a><br>
                      <a href="">添加评论</a>
                    </li>
                  </ul>
                </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{  
        orderList:[
          {
            time:"2020-03-13",
            ordernumber:"20200313001",
            img:"/img/imgBanner1/banner1.jpg",
            name:"商品名称商品名称1",oldprice:"156.00",
            price:"126.00",
            totalprice:"126.00",
            num:1,
            orderstate:"买家已付款",
            speciinfo:[
              {title:"颜色分类",content:"蓝色"},
              {title:"尺码",content:"L"}
            ]
          },
          {
            time:"2020-03-13",
            ordernumber:"20200313002",
            img:"/img/imgBanner1/banner2.png",
            name:"商品名称商品名称2",
            oldprice:"186.00",
            totalprice:"186.00",
            price:"146.00",
            num:1,
            orderstate:"快件已签收",
            speciinfo:[
              {title:"化妆品净含量",content:"260g"}
            ],
          },
          {
            time:"2020-03-13",
            ordernumber:"20200313003",
            img:"/img/imgBanner1/banner3.jpg",
            name:"商品名称商品名称3",oldprice:"146.00",
            price:"106.00",
            totalprice:"212.00",
            num:2,
            orderstate:"物流派送中",
            speciinfo:[
              {title:"口味",content:"牛肉零食组合"},
              {title:"含量",content:"400g"}
            ],
          },
        ]
      }
  },
}
</script>

<style scoped>
  @import url('../css/myOrder.css');
</style>