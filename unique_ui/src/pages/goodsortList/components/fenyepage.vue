<template>
    <ul class="pagination">
        <li v-show="current != 1" @click="goto(1)">
            <a href="javascript:void(0)">首页</a>
        </li>
        <li v-show="current != 1" @click="current-- && goto(current)">
            <a href="javascript:void(0)">上一页</a>
        </li>
        <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
            <a href="javascript:void(0)">{{index}}</a>
        </li>
        <li v-show="allpage != current && allpage != 0" @click="current++ && goto(current++)">
            <a href="javascript:void(0)">下一页</a>
        </li>
        <li v-show="allpage != current && allpage != 0" @click="goto(allpage)">
            <a href="javascript:void(0)">尾页</a>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            current:1,//当前页
            showItem:5, //初始化显示的页数
            allpage:0  //总共多少页
        }
    },
    props:['arr'],
    computed:{
        pages(){
            this.allpage = this.arr[0]
            this.item = this.arr[1]
            var pag = [];
            if(this.current < this.showItem){//如果当前的激活的项 小于要显示的条数
                //总页数和要显示的条数哪个大就显示多少条
                var i = Math.min(this.showItem,this.allpage);
                while(i) {
                    pag.unshift(i--);
                }
            }else{//当前页数大于显示页数
                var middle = this.current - Math.floor(this.showItem / 2),//从哪里开始
                    i = this.showItem;
                if(middle > (this.allpage - this.showItem)) {
                    middle = (this.allpage - this.showItem) +1
                }
                while(i--) {
                    pag.push(middle++);
                }
            }
            return pag
        }
    },
    methods:{
        goto:function(index) {
            if(index == this.current) return;
            this.current = index;
            //这里可以发送ajax请求
            this.$emit('getPageList',[this.current,this.item ? this.item : null]);
        }
    }
}
</script>

<style scoped>
.pagination {
    position: relative;
}
.pagination li {
    display: inline-block;
    margin: 0 5px;
}
.pagination li a {
    padding: .5rem 1rem;
    display: inline-block;
    border: 1px solid #ddd;
    background: #fff;
    color: #0E90D2;
}
.pagination li a:hover {
    background: #eee;
}
.pagination li.active a {
    background: #0E90D2;
    color: #fff;
}
</style>