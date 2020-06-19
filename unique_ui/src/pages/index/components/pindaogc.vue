<template>
    <div id="pindao">
        <div class="title">
            <i class="iconfont icon-ordinaryjiantou1you"></i>
            <span>频道广场</span>
            <i class="iconfont icon-ordinaryjiantou1zuo"></i>
        </div>
        <div class="pindaoGoods">
            <div class="pindaoList">
                <a v-for="square in squareList" :key="square.id" :href="square.href">
                    <p>{{square.title}}</p>
                    <span>{{square.subTitle}}</span><br />
                    <img :src="square.spImg" >
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            squareList:[
                {title:"运动户外",subTitle:"大牌直降",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"数码馆",subTitle:"尽享玩物",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"食品饮料",subTitle:"吃货嘉年华",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"UNI健康",subTitle:"健康才是真的好",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"电脑办公",subTitle:"科技潮物 惠享不停",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"UNI工业品",subTitle:"工业品采购平台",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"企业购",subTitle:"企业采购平台",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"UNI超市",subTitle:"囤生活好物",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"大药房",subTitle:"购正品药 免费换新",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"拍拍二手",subTitle:"大牌1元抢",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"UNI寻宝",subTitle:"懂你的UNI",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"UNI金融",subTitle:"会理财 懂生活",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"中外名酒",subTitle:"享美酒 品人生",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"新机首发",subTitle:"有新机更有范儿",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"玩3C",subTitle:"潮流电子 炫酷来袭",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"UNI直播",subTitle:"UNI直播 边看边买",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"生鲜馆",subTitle:"尝遍天下鲜",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"},
                {title:"家装城",subTitle:"用心装好家",spImg:"/img/brandBuy/brand1.jpg",href:"https://www.baidu.com"}
            ],
        }
    }
}
</script>

<style scoped>
/* 整个频道广场div */
#pindao {
    margin-bottom: 20px;
    height: 990px;
}
/* 频道广场标题 */
.title {
    position: absolute;
    left: 640px;
    height: 50px;
    font-size: 30px;
    font-weight: bold;
}
/* 频道广场标题iconfont */
.title i {
    font-size: 30px;
    padding: 15px;
    color: rgb(77,110,83);
}
/* 频道广场商品div */
.pindaoList {
    margin-top: 20px;
    margin-left: 120px;
    padding-top: 50px;
    width: 1400px;
}
/* 频道广场前两个商品div */
.pindaoList a:first-child,.pindaoList a:nth-child(2) {
    box-sizing: border-box;
    padding-top: 32px;
    height: 370px;
}
/* 频道广场前两个商品title */
.pindaoList a:first-child>p,.pindaoList a:nth-child(2)>p {
    float: none;
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 7px;
}
/* 频道广场前两个商品副标题 */
.pindaoList a:first-child>span,.pindaoList a:nth-child(2)>span {
    float: none;
    font-size: 19px;
    color: gray;
}
/* 频道广场前两个商品图片 */
.pindaoList a:first-child>img,.pindaoList a:nth-child(2)>img {
    padding-top: 20px;
    width: 210px;
    height: 210px;
}
/* 频道广场第一个商品div背景颜色 */
.pindaoList a:first-child {
    background-color: rgb(211,233,224);
    color: rgb(81,138,114);
}
/* 频道广场第二个商品div背景颜色 */
.pindaoList a:nth-child(2) {
    background-color: rgb(218,223,238);
    color: rgb(90,109,167);
}
/* 频道广场商品信息和商品列表 */
.pindaoList a {
    width: 296px;
    height: 180px;
    background-color: white;
    float: left;
    text-align: center;
    margin-top: 10px;
    margin-left: 10px;
}
.pindaoList a>p {
    float: left;
    font-size: 22px;
    color: black;
    font-weight: bold;
    padding-top: 8px;
    padding-left: 30px;
}
.pindaoList a>span {
    float: left;
    font-size: 14px;
    color:#999;
    padding: 15px 12px;
}
.pindaoList a>img {
    width: 260px;
    height: 120px;
}
/* 频道广场商品信息和商品列表鼠标悬停效果 */
.pindaoList a:hover {
    opacity: 0.8;
}
</style>