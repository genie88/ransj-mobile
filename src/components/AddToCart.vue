<template>
    <div class="pro_foot" style="bottom: 50px;">
        <div class="pro_addcart">
          <a v-link="{path: '/cart'}">
            <span class="footer-shoppingcart"></span>
            <i class="cart_sales_nums" v-if="cart.total>0">
              <div id="goodstotalNum">{{cart.total}}</div>
            </i>
            <p>购物篮</p>
          </a>
        </div>
        <!-- 增减 -->    
        <div class="cart_number ">                
          <span class="decrease" @click="decrease"></span>
          <span class="change_number">
            <input type="text" v-model="qty" class="num_s fb">
          </span>
          <span class="increase" @click="increase"></span>
        </div>
        <a class="add_shopcart" id="shop" @click="addToCart">加入购物车</a>
      </div>
</template>


<script>    
    export default {
        name: 'v-add-to-cart',
        props: ['cart', 'info'],
        data(){
            return {
              qty: '1'
            }
        },
        methods: {
          decrease(){
            this.$data.qty--;
            if (this.$data.qty<1) {
              this.$data.qty = 1;
            }
          },
          increase(){
            this.$data.qty++;
            if (this.$data.qty>info.stock) {
              this.$data.qty = info.stock;
            }
          },
          addToCart(){

          }
        },
        components:{
        }
    }
</script>

<style>
  .cart_sales_nums{
    font-size:14px;font-style: normal;color:white !important;
  }
</style>