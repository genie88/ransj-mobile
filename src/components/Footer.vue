<template>
    <footer id="footer">
        <div class="nav-list">
            <ul id="ul">
                <li id="index" class="current">
                    <a href="/#!/">
                        <span class="footer-index"></span>
                        <p>首页</p >
                    </a>
                </li>
                <li id="footer-callcenter">
                    <a href="/#!/kefu"
                       target="_blank">
                        <span class="footer-callcenter"></span>
                        <p>客服</p >
                    </a>
                </li>
                <li id="footer-activity">
                    <a href="/#!/activity">
                        <span class="footer-activity"></span>
                        <p>优惠</p >
                    </a>
                </li>
                <li id="shoppingcartList">
                    <a href="/#!/cart">
                        <span class="footer-shoppingcart"></span>
                        <i class="cart_sales_nums" style="font-size:14px;font-style: normal;color:white !important;">
                            <div id="goodstotalNum">0</div>
                        </i>
                        <p>购物篮</p >
                    </a>
                </li>
                <li id="personal">
                    <a href="/#!/user/my">
                        <span class="footer-personal"></span>
                        <p>我的</p >
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>    
    export default {
        name: 'v-footer',
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>