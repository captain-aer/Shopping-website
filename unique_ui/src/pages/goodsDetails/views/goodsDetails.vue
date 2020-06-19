<template>
    <div id="detailsDiv">
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
        </div>
        <div id="detailTop">
            <div class="detaileft">
                <div class="box">
                     <div class="thumb">
                        <img class="demo" :src="ImgUrl" alt="">
                        <div class="move"></div>
                    </div>
                    <div class="scale">
                        <img class="demo" :src="ImgUrl">
                    </div>
                </div>  
                <div class="little_img">
                    <ul v-for="img in imgUrl" :key="img.index"> 
                        <li class="litteli" @mouseenter="getIndex(img.url)">
                            <img class="littleImg" :src="img.url" alt="">
                        </li>
                    </ul>
                </div>
                </div>
            <div class="detailright">
                    <div class="wrap wrap-sku">
                        <div class="product-box">
                        <div class="product-content">
                            <p class="shopname">商品名称商品名称</p>
                            <div class="allprice"> 
                              <p v-if="oldprice" class="oldprice"><span class="oldpname">价 格 ：</span><span class="oldpicon">¥ </span>{{oldprice}}</p>
                              <p v-if="price" class="price"><span class="pname">促销价：</span><span class="picon">¥ </span>{{price}}</p>
                            </div>
                            <div class="product-delcom" v-for="(ProductItem,n) in simulatedDATA.specifications" :key="n">
                              <p class="itemname">{{ProductItem.name}} ：</p>
                              <ul class="product-footerlist clearfix">
                                  <li v-for="(oItem,index) in ProductItem.item" :key="index"
                                  v-on:click="specificationBtn(oItem.name,n,$event,index)" 
                                  v-bind:class="[oItem.isShow?'':'noneActive',subIndex[n] == index?'productActive':'']">
                                  {{oItem.name}}
                                  </li>
                              </ul>
                            </div>
                        </div>                            
                        <div class="neednum">
                          <p class="numname">数量：</p>
                          <number-box v-model="value" :max="20" :min="1"></number-box>
                          <span class="danwei">件</span>
                          <span v-if="stock" class="kucun">库存{{stock}}件</span>
                        </div>
                        <div class="product-footer">
                            <a href="javascript:" rel="external nofollow" >立即购买</a>
                        </div>
                        <div class="product-footer1">
                            <a href="#" >加入购物车</a>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
        <div id="detailButtom">
          <detailbottom></detailbottom>
        </div>
    </div>
</template>

