<template>
    <footer id="footer">
        <div class="nav-list">
            <ul id="ul">
                <li v-for="menu in menus" id="{{menu.cls}}" class="{{menu.current ? 'current': ''}}">
                    <a href="{{menu.link}}">
                        <span class="{{menu.cls}}"></span>
                        <i v-if="menu.badge && carts.num"  class="cart_sales_nums">
                            <div id="goodstotalNum">{{carts.num}}</div>
                        </i>
                        <p>{{menu.btn}}</p >
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>    
export default {
    name: 'v-footer',
    props: ['menus', 'carts'],
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