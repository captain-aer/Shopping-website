<template>
    <div id="loginBottom">        
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
/* 底部关于我们div */
.lastmenu {
    box-sizing: border-box;
    margin-top: 20px;
    height: 35px;
    margin-left: 200px;
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