<script>
import numberBox from "../components/number_box.vue"
import detailbottom from "../components/detailbottom.vue"
export default {
    data(){
        return{
          value:1,
            imgUrl:[
                {index:1,url:"/img/details/detail1.jpg"},
                {index:2,url:"/img/details/detail2.jpg"},
                {index:3,url:"/img/details/detail3.jpg"},
                {index:4,url:"/img/details/detail4.jpg"},
                {index:5,url:"/img/details/detail5.jpg"}
            ],            
            simulatedDATA: { //模拟后台返回的数据 多规格
          "difference": [
            { //所有的规格可能情况都在这个数组里
              "id": "19",
              "oldprice":"260.00",
              "price": "200.00",
              "stock": "19",
              "difference": "100,白色"
            },
            {
              "id": "20",
              "oldprice":"160.00",
              "price": "100.00",
              "stock": "29",
              "difference": "200,白色"
            },
            {
              "id": "21",
              "oldprice":"340.00",
              "price": "300.00",
              "stock": "10",
              "difference": "100,黑色"
            },
            {
              "id": "22",
              "oldprice":"940.00",
              "price": "900.00",
              "stock": "0",
              "difference": "200,黑色"
            },
            {
              "id": "23",
              "oldprice":"630.00",
              "price": "600.00",
              "stock": "48",
              "difference": "100,绿色"
            },
            {
              "id": "24",
              "oldprice":"550.00",
              "price": "500.00",
              "stock": "40",
              "difference": "200,绿色"
            },
            {
              "id": "25",
              "oldprice":"530.00",
              "price": "90.00",
              "stock": "0",
              "difference": "100,蓝色"
            },
            {
              "id": "26",
              "oldprice":"60.00",
              "price": "40.00",
              "stock": "20",
              "difference": "200,蓝色"
            }
          ],
          "specifications": [
            { //这里是要被渲染字段
              "name": "尺寸",
              "item": [
                {
                  "name": "100",
                },
                {
                  "name": "200",
                }
              ]
            },
            {
              "name": "颜色",
              "item": [
                {
                  "name": "白色",
                },
                {
                  "name": "蓝色",
                },
                {
                  "name": "黑色",
                },
                {
                  "name": "绿色",
                }
              ]
            }
          ],
        },

        selectArr: [], //存放被选中的值
        shopItemInfo: {}, //存放要和选中的值进行匹配的数据
        subIndex: [], //是否选中 因为不确定是多规格还是单规格，所以这里定义数组来判断
        price:'' ,//选中规格的价钱
        oldprice:'',
        stock:'',
        ImgUrl:"/img/details/detail1.jpg"
        }
    },
    components:{
      numberBox,
      detailbottom
    },
    methods:{
        getIndex(imgUrl) {
            this.ImgUrl = imgUrl;
        },
        specificationBtn: function (item, n, event, index) {
          var self = this;
          if (self.selectArr[n] != item) {
            self.selectArr[n] = item;
            self.subIndex[n] = index;
          } else {
            self.selectArr[n] = "";
            self.subIndex[n] = -1; //去掉选中的颜色
          }
          self.checkItem();
        },
      checkItem: function () {        
        var self = this;
        var option = self.simulatedDATA.specifications;
        var result = []; //定义数组储存被选中的值
        for(var i in option){
          result[i] = self.selectArr[i] ? self.selectArr[i] : '';
        }
        for (var i in option) {
          var last = result[i]; //把选中的值存放到字符串last去
          for (var k in option[i].item) {
            result[i] = option[i].item[k].name; //赋值，存在直接覆盖，不存在往里面添加name值
            option[i].item[k].isShow = self.isMay(result); //在数据里面添加字段isShow来判断是否可以选择
          }
          result[i] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时被覆盖
        }
        if(this.shopItemInfo[result]){
          this.price = this.shopItemInfo[result].price || '',
          this.oldprice = this.shopItemInfo[result].oldprice || '',
          this.stock = this.shopItemInfo[result].stock || ''
        }
        self.$forceUpdate(); //重绘
      },
      isMay: function (result) {
        for (var i in result) {
          if (result[i] == '') {
            return true; //如果数组里有为空的值，那直接返回true
          }
        }
        return this.shopItemInfo[result].stock == 0 ? false : true; //匹配选中的数据的库存，若不为空返回true反之返回false
      },

      doAlert:function(val) {
        alert(val);
      }
    },
    created: function () {
      var self = this;
      for (var i in self.simulatedDATA.difference) {
        self.shopItemInfo[self.simulatedDATA.difference[i].difference] = self.simulatedDATA.difference[i]; //修改数据结构格式，改成键值对的方式，以方便和选中之后的值进行匹配
      }
      self.checkItem();    
    }
}
$(function(){
    var zmFdj=function(){
    var thumbElem=document.getElementsByClassName("thumb")[0],
    // 获取缩略图距离页面左边的距离
        thumbPosX=Math.round(thumbElem.getBoundingClientRect().left+document.documentElement.scrollLeft),
    // 获取缩略图距离页面顶部的距离
        thumbPosY=Math.round(thumbElem.getBoundingClientRect().top+document.documentElement.scrollTop);
    // 获取移动的元素
    var moveElem=document.getElementsByClassName("move")[0];

    thumbElem.onmousemove=function(e){
        // 获取移动的元素的宽和高
        var moveElemW=moveElem.offsetWidth;
        var moveElemH=moveElem.offsetWidth;
        // 计算移动元素距离缩略图左边和顶部的距离
        var x=e.pageX-thumbPosX;
        var y=e.pageY-thumbPosY;
        // 设置鼠标指针在移动元素的中间位置
        moveElem.style.left=x-moveElemW/2+"px";
        moveElem.style.top=y-moveElemH/2+"px";
        // 移动元素不能超出区域
        if(parseInt(moveElem.style.left)<0){
            moveElem.style.left=0;
        }else if(parseInt(moveElem.style.left)>(thumbElem.offsetWidth-moveElemW)){
            moveElem.style.left=thumbElem.offsetWidth-moveElemW+"px";
        }
        if(parseInt(moveElem.style.top)<0){
            moveElem.style.top=0;
        }else if(parseInt(moveElem.style.top)>(thumbElem.offsetHeight-moveElemH)){
            moveElem.style.top=thumbElem.offsetHeight-moveElemH+"px";
        }
        // 放大的倍数
        var sca=thumbElem.offsetWidth/moveElemW;
        var scaleEle=document.getElementsByClassName("scale")[0];
        // 放大图片的位置
        var img=scaleEle.getElementsByTagName("img")[0];
        img.style.left=-(sca*parseInt(moveElem.style.left))+"px";
        img.style.top=-(sca*parseInt(moveElem.style.top))+"px";
    }
}
zmFdj();
})
</script>

<style lang="scss" scoped>
  @import url('../css/goodsDetails.css');
.wrap-sku {
  // 右侧整个div
.product-box {
    width: 1000px;
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 180px;
    margin-left: 460px;
}
// 右侧上方商品规格div 加价格
.product-content {
    margin-bottom: 50px;
}
// 右侧商品规格
.product-delcom {
    color: #323232;
    font-size: 15px;
    padding: 30px 0;
}
// 右侧商品规格ul
.product-footerlist {
    margin-top: 10px;
}
// 右侧商品规格li详情
.product-footerlist li {
    border: 1px solid #606060;
    border-radius: 5px;
    color: #606060;
    text-align: center;
    padding: 10px 20px;
    float: left;
    margin-right: 6px;
    cursor: pointer;
}
// 选中的右侧商品规格li详情
.product-footerlist li.productActive {
    background-color: #1A1A29;
    color: #fff;
    border: 1px solid #1A1A29;
}
// 没选中的右侧商品规格li详情
.product-footerlist li.noneActive {
    background-color: #ccc;
    opacity: 0.4;
    color: #000;
    pointer-events: none;
}
// 立即购买button
.product-footer {
    background-color: rgb(212,229,219);
    text-align: center;
    width: 160px;
    float: left;
    margin-left: -73px;
    border: 1px solid rgb(60,116,107);
    margin-top: 100px;
}
// 加入购物车button
.product-footer1 {
    background-color: rgb(60,116,107);
    border: 1px solid rgb(60,116,107);
    text-align: center;
    width: 160px;
    float: left;
    margin-left: 15px;
    margin-top: 100px;
}
// 立即购买button的a链接
.product-footer a {
    color: rgb(60,116,107);
    height: 45px;
    line-height: 45px;
    font-size: 16px;
}
// 加入购物车button的a链接
.product-footer1 a {
    color: #fff;
    text-decoration: none;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
}
// 商品名称
.shopname {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}
// 价格
.price{
    font-size: 28px;
    font-weight: bold;
    height: 60px;
    line-height: 60px;
    color: rgb(222,32,76);
}
// 人民币符号
.picon {
  font-size: 18px;
  font-weight: normal;
}
// 促销价
.price .pname,.oldpname {
  font-size: 14px;
  color: gray;
  font-weight: normal;
  letter-spacing: 2px;
}
// 原价人民币符号
.oldpicon {
  font-size: 12px;
}
// 原价价格
.oldprice {
  font-size: 16px;
  color: gray;
  text-decoration: line-through;
  margin-bottom: -9px;
}
// 整个price的div
.allprice {
  margin-left: -20px;
  background-color: rgb(223,236,228);
  padding-top: 10px;
  padding-left: 20px;
  width: 460px;
}
.itemname {
  width: 80px;
  float: left;
  margin-top: 18px;
  letter-spacing: 4px;
}
// 数量
.numname {  
  width: 80px;
  letter-spacing: 4px;
  float: left;
}
// 单位，库存
.danwei,.kucun {
  font-size: 13.5px;
  height: 30px;
  line-height: 30px;
  color: gray;
}
// 库存
.kucun {
  font-size: 13px;
  margin-left: 30px;
}
}
</style>