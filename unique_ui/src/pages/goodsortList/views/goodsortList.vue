<template>
    <div id="goodsortlist">
        <div id="head">
            <img class="webLogo" src="../logo2-.png">
            <input  value="请输入要搜索的关键词" onfocus="javascript:if(this.value=='请输入要搜索的关键词')this.value='';" type="text" autocomplete="off" id="search" accesskey="s" />
            <div class="seimg_span">
                <img class="search_img" src="/img/iconfonts/search.png" />
            </div>
            <div class="shop_car">
                <img class="img_shop_car" src="/img/iconfonts/gouwuche.png" />
                <a class="shop-car-text" href="#">我的购物车</a>
            </div>
        </div>
        <div class="m_top">
            <div class="allgoods">
                <p>所有宝贝</p>
            </div>
            <div class="allsort">
                <ul class="allsortul">
                    <li class="on">综合排序</li>
                    <li class="show1">
                        <button class="showbtn">销 量</button>
                        <div class="salenum">
                            <button class="numbtn nbtn1">由高到低</button>
                            <button class="numbtn nbtn2">由低到高</button>
                        </div>
                    </li>
                    <li class="show1">
                        <button class="showbtn">价 格 ></button>
                        <div class="prisort">
                            <button class="sortbtn btn1">由高到低</button>
                            <button class="sortbtn btn2">由低到高</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="saleinfo">
            <ul class="saleinfolist">
                <li v-show="index>=(curpage-1)*pagesize && index<curpage*pagesize" v-for="(saleInfo,index) in saleinfoList" :key="saleInfo.salename" class="sainfoli">
                    <a class="salea" :href="saleInfo.salehref">
                        <img :src="saleInfo.saleimg" alt="">
                        <p class="saleprice"><span>¥</span>{{saleInfo.saleprice}}</p>
                        <p class="salename">{{saleInfo.salename}}</p>
                        <p class="sanum">已有<span>{{saleInfo.salenum}}</span>人评价</p>
                        <p class="salstore">{{saleInfo.salestore}}</p>
                        <button class="addbtn addbuy">加入购物车</button>
                        <button class="addbtn addlike">加入收藏夹</button>
                    </a>
                </li>
            </ul>            
            <div>
                <div class="pagination pagination-lg">
                    <div v-for="page in Math.ceil(saleinfoList.length/pagesize)" :key="page">
                        <div v-on:click="PrePage()" id="prepage" v-if="page==1" class="disabled"><a class="numpage"></a></div>
                        <div v-if="page==1" class="active" v-on:click="NumPage(page, $event)"><a>{{page}}</a></div>
                        <div v-else v-on:click="NumPage(page, $event)"><a>{{page}}</a></div>
                        <div id="nextpage" v-on:click="NextPage()" v-if="page==Math.ceil(saleinfoList.length/pagesize)"><a class="numpage">></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import page from '../components/fenyepage.vue'//引用分页
import axios from 'axios'
export default {
    data(){
        return{
            saleinfoList:[
                {salename:"商品名称1",saleprice:"92.00",salenum:"110+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称2",saleprice:"82.00",salenum:"140+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称3",saleprice:"99.00",salenum:"160+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称4",saleprice:"192.00",salenum:"60+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称5",saleprice:"56.00",salenum:"0",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称6",saleprice:"32.00",salenum:"6",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称7",saleprice:"72.00",salenum:"20+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称8",saleprice:"123.00",salenum:"100+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称9",saleprice:"114.00",salenum:"40+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称10",saleprice:"45.00",salenum:"100+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称11",saleprice:"78.00",salenum:"120+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称12",saleprice:"89.00",salenum:"100+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称13",saleprice:"32.00",salenum:"110+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称14",saleprice:"87.00",salenum:"9",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称15",saleprice:"45.00",salenum:"0",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称16",saleprice:"457.00",salenum:"7",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称17",saleprice:"125.00",salenum:"60+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称18",saleprice:"48.00",salenum:"30+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称19",saleprice:"78.00",salenum:"40+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称20",saleprice:"45.00",salenum:"10+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},

                {salename:"商品名称21",saleprice:"92.00",salenum:"200+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称22",saleprice:"82.00",salenum:"120+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称23",saleprice:"99.00",salenum:"110+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称24",saleprice:"192.00",salenum:"100+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称25",saleprice:"56.00",salenum:"20+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称26",saleprice:"32.00",salenum:"30+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称27",saleprice:"72.00",salenum:"130+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称28",saleprice:"123.00",salenum:"140+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称29",saleprice:"114.00",salenum:"50+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称30",saleprice:"45.00",salenum:"70+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称31",saleprice:"78.00",salenum:"60+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称32",saleprice:"89.00",salenum:"10+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称33",saleprice:"32.00",salenum:"0",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称34",saleprice:"87.00",salenum:"20+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称35",saleprice:"45.00",salenum:"40+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称36",saleprice:"457.00",salenum:"7",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称37",saleprice:"125.00",salenum:"40+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称38",saleprice:"48.00",salenum:"9",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称39",saleprice:"78.00",salenum:"20+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称40",saleprice:"45.00",salenum:"50+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},

                {salename:"商品名称41",saleprice:"92.00",salenum:"40+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称42",saleprice:"82.00",salenum:"20+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称43",saleprice:"99.00",salenum:"10+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称44",saleprice:"192.00",salenum:"50+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称45",saleprice:"56.00",salenum:"3",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称46",saleprice:"32.00",salenum:"10+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称47",saleprice:"72.00",salenum:"0",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称48",saleprice:"123.00",salenum:"0",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称49",saleprice:"114.00",salenum:"0",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称50",saleprice:"45.00",salenum:"8",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称51",saleprice:"78.00",salenum:"20+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称52",saleprice:"89.00",salenum:"40+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称53",saleprice:"32.00",salenum:"70+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称54",saleprice:"87.00",salenum:"90+",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称55",saleprice:"45.00",salenum:"0",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称56",saleprice:"457.00",salenum:"6",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner1.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称57",saleprice:"125.00",salenum:"9",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner2.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称58",saleprice:"48.00",salenum:"0",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner3.jpg",salehref:"https://www.baidu.com/"},
                {salename:"商品名称59",saleprice:"78.00",salenum:"0",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner4.png",salehref:"https://www.baidu.com/"},
                {salename:"商品名称60",saleprice:"45.00",salenum:"0",salestore:"店铺名称自营店",saleimg:"/img/imgBanner1/banner5.jpg",salehref:"https://www.baidu.com/"},
                
            ],
                //数据
            pagesize:20,
            curpage: 1, //当前页码
        }
    },
    methods:{
       //上一页方法
    PrePage: function (event) {
        $(".pagination .active").prev().trigger("click");
    },
    //下一页方法
    NextPage: function (event) {
        $(".pagination .active").next().trigger("click");
    },
    //点击页码的方法
    NumPage: function (num, event) {
        if (this.curpage == num) {
            return;
        }
        this.curpage = num;
        $(".pagination li").removeClass("active");
        if (event.target.tagName.toUpperCase() == "LI") {
            $(event.target).addClass("active");
        }
        else {
            $(event.target).parent().addClass("active");
        }
        if (this.curpage == 1) {
            $("#prepage").addClass("disabled");
        }
        else {
            $("#prepage").removeClass("disabled");
        }
        if (this.curpage == Math.ceil(this.saleinfoList.length / this.pagesize)) {
            $("#nextpage").addClass("disabled");
        }
        else {
            $("#nextpage").removeClass("disabled");
        }
    }
    },
    
}
</script>

<style lang="scss" scoped>
  @import url('../css/goodsortList.css');
</style>

