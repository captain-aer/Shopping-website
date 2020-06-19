<template>
    <div id="myCollect">
        <div id="head">
            <img class="webLogo" src="../logo2-.png">
            <h2>收藏夹</h2>
            <input  value="请输入要搜索的关键词" onfocus="javascript:if(this.value=='请输入要搜索的关键词')this.value='';" type="text" autocomplete="off" id="search" accesskey="s" />
            <div class="seimg_span">
                <img class="search_img" src="/img/iconfonts/search.png" />
            </div>
        </div>
        <div id="collectInfo">
            <div class="orderTop">
                <div>
                    <span>全部宝贝</span>
                </div>  
            </div>
            <div class="xfsear">
                <input  value="请输入要搜索的关键词" onfocus="javascript:if(this.value=='请输入要搜索的关键词')this.value='';" type="text" autocomplete="off" id="xfsearch" accesskey="s" />
                <button class="xfbutton"><i class="iconfont icon-sousuo"></i></button>
            </div>
            <dialog-bar title="我是标题" content="woshineirong"></dialog-bar>
            <div class="collectList">
                <ul>
                    <li class="collectinfoli" v-for="collinfo in collectList" :key="collinfo.name">
                        <a href="">
                            <img class="collectimg" :src="collinfo.img" alt="">                            
                            <i class="iconfont icon-shanchu delicon" @click.prevent="del(collinfo.id)" title="删除宝贝"></i>
                            <p class="collname">{{collinfo.name}}</p>
                            <span class="collprice"><span class="rmb">￥</span>{{collinfo.price}}</span>
                            <span class="colloldprice"><span class="rmb">￥</span>{{collinfo.oldprice}}</span>
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
            collectList:[
                {id:"1",img:"img/imgBanner1/banner1.jpg",name:"商品名称商品名称1",oldprice:"121.35",price:"110.00"},
                {id:"2",img:"img/imgBanner1/banner2.png",name:"商品名称商品名称2",oldprice:"111.35",price:"100.00"},
                {id:"3",img:"img/imgBanner1/banner3.jpg",name:"商品名称商品名称3",oldprice:"131.35",price:"120.00"},
                {id:"4",img:"img/imgBanner1/banner4.png",name:"商品名称商品名称4",oldprice:"141.35",price:"130.00"},
                {id:"5",img:"img/imgBanner1/banner5.jpg",name:"商品名称商品名称5",oldprice:"151.35",price:"140.00"},
                {id:"6",img:"img/imgBanner1/banner1.jpg",name:"商品名称商品名称1",oldprice:"121.35",price:"110.00"},
                {id:"7",img:"img/imgBanner1/banner2.png",name:"商品名称商品名称2",oldprice:"111.35",price:"100.00"},
                {id:"8",img:"img/imgBanner1/banner3.jpg",name:"商品名称商品名称3",oldprice:"131.35",price:"120.00"},
                {id:"9",img:"img/imgBanner1/banner4.png",name:"商品名称商品名称4",oldprice:"141.35",price:"130.00"},
                {id:"10",img:"img/imgBanner1/banner5.jpg",name:"商品名称商品名称5",oldprice:"151.35",price:"140.00"},

                {id:"11",img:"img/imgBanner1/banner1.jpg",name:"商品名称商品名称1",oldprice:"121.35",price:"110.00"},
                {id:"12",img:"img/imgBanner1/banner2.png",name:"商品名称商品名称2",oldprice:"111.35",price:"100.00"},
                {id:"13",img:"img/imgBanner1/banner3.jpg",name:"商品名称商品名称3",oldprice:"131.35",price:"120.00"},
                {id:"14",img:"img/imgBanner1/banner4.png",name:"商品名称商品名称4",oldprice:"141.35",price:"130.00"},
                {id:"15",img:"img/imgBanner1/banner5.jpg",name:"商品名称商品名称5",oldprice:"151.35",price:"140.00"},
                {id:"16",img:"img/imgBanner1/banner1.jpg",name:"商品名称商品名称1",oldprice:"121.35",price:"110.00"},
                {id:"17",img:"img/imgBanner1/banner2.png",name:"商品名称商品名称2",oldprice:"111.35",price:"100.00"},
                {id:"18",img:"img/imgBanner1/banner3.jpg",name:"商品名称商品名称3",oldprice:"131.35",price:"120.00"},
                {id:"19",img:"img/imgBanner1/banner4.png",name:"商品名称商品名称4",oldprice:"141.35",price:"130.00"},
                {id:"20",img:"img/imgBanner1/banner5.jpg",name:"商品名称商品名称5",oldprice:"151.35",price:"140.00"},

                {id:"21",img:"img/imgBanner1/banner1.jpg",name:"商品名称商品名称1",oldprice:"121.35",price:"110.00"},
                {id:"22",img:"img/imgBanner1/banner2.png",name:"商品名称商品名称2",oldprice:"111.35",price:"100.00"},
                {id:"23",img:"img/imgBanner1/banner3.jpg",name:"商品名称商品名称3",oldprice:"131.35",price:"120.00"},
                {id:"24",img:"img/imgBanner1/banner4.png",name:"商品名称商品名称4",oldprice:"141.35",price:"130.00"},
                {id:"25",img:"img/imgBanner1/banner5.jpg",name:"商品名称商品名称5",oldprice:"151.35",price:"140.00"},
                {id:"26",img:"img/imgBanner1/banner1.jpg",name:"商品名称商品名称1",oldprice:"121.35",price:"110.00"},
                {id:"27",img:"img/imgBanner1/banner2.png",name:"商品名称商品名称2",oldprice:"111.35",price:"100.00"},
                {id:"28",img:"img/imgBanner1/banner3.jpg",name:"商品名称商品名称3",oldprice:"131.35",price:"120.00"},
                {id:"29",img:"img/imgBanner1/banner4.png",name:"商品名称商品名称4",oldprice:"141.35",price:"130.00"},
                {id:"30",img:"img/imgBanner1/banner5.jpg",name:"商品名称商品名称5",oldprice:"151.35",price:"140.00"},
            ],
            id:false,
        }
    },
    methods:{
        del:function(id){
            var fdel = window.confirm('确定要删除吗？');
            var index = this.collectList.findIndex(item =>{
                if(item.id == id){
                    return true;
                }else {
                    return false;
                }
            });
            this.collectList.splice(index,1)
        },
    }
}
</script>

<style scoped>
  @import url('../css/myCollection.css');
</style>