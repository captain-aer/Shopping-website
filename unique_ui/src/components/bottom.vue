<template>
    <div id="webBottom">
        <div class="dkhs">
            <div class="menudkhs" v-for="menuInfo in dkhsList" :key="menuInfo.iconImg">
                <img :src="menuInfo.iconImg" alt="">
                <span>{{menuInfo.iconTitle}}</span>
            </div>
        </div>
        <div class="details">
            <ul class="deta_ul detail_list1">
                <li v-for="detaInfo1 in detailsList1" :key="detaInfo1.detailTitle">
                    <a :href="detaInfo1.detailHref">{{detaInfo1.detailTitle}}</a>
                </li>
            </ul>
            <ul class="deta_ul detail_list2">
                <li v-for="detaInfo2 in detailsList2" :key="detaInfo2.detailTitle">
                    <a :href="detaInfo2.detailHref">{{detaInfo2.detailTitle}}</a>
                </li>
            </ul>
            <ul class="deta_ul detail_list3">
                <li v-for="detaInfo3 in detailsList3" :key="detaInfo3.detailTitle">
                    <a :href="detaInfo3.detailHref">{{detaInfo3.detailTitle}}</a>
                </li>
            </ul>
            <ul class="deta_ul detail_list4">
                <li v-for="detaInfo4 in detailsList4" :key="detaInfo4.detailTitle">
                    <a :href="detaInfo4.detailHref">{{detaInfo4.detailTitle}}</a>
                </li>
            </ul>
            <ul class="deta_ul detail_list5">
                <li v-for="detaInfo5 in detailsList5" :key="detaInfo5.detailTitle">
                    <a :href="detaInfo5.detailHref">{{detaInfo5.detailTitle}}</a>
                </li>
            </ul>
        </div>
        <div class="lastmenu">
            <ul class="lastinfo">
                <li v-for="lasInfo in lastinfoList" :key="lasInfo.infoname">
                    <a :href="lasInfo.infoHref">{{lasInfo.infoname}}</a>
                </li>
            </ul>
        </div>
        <p class="last_p">Copyright &copy; 2019-2020 绝Unique.com版权所有</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dkhsList:[
                {iconImg:"/img/icons/duo.png",iconTitle:"品类齐全 轻松购物"},
                {iconImg:"/img/icons/kuai.png",iconTitle:"多仓直发 极速配送"},
                {iconImg:"/img/icons/hao.png",iconTitle:"正品行货 精致服务"},
                {iconImg:"/img/icons/sheng.png",iconTitle:"天天低价 畅选无忧"}
            ],
            detailsList1:[
                {detailTitle:"购物指南"},
                {detailTitle:"购物流程",detailHref:"https://www.baidu.com/"},
                {detailTitle:"会员介绍",detailHref:"https://www.iconfont.cn/"},
                {detailTitle:"生活旅行",detailHref:"https://www.baidu.com/"},
                {detailTitle:"常见问题",detailHref:"https://www.iconfont.cn/"},
                {detailTitle:"联系客服",detailHref:"https://www.baidu.com/"}
            ],
            detailsList2:[
                {detailTitle:"配送方式"},
                {detailTitle:"上门自提",detailHref:"https://www.baidu.com/"},
                {detailTitle:"快递配送",detailHref:"https://www.iconfont.cn/"},
                {detailTitle:"配送服务查询",detailHref:"https://www.baidu.com/"},
                {detailTitle:"配送费收取标准",detailHref:"https://www.iconfont.cn/"},
                {detailTitle:"海外派送",detailHref:"https://www.baidu.com/"}
            ],
            detailsList3:[
                {detailTitle:"支付方式"},
                {detailTitle:"货到付款",detailHref:"https://www.baidu.com/"},
                {detailTitle:"在线支付",detailHref:"https://www.iconfont.cn/"},
                {detailTitle:"分期付款",detailHref:"https://www.baidu.com/"},
                {detailTitle:"公司转账",detailHref:"https://www.iconfont.cn/"},
            ],
            detailsList4:[
                {detailTitle:"售后服务"},
                {detailTitle:"售后政策",detailHref:"https://www.baidu.com/"},
                {detailTitle:"价格保护",detailHref:"https://www.iconfont.cn/"},
                {detailTitle:"退款说明",detailHref:"https://www.baidu.com/"},
                {detailTitle:"退换货",detailHref:"https://www.iconfont.cn/"},
                {detailTitle:"取消订单",detailHref:"https://www.baidu.com/"}
            ],
            detailsList5:[
                {detailTitle:"特色服务"},
                {detailTitle:"会员特权",detailHref:"https://www.baidu.com/"},
                {detailTitle:"UNI智能",detailHref:"https://www.iconfont.cn/"},
                {detailTitle:"UNI通信",detailHref:"https://www.baidu.com/"},
            ],
            lastinfoList:[
                {infoname:"关于我们",infoHref:"https://www.baidu.com/"},
                {infoname:"联系我们",infoHref:"https://www.iconfont.cn/"},
                {infoname:"联系客服",infoHref:"https://www.baidu.com/"},
                {infoname:"合作招商",infoHref:"https://www.iconfont.cn/"},
                {infoname:"商家帮助",infoHref:"https://www.baidu.com/"},
                {infoname:"营销中心",infoHref:"https://www.iconfont.cn/"},
                {infoname:"网站社区",infoHref:"https://www.baidu.com/"},
                {infoname:"意见反馈",infoHref:"https://www.iconfont.cn/"},
            ],
        }
    }
}
</script>
<style scoped>
#webBottom {
    position: absolute;
}
/* 多快好省div */
.dkhs {
    box-sizing: border-box;
    width: 1519px;
    position: absolute;    
    padding-left: 220px;
    margin-top: 40px;
    padding-bottom:20px;
    border-bottom: 1px solid rgb(200,202,200);
}
/* 多快好省小div */
.menudkhs {
    float: left;
    width: 280px;
    height: 50px;
    line-height: 50px;
}
/* 多快好省文字标题 */
.menudkhs span {
    position: absolute;
    font-size: 20px;
    margin-left: 5px;
    font-weight: bold;
}
/* 多快好省图片 */
.menudkhs img {
    width: 45px;
    height: 45px;
}
/* 小字列表整个div */
.details {
    padding-top: 140px;
    width: 1200px;
    height: 164px;
    margin-left: 140px;
    border-bottom: 1px solid rgb(200,202,200);
}
/* 小字列表5个div */
.deta_ul {
    float: left;
}
/* 小字列表的li */
.deta_ul li {
    margin-top: 2px;
    margin-left: 50px;
}
/* 小字列表的所有第一个li */
.deta_ul li:first-child {
    padding-bottom: 8px;
}
/* 小字列表的所有第一个li下的a链接 */
.deta_ul li:first-child>a {
    font-size: 14px;
    color: rgb(106,108,106);
    font-weight: bold;
}
/* 小字列表的li下的所有a链接 */
.deta_ul li>a {
    color: rgb(119,121,119);
}
/* 小字列表的li下所有a链接的鼠标悬停效果 */
.deta_ul li>a:hover {
    color: rgb(201,33,24);
}
/* 底部关于我们div */
.lastmenu {
    box-sizing: border-box;
    margin-top: 15px;
    width: 100%;
    height: 35px;
    padding-left: 200px;
}
/* 底部列表 */
.lastinfo li {
    float: left;
    border-right: 1px solid rgb(200,202,200);
    margin-left: 32px;
    padding-right: 32px;
}
/* 底部列表的最后一个li */
.lastinfo li:last-child {
    border: none;
}
/* 底部列表链接 */
.lastinfo li>a {
    color: rgb(106,108,106);
}
/* 底部列表链接鼠标悬停效果 */
.lastinfo li>a:hover {
    color: rgb(201,33,24);
}
/* 版权信息 */
.last_p {
    height: 70px;
    font-size: 13px;
    color: rgb(106,108,106);
    text-align: center;
}
</style>