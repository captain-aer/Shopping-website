<template>
    <div class="numBox">
        <input type="text" v-model="currentValue" @change="handleChange">
        <button @click="handleUp" :disabled="currentValue >= max">+</button>
        <button class="down" @click="handleDown" :disabled="currentValue <= min">-</button>
    </div>
</template>
 
<script>
    export default {
        props:['max','min','value'],
        name: "MyInput",
        data(){
            return {
                currentValue:this.value
            }
        },
        watch:{
            currentValue: function (val) { //currentValue值变动就向父组件传值
                this.$emit('input',val);
                this.$emit('on-change',val);
            },
            value:function (val) { //对值进行验证
                this.updataValue(val);
            }
        },
        mounted(){
            this.updataValue(this.value);
        },
        methods:{
            handleDown: function () {  //加法
                if(this.currentValue <= this.min){
                    return;
                }else{
                    this.currentValue -= 1;
                }
            },
            handleUp: function () { //减法
                if(this.currentValue >= this.max){
                    return;
                }else{
                    this.currentValue += 1;
                }
            },
            updataValue: function (val) {
                if(val > this.max){val = this.max}
                if(val < this.min){val = this.min}
                this.currentValue = val;
 
            },
            handleChange: function (event) {  //对值进行验证
                var val = event.target.value.trim();
                var max = this.max;
                var min = this.min;
                if(this.isNumber(val)){
                    val = Number(val);
                    this.currentValue = val;
                    if(val > max){
                        this.currentValue = max;
                    }else if(val < min){
                        this.currentValue = min;
                    }
                }else{
                    this.currentValue = 0;
                }
            },
            isNumber: function (value) {
                return (/^\-?[0-9]+$/).test(value + '');
            }
        }
    }
</script>
 
<style scoped>
.numBox {
    text-align: center;
    width: 100px;
    margin-left: -27px;
    float: left;
}
input{
    width: 23px;
    height: 30px;
    text-align: center;
    padding: 0 10px;
    border: 1px solid #ccc;
}
button{
    position: absolute;
    border: none;
    color: black;
    background-color: white;
    border: 1px solid #ccc;
    height: 15px;
    width: 15px;
    margin-left: 2px;
}
.down {
    margin-top: 17px;
}
</style>