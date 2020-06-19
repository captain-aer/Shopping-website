<template>
    <div class="the-address">
        <div class="addForm">
            <div class="addTop">
                <p>收货地址</p>
            </div>            
            <p class="newAdd">新增收货地址</p>
            <div class="theaddreform">
                <form class="addressForm" action="" method="get">
                    <div class="dqps">
                        <p>当前配送至 <span>中国</span></p>
                    </div>
                    <div class="addrInfo"><span class="notnull">*</span>地址信息：<v-distpicker class="arechoose" province="广东省" city="广州市" area="海珠区" @selected="onSelected"></v-distpicker></div>
                    <div class="addrInfo"><span class="notnull">*</span>详细地址：<div class="detailAddress"><textarea @click="ondetipsshow" class="detailAddr" rows="2" cols="20" type="text" placeholder="请输入详细地址信息，如道路、门牌号、小区、楼栋号、单元等信息"></textarea></div></div>
                    <p v-show="detailtips" class="deaddTips">详细地址长度需要在5-120个汉字或字符之间，不能包含表情符号</p>
                    <div class="addrInfo" style="margin-left:34px;">邮政编码：<input class="deaddinput" type="text" placeholder="请输入邮政编码"></div>
                    <div class="addrInfo" style="margin-left:8px;"><span class="notnull">*</span>收货人姓名：<input @click="onusertipsshow" class="deaddinput" minlength="2" type="text" maxlength="25" placeholder="长度不超过25个字符"></div>
                    <p v-show="usernametips" class="usnameTips">收货人姓名应为2-25个字符，不能包含表情符号</p>
                    <div class="addrInfo"><span class="notnull">*</span>手机号码：<input class="deaddinput" minlength="2" type="text" maxlength="25" placeholder="电话号码、手机号码必须填一项"></div>
                    <input class="defuinput" type="checkbox" name="defaultadd" ><span class="setdetail">设置为默认地址</span>
                    <input type="submit" value="保存" class="addfinish">
                </form>
            </div>
        </div>
        <div class="adr-tent" id="vue-address">
            <table class="adr-table">
                <thead class="table-thead">
                    <tr>
                        <th rowspan="1" class="thh">
                            <span class="tn">收货人</span>
                        </th>
                        <th rowspan="1" class="thh">
                            <span class="tn">所在地区</span>
                        </th>
                        <th rowspan="1" class="thh">
                            <span class="tn">详细地址</span>
                        </th>
                        <th rowspan="1" class="thh">
                            <span class="tn">邮编</span>
                        </th>
                        <th rowspan="1" class="thh">
                            <span class="tn">电话/手机</span>
                        </th>
                        <th rowspan="1" class="thh">
                            <span class="tn">操作</span>
                        </th>
                        <th rowspan="1" class="thh">
                            <span class="tn">设置</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="table-tbody">
                    <tr class="item" v-for="(v,i) in addressList" :key="v">
                        <td class="tdd">
                            <span class="ti">
                                <p class="tt">{{v.name}}</p>
                            </span>
                        </td>
                        <td class="tdd">
                            <span class="ti">
                                <p class="tt">{{v.address}}</p>
                            </span>
                        </td>
                        <td class="tdd">
                            <span class="ti">
                                <p class="tt">{{v.detailAddress}}</p>
                            </span>
                        </td>
                        <td class="tdd">
                            <span class="ti">
                                <p class="tt">{{v.zipCode}}</p>
                            </span>
                        </td>
                        <td class="tdd">
                            <span class="ti">
                                <p class="tt">{{v.phone}}</p>
                            </span>
                        </td>
                        <td class="tdd">
                            <span class="ti">
                                <div class="handle">
                                    <a href="javascript:;" class="a-chg">修改</a>
                                    <i class="line">|</i>
                                    <a class="i-del">删除</a>
                                </div>
                            </span>
                        </td>
                        <td class="tdd">
                            <span class="ti">
                                <p class="set-def cur" v-if="v.isDefault">默认地址</p>
                                <p class="set-def" v-else @click="setDefault(i)">设为默认</p>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import ElementUI from 'element-ui'
export default {
    data(){
            return{
                addressList: [
                    {name:"等等",address:"广东省广州市番禺区石碁镇",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx"},
                    {name:"等等",address:"广东省广州市番禺区石碁镇",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx"},
                    {name:"等等",address:"广东省广州市番禺区石碁镇",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx"},
                    {name:"等等",address:"广东省广州市番禺区石碁镇",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx"},
                    {name:"等等",address:"广东省广州市番禺区石碁镇",detailAddress:"市莲路南浦村段2号 广东女子职业技术学院",zipCode:"000000",phone:"86-136xxxxxxxx"},
                ], //地址列表
                provinceValue:'',
				cityValue:'',
				areaValue:'',
				provinceData:[],
				cityData:[],
                areaData:[],
                detailtips:false,
                usernametips:false
            }
        },
        created(){
            this.getAddressJson();           
        },
        components:{
            VDistpicker,
            ElementUI
        },
        methods:{
            onSelected(data) {
                this.address.province = data.province.value
                this.address.city = data.city.value
                this.address.county = data.area.value
            },
            //获取地址列表数据
            getAddressJson(){
                let url = 'json/addressTest.json';
                axios.get(url)
                    .then(response =>{
                        this.addressList = response.data.list;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            //设置默认地址
            setDefault(i){
                const addressList = this.addressList;
                addressList.forEach((item, index) => {
                    item.isDefault = index == i;
                });
                addressList.splice(0, 0, ...addressList.splice(i, 1));
            },
            chooseProvince(value){
				this.cityValue = '';
				this.areaValue = '';
				this.cityData = [];
				this.areaData = [];
				this.provinceData.map(e=>{//遍历数据
					if( value == e.name){
						this.cityData = e.cityList;
						return;
					}
				})
            },
            
            ondetipsshow:function(){
                this.detailtips = true;
            },
            onusertipsshow:function(){
                this.usernametips = true;
            }
        }
}
</script>

<style scoped>
/* 整个div */
.the-address {
    width: 1000px;
}
/* 收货地址标题div */
.addTop {
    border-bottom: 3px solid rgb(222,222,222);
    margin-bottom: 18px;
}
/* 收货地址span */
.addTop p {
    width: 100px;
    height: 34px;
    color: rgb(5,78,22);
    font-weight: bold;
    margin-bottom: -3px;
    border-bottom: 3px solid rgb(5,78,22);
    line-height: 32px;
    text-align: center;
}
/* 新增收货地址p */
.newAdd {
    font-size: 14px;
    color: rgb(5,78,22);
    margin-bottom: 15px;
}


/* 整个table */
.adr-table {
    border-collapse: collapse;
}
/* 表格里的小格子 */
.thh,.tdd {
    border: 1px solid rgb(184,216,199);
    border-collapse: collapse;
    padding: 15px;
    text-align: center;
}
/* 表格标题一栏 */
.thh {
    background-color: rgb(241,246,242);
    font-size: 15px;
}
/* 地址信息、 */
.tdd {
    font-size: 13px;
}
.set-def {
    width: 68px;
    font-size: 12px;
    line-height: 22px;
    height: 22px;
}
/* 默认地址 */
.cur {
    background-color: rgb(66,147,132);
    color: white;
    font-weight: bold;
    text-align: center;
    border-radius: 6px;
}
/* 当前配送至div */
.dqps {
    box-sizing: border-box;
    width: 480px;
    height: 34px;
    line-height: 34px;
    background-color: rgb(241,246,242);
    border: 1px solid rgb(184,216,199);
    padding-left: 20px;
}
/* 当前配送至p */
.dqps p {
    font-size: 12px;
    color: gray;
}
/* 当前配送至span */
.dqps p span {
    font-size: 14px;
    color: black;
    margin-left: 8px;
}
/* 每一个信息输入div */
.addrInfo {
    font-size: 14px;
    margin-top: 15px;
    margin-left: 22px;
}
/* *符号 */
.notnull {
    color: rgb(221,17,28);
    margin-right: 5px;
    font-size: 17px;
}
/* 省市区下拉联动框 */
.arechoose {
    display: inline-block;
}
/* 详细地址 */
.detailAddr {
    box-sizing: border-box;
    width: 351px;
    height: 50px;
    border-radius: 3px;
    padding: 8px;
}
.detailAddress {
    display: inline-flex;
}
/* 详细地址提示文字 */
.deaddTips {
    font-size: 12px;
    margin-left: 110px;
    color: rgb(221,17,28);
}
/* 邮政编码input */
.deaddinput {
    box-sizing: border-box;
    width: 351px;
    height: 30px;
    padding: 8px;
    border: 1px solid rgb(169,169,169);
    border-radius: 3px;
    font-size: 13px;
}
/* 收货人姓名提示文字 */
.usnameTips {    
    font-size: 12px;
    margin-left: 110px;
    color: rgb(221,17,28);
}
/* 设置为默认地址input */
.defuinput {
    margin-left: 105px;
    margin-top: 25px;
}
/* 设置为默认地址 */
.setdetail {
    position: absolute;
    margin-top: 25px;
    font-size: 14px;
    margin-left: 5px;
}
/* 保存按钮 */
.addfinish {
    display: block;
    width: 75px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-left: 105px;
    margin-top: 12px;
    margin-bottom: 12px;
    color: white;
    border-radius: 4px;
    background-color: rgb(69,145,106);
    border: 1px solid rgb(69,145,106);
}
/* 保存按钮鼠标悬停效果 */
.addfinish:hover {
    background-color: rgb(61,126,91);
}
/* 设置为默认地址CheckBox */
input[type='checkbox']{
    width: 20px;
    height: 20px;
    background-color: #fff;
    -webkit-appearance:none;
    border: 1px solid #c9c9c9;
    border-radius: 2px;
    outline: none;
}
input[type=checkbox]:checked{
   background: url("/img/iconfonts/checked.png") no-repeat center;
}
</style>