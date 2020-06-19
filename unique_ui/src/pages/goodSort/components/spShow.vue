<template>
    <div id="spfenlei">
        <div class="snacks">
            <div class="title">
                <i class="iconfont icon-ordinaryjiantou1you"></i>
                <span>休闲食品</span>
                <i class="iconfont icon-ordinaryjiantou1zuo"></i>
            </div>
            <div class="snacksInfo">
                <ul class="snackslist">
                    <li v-for="snackInfo in snacksList" :key="snackInfo.sname" class="snali">
                        <a class="snacksa" :href="snackInfo.snahref">
                            <img class="snacksimg" :src="snackInfo.snaimg" alt="">
                            <p class="snacksname">{{snackInfo.sname}}</p>
                            <p class="snacksprice">{{snackInfo.snprice}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="snacks">
            <div class="title">
                <i class="iconfont icon-ordinaryjiantou1you"></i>
                <span>饼干蛋糕</span>
                <i class="iconfont icon-ordinaryjiantou1zuo"></i>
            </div>
            <div class="snacksInfo">
                <ul class="snackslist">
                    <li v-for="cakeInfo in cakesList" :key="cakeInfo.sname" class="snali">
                        <a class="snacksa" :href="cakeInfo.snahref">
                            <img class="snacksimg" :src="cakeInfo.snaimg" alt="">
                            <p class="snacksname">{{cakeInfo.sname}}</p>
                            <p class="snacksprice">{{cakeInfo.snprice}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="snacks">
            <div class="title">
                <i class="iconfont icon-ordinaryjiantou1you"></i>
                <span>坚果蜜饯</span>
                <i class="iconfont icon-ordinaryjiantou1zuo"></i>
            </div>
            <div class="snacksInfo">
                <ul class="snackslist">
                    <li v-for="nutsInfo in nutsList" :key="nutsInfo.sname" class="snali">
                        <a class="snacksa" :href="nutsInfo.snahref">
                            <img class="snacksimg" :src="nutsInfo.snaimg" alt="">
                            <p class="snacksname">{{nutsInfo.sname}}</p>
                            <p class="snacksprice">{{nutsInfo.snprice}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="snacks">
            <div class="title">
                <i class="iconfont icon-ordinaryjiantou1you"></i>
                <span>速食冲调</span>
                <i class="iconfont icon-ordinaryjiantou1zuo"></i>
            </div>
            <div class="snacksInfo">
                <ul class="snackslist">
                    <li v-for="instantInfo in instantsList" :key="instantInfo.sname" class="snali">
                        <a class="snacksa" :href="instantInfo.snahref">
                            <img class="snacksimg" :src="instantInfo.snaimg" alt="">
                            <p class="snacksname">{{instantInfo.sname}}</p>
                            <p class="snacksprice">{{instantInfo.snprice}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="snacks">
            <div class="title">
                <i class="iconfont icon-ordinaryjiantou1you"></i>
                <span>茗茶名酒</span>
                <i class="iconfont icon-ordinaryjiantou1zuo"></i>
            </div>
            <div class="snacksInfo">
                <ul class="snackslist">
                    <li v-for="teaInfo in teasList" :key="teaInfo.sname" class="snali">
                        <a class="snacksa" :href="teaInfo.snahref">
                            <img class="snacksimg" :src="teaInfo.snaimg" alt="">
                            <p class="snacksname">{{teaInfo.sname}}</p>
                            <p class="snacksprice">{{teaInfo.snprice}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            snacksList:[
                {sname:"休闲食品",snprice:"满99减20",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称11",snprice:"¥119.00",snaimg:"/img/imgBanner1/banner2.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称12",snprice:"¥139.00",snaimg:"/img/imgBanner1/banner3.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称13",snprice:"¥99.00",snaimg:"/img/imgBanner1/banner4.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称14",snprice:"¥189.00",snaimg:"/img/imgBanner1/banner5.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称15",snprice:"¥123.00",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称16",snprice:"¥142.00",snaimg:"/img/imgBanner1/banner2.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称17",snprice:"¥176.00",snaimg:"/img/imgBanner1/banner3.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称18",snprice:"¥134.00",snaimg:"/img/imgBanner1/banner4.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称19",snprice:"¥178.00",snaimg:"/img/imgBanner1/banner5.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称20",snprice:"¥124.00",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"}
            ],
            cakesList:[
                {sname:"饼干蛋糕",snprice:"满120减30",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称21",snprice:"¥119.00",snaimg:"/img/imgBanner1/banner2.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称22",snprice:"¥139.00",snaimg:"/img/imgBanner1/banner3.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称23",snprice:"¥99.00",snaimg:"/img/imgBanner1/banner4.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称24",snprice:"¥189.00",snaimg:"/img/imgBanner1/banner5.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称25",snprice:"¥123.00",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称26",snprice:"¥142.00",snaimg:"/img/imgBanner1/banner2.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称27",snprice:"¥176.00",snaimg:"/img/imgBanner1/banner3.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称28",snprice:"¥134.00",snaimg:"/img/imgBanner1/banner4.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称29",snprice:"¥178.00",snaimg:"/img/imgBanner1/banner5.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称30",snprice:"¥124.00",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"}
            ],
            nutsList:[
                {sname:"坚果蜜饯",snprice:"满300减100",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称31",snprice:"¥119.00",snaimg:"/img/imgBanner1/banner2.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称32",snprice:"¥139.00",snaimg:"/img/imgBanner1/banner3.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称33",snprice:"¥99.00",snaimg:"/img/imgBanner1/banner4.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称34",snprice:"¥189.00",snaimg:"/img/imgBanner1/banner5.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称35",snprice:"¥123.00",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称36",snprice:"¥142.00",snaimg:"/img/imgBanner1/banner2.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称37",snprice:"¥176.00",snaimg:"/img/imgBanner1/banner3.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称38",snprice:"¥134.00",snaimg:"/img/imgBanner1/banner4.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称39",snprice:"¥178.00",snaimg:"/img/imgBanner1/banner5.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称40",snprice:"¥124.00",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"}
            ],
            instantsList:[
                {sname:"速食冲调",snprice:"满200减80",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称41",snprice:"¥119.00",snaimg:"/img/imgBanner1/banner2.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称42",snprice:"¥139.00",snaimg:"/img/imgBanner1/banner3.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称43",snprice:"¥99.00",snaimg:"/img/imgBanner1/banner4.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称44",snprice:"¥189.00",snaimg:"/img/imgBanner1/banner5.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称45",snprice:"¥123.00",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称46",snprice:"¥142.00",snaimg:"/img/imgBanner1/banner2.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称47",snprice:"¥176.00",snaimg:"/img/imgBanner1/banner3.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称48",snprice:"¥134.00",snaimg:"/img/imgBanner1/banner4.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称49",snprice:"¥178.00",snaimg:"/img/imgBanner1/banner5.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称50",snprice:"¥124.00",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"}
            ],
            teasList:[
                {sname:"茗茶名酒",snprice:"满150减40",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称51",snprice:"¥119.00",snaimg:"/img/imgBanner1/banner2.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称52",snprice:"¥139.00",snaimg:"/img/imgBanner1/banner3.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称53",snprice:"¥99.00",snaimg:"/img/imgBanner1/banner4.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称54",snprice:"¥189.00",snaimg:"/img/imgBanner1/banner5.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称55",snprice:"¥123.00",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称56",snprice:"¥142.00",snaimg:"/img/imgBanner1/banner2.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称57",snprice:"¥176.00",snaimg:"/img/imgBanner1/banner3.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称58",snprice:"¥134.00",snaimg:"/img/imgBanner1/banner4.png",snahref:"https://www.baidu.com/"},
                {sname:"商品名称59",snprice:"¥178.00",snaimg:"/img/imgBanner1/banner5.jpg",snahref:"https://www.baidu.com/"},
                {sname:"商品名称60",snprice:"¥124.00",snaimg:"/img/imgBanner1/banner1.jpg",snahref:"https://www.baidu.com/"}
            ]
        }
    }
}
</script>

<style scoped>
/* 整个div */
#spfenlei {
    width: 1245px;
}
.snacks {
    height: 650px;
}
/* 休闲食品标题 */
.title {
    position: absolute;
    left: 640px;
    height: 50px;
    font-size: 30px;
    font-weight: bold;
}
/* 休闲食品标题iconfont */
.title i {
    font-size: 30px;
    padding: 15px;
    color: rgb(77,110,83);
}

/* 休闲食品ul */
.snackslist {
    width: 1245px;
    height: 250px;
    padding-top: 68px;
    margin-left: 130px;
}
/* 休闲食品ul下的第一个li */
.snackslist li:first-child {
    height: 540px;
    width: 235px;
}
/* 休闲食品ul下第一个li的img */
.snackslist li:first-child>a>img {
    height: 540px;
    width: 230px;
}
/* 休闲食品ul下第一个li的snacksname */
.snackslist li:first-child>a>.snacksname {
    margin-top: -500px;
    color: white;
    font-size: 28px;
    letter-spacing: 2px;
    margin-left: -12px;
}
/* 休闲食品ul下第一个li的snacksprice */
.snackslist li:first-child>a>.snacksprice {
    position: relative;
    padding: 0;
    left: 65px;
    text-align: center;
    margin-top: -455px;
    color: goldenrod;
    font-weight: normal;
    font-size: 17px;
    border-radius: 50px;
    letter-spacing: 2px;
    box-sizing: border-box;
    width: 120px;
    height: 30px;
    line-height: 30px;
    margin-left: -7px;
    background-color: white;
}
/* 休闲食品ul下的所有li */
.snackslist li {
    width: 202px;
    height: 270px;
    float: left;
    background-color: white;
}
/* 休闲食品ul下所有img */
.snacksimg {
    width: 200px;
    height: 205px;
}
/* 休闲食品ul下所有商品名称和商品价格 */
.snacksname,.snacksprice {
    position: absolute;
    color: black;
    padding-left: 72px;
    font-size: 15px;
}
/* 所有商品价格 */
.snacksprice {
    padding-top: 26px;
    padding-left: 80px;
    color: rgb(223,89,0);
    font-weight: bold;
}
/* 鼠标悬停商品图片效果 */
.snacksa:hover>img {
    opacity: 0.8;
}
/* 鼠标悬停商品名称效果 */
.snacksa:hover>.snacksname {
    color: rgb(223,89,0);
}
</style>