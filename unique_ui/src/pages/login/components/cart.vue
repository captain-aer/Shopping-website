<template>
    <div id="all">
        <h3>Cart</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>(Stand)Price(USD)</th>
                    <th>Sub-total(USD)</th>
                </tr>
            </thead>
            <tbody>
                <tr class="bod" v-for="info in list" :key="info.id">
                    <td>{{info.name}}</td>
                    <td>
                        <button class="numbtn" @click="reduceCount(index)" >-</button>
                        <input class="itemcount" type="text" :value="info.qty">
                        <button class="numbtn" @click="addCount(index)">+</button>
                    </td>
                    <td>{{info.price}}</td>
                    <td>{{info.qty*info.price}}</td>
                </tr>
                <tr>                    
                    <td colspan="3" class="total">Total</td>
                    <td>USD {{totalPrice}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                { id: 1, name: "Chicken Wing", category: "Food", qty: 3, price: 10 },
                { id: 2, name: "Pizza", category: "Food", qty: 1, price: 50 },
                { id: 3, name: "Hamburger", category: "Food", qty: 1, price: 12 },
                { id: 4, name: "Coca Cola", category: "Drink", qty: 2, price: 5 },
                { id: 5, name: "Orange Juice", category: "Drink", qty: 1, price: 15 },
                { id: 6, name: "Potato Chips", category: "Snack", qty: 1, price: 8 },
            ]
        }
    },
    
  computed:{
    /**
     * 总价
     * @returns {string}
     */
    totalPrice: function () {
        var total = 0;
        for (var i = 0; i < this.list.length; i++) {
            var item = this.list[i];
            total += item.price * item.qty;
        }
        return total.toLocaleString();
    },    
  },
    methods: {
    /**
     * 减少购买数量
     * @param index
     */
    reduceCount: function (index) {
        if (this.list[index].qty === 1) return;
        this.list[index].qty--;
    },
    /**
     * 增加购买数量
     * @param index
     */
    addCount: function (index) {
        this.list[index].qty++;
    },
  }
}
</script>

<style scoped>
    table {
        border-collapse: collapse;
        width: 600px;
    }
    td:first-child,th:first-child {
        text-align: left;
    }
    td,th {
        border: 1px solid black;
        text-align: right;
        padding: 6px;
    }
    .bod:nth-child(odd) {
        background-color: lightgray;
    }
    .total {
        text-align: right !important;
    }
    .numbtn {
        height: 24px;
        width: 17px;
        border: 1px solid #e5e5e5;
        background: #f0f0f0;
        text-align: center;
        line-height: 24px;
        color: #444;
    }
    .numbtn:hover {
        border: 1px solid #f40;
        color: #f40;
    }    
.itemcount {
    box-sizing: border-box;
    width: 39px;
    height: 24px;
    line-height: 24px;
    border: 1px solid #aaa;
    color: #343434;
    text-align: center;
    padding: 4px 0;
    background-color: #fff;
    left: 18px;
}
</style>