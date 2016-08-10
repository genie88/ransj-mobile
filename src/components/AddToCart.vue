<template>
    <div class="pro_foot" style="bottom: 50px;">
        <div class="pro_addcart">
          <a href="/shopping_car_2.0/new_cart.jsp">
            <span class="footer-shoppingcart"></span>
            <i class="cart_sales_nums" style="font-size:14px;font-style: normal;color:white !important;"><div id="goodstotalNum">0</div></i>
            <p>购物篮</p>
          </a>
        </div>
        <!-- 增减 -->    
        <div class="cart_number ">                
          <span class="decrease"></span>
          <span class="change_number">
            <input type="text" value="1" id="goods_03" class="num_s fb">
          </span>
          <span class="increase"></span>
        </div>
        <a href="javascript:;" class="add_shopcart" id="shop">加入购物车</a>
      </div>
</template>

<script>    
    export default {
        name: 'v-add-to-cart',
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>