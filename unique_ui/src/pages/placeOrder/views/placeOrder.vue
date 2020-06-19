<template>
    <div id="placeOrder">
        <div id="head">
          <img class="webLogo" src="../logo2-.png">
          <h1>MY UNIQUE</h1>
          <input  value="请输入要搜索的关键词" onfocus="javascript:if(this.value=='请输入要搜索的关键词')this.value='';" type="text" autocomplete="off" id="search" accesskey="s" />
          <div class="seimg_span">
              <img class="search_img" src="/img/iconfonts/search.png" />
          </div>
      </div>
      <div id="placemain">
         <div class="address">
            <p>选择收货地址</p>
            <ul class="addresslist" :class="{active:flag}">               
                <li v-for="addinfo in addressList1" :key="addinfo.id">                 
                  
                    <input class="addrinput" :value="addinfo.alladdr" type="radio" name="address" :id="addinfo.id">
                    <label :for="addinfo.id">
                      <span>{{addinfo.diqu}} {{addinfo.address}} {{addinfo.detailAddress}}</span>
                      <span> （{{addinfo.name}} 收）{{addinfo.phone}}</span>
                    </label>                  
                  <!-- <input v-model="radio" :value="addinfo.alladdr" @click="triger" type="radio" name="address" id="addcheck">
                  <p class="diqu">{{addinfo.diqu}}({{addinfo.name}})收</p>
                  <p class="detaddress">{{addinfo.address}}{{addinfo.detailAddress}}</p> -->
                </li>
            </ul>
            <div class="addressbottom">
              <p class="showaddr" v-if ="addressList1.length > 4" @click = "showTag"><span>{{flag?"显示全部地址":"收起"}}</span></p>
              <a class="newaddr">使用新地址</a>
              <a class="adminaddr" href="personalData.html">管理收货地址</a>
            </div>
         </div>
         <div class="ordlist">
            <h3>确认订单信息</h3>
         </div>
         <table class="ordTable">
           <thead>
             <tr class="ordtheadtr">
               <td>宝贝信息</td>
               <td>商品属性</td>
               <td>单价</td>
               <td>数量</td>
               <td>优惠方式</td>
               <td>小计</td>
             </tr>
           </thead>
           <tbody v-for="orddeInfo in orderList" :key="orddeInfo.ordernumber" class="ordTbody">
             <tr>
               <td class="ordnamep">
                 <img class="ordlimg" :src="orddeInfo.img" alt="">
                 <p>{{orddeInfo.name}}</p>
                 <p class="beizhu">{{orddeInfo.storeRemark}}</p>
               </td>
               <td>
                 <p v-for="guige in orddeInfo.speciinfo" :key="guige.title">{{guige.title}}：{{guige.content}}</p>
               </td>
               <td>
                 <p><span class="rmb">￥</span>{{orddeInfo.oldprice}}</p>
               </td>
               <td>
                 <p>{{orddeInfo.num}}</p>
               </td>
               <td>
                 <p>{{orddeInfo.discount}}</p>
               </td>
               <td>
                 <p class="xiaoji"><span  class="rmb">￥</span>{{orddeInfo.price}}</p>
               </td>
             </tr>
             <tr>
               <td rowspan="2" colspan="2" class="liuyan">
                 <span class="liuyanti">给卖家留言：</span>
                 <textarea type="text" placeholder="选填，请先与商家协商一致" maxlength="200"></textarea>
                 <span class="shul">0/200</span>
               </td>
               <td class="ordyh" colspan="3">
                 <span>店铺优惠：{{orddeInfo.discount}}</span>                 
               </td> 
               <td class="xiaoji xj2">
                  <span>-<span class="rmb">￥</span>{{orddeInfo.oldprice - orddeInfo.price}}</span> 
                </td>             
             </tr>
             <tr>
               <td class="ordyh" colspan="3">
                 <span>配送方式：普通配送</span>                 
               </td>
               <td class="xiaoji xj2">
                 <span><span class="rmb">￥</span>{{orddeInfo.kdpri}}</span>
               </td>
             </tr>
             <tr>
               <td colspan="6" class="ordtotalpri">
                 <span class="ordtotal">店铺合计：<span class="toprice"><span class="rmb">￥</span>{{orddeInfo.price}}</span></span>
               </td>
             </tr>
           </tbody>
         </table>
         <div class="personInfo">
           <p v-for="pri in orderList" :key="pri.ordernumber">实付款：<span class="toprice"><span class="rmb">￥</span>{{pri.price}}</span></p>
           <p><span class="jisong">寄送至</span><span id="personaddr"></span></p>
           <p>收货人：<span id="shouhuo"></span></p>
           <a href="shoppingCart.html"><button class="ordbtn backcart">返回购物车</button></a>
           <button class="ordbtn">提交订单</button>
           
         </div>
         <hr>
      </div>
    </div>
</template>

<script>
import cart from '../../shoppingCart/views/shoppingCart.vue'
export default {
  data(){
    return{
      addressList1: [
          {id:1,name:"等等1",diqu:"广东省广州市",address:"番禺区石碁镇",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx",alladdr:"广东省广州市 番禺区石碁镇 市莲路南浦村段2号 广东女子职业技术学院"},
          {id:2,name:"等等2",diqu:"广东省广州市",address:"天河区",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx",alladdr:"广东省广州市 天河区 市莲路南浦村段2号 广东女子职业技术学院"},
          {id:3,name:"等等3",diqu:"广东省广州市",address:"番禺区石碁镇",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx",alladdr:"广东省广州市 番禺区石碁镇 市莲路南浦村段2号 广东女子职业技术学院"},
          {id:4,name:"等等4",diqu:"广东省广州市",address:"番禺区石碁镇",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx",alladdr:"广东省广州市 番禺区石碁镇 市莲路南浦村段2号 广东女子职业技术学院"},
          {id:5,name:"等等5",diqu:"广东省广州市",address:"番禺区石碁镇",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx",alladdr:"广东省广州市 番禺区石碁镇 市莲路南浦村段2号 广东女子职业技术学院"},
          {id:6,name:"等等6",diqu:"广东省广州市",address:"番禺区石碁镇",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx",alladdr:"广东省广州市 番禺区石碁镇 市莲路南浦村段2号 广东女子职业技术学院"},
          {id:7,name:"等等7",diqu:"广东省广州市",address:"番禺区石碁镇",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx",alladdr:"广东省广州市 番禺区石碁镇 市莲路南浦村段2号 广东女子职业技术学院"},
      ], //地址列表
      orderList:[
          {
            time:"2020-03-13",
            ordernumber:"20200313001",
            img:"/img/imgBanner1/banner1.jpg",
            name:"商品名称商品名称1",
            oldprice:"156.00",
            storeRemark:"发货时间：付款5天内",
            price:"126.00",
            totalprice:"126.00",
            num:1,
            discount:"满150减30",
            orderstate:"买家已付款",
            kdpri:"0.00",
            speciinfo:[
              {title:"颜色分类",content:"蓝色"},
              {title:"尺码",content:"L"}
            ]
          }
        ],
        dicou:true,
        flag:true,
        radio:'',
        payMoney:0,
        checkedValue:'',
        anwser:[]
    }
  },
  methods:{
    showTag(){
      this.flag = !this.flag
    },
    // triger:function(){
      // this.anwser.push(this.radio)
      
    // }
  },
  mounted(){
    $('input:radio:first').attr('checked', 'checked');//默认第一个选中
    var val = $('input:radio:first').val();//默认选中的值
    document.getElementById("personaddr").innerText = val;//赋值给personaddr
    // var name = $('input:radio:first').v-text;
    // document.getElementById("shouhuo").innerText = name;
  }
}
$(function(){
  $(".addrinput").change(function(){
    var value = $('input:radio[name="address"]:checked').val();
    document.getElementById("personaddr").innerText=value;
  })
})
</script>

<style scoped>
  @import url('../css/placeOrder.css');
</style>