<template>
    <footer id="footer">
        <div class="nav-list">
            <ul id="ul">
                <li v-for="menu in menus" id="{{menu.cls}}" class="{{menu.current ? 'current': ''}}">
                    <a href="{{menu.link}}">
                        <span class="{{menu.cls}}"></span>
                        <i v-if="menu.badge"  class="cart_sales_nums">
                            <div id="goodstotalNum">{{menu.badge}}</div>
                        </i>
                        <p>{{menu.btn}}</p >
                    </a>
                </li>
                <!-- <li id="shoppingcartList">
                    <a href="/#!/cart">
                        <span class="footer-shoppingcart"></span>
                        <i v-if="cartTotal"  class="cart_sales_nums" 
                           style="font-size:14px;font-style: normal;color:white !important;">
                            <div id="goodstotalNum">{{cartTotal}}</div>
                        </i>
                        <p>购物篮</p >
                    </a>
                </li> -->
            </ul>
        </div>
    </footer>
</template>

<script>    
export default {
    name: 'v-footer',
    props: ['menus'],
    data(){
        return {
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