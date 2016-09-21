<template>
    <v-secondary-nav></v-secondary-nav>
    <v-tab-header></v-tab-header>
    <section id="orderList" style="margin-top: 8rem; height: 200%; overflow: hidden;background:#f5f5f5;">
        <!-- 全部订单 -->
        <div class="scroller">
            <div class="pullDown">
                <div class="loader">
                    <span> </span> <span> </span> <span> </span> <span> </span> 
                </div>
                <div class="pullDownLabel">
                    <!-- 下拉刷新... -->
                </div>
            </div>
            <ul id="items">
                <v-order-item></v-order-item>
                <v-order-item></v-order-item>

                <!-- 没有订单 -->
                <li style="padding-top:65px;">
                    <section>
                        <div class="order_none">
                            <h5>你还没有待付款的订单</h5>
                            <h5>现在就去挑选</h5>
                            <a href="/" class="btn">逛逛看</a>
                        </div>
                    </section>
                </li>
            </ul>
            <div class="pullUp">
                <div class="loader">
                    <span> </span> <span> </span> <span> </span> <span> </span> 
                </div>
                <div class="pullUpLabel">
                    <!-- 上拉加载更多... -->
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import vSecondaryNav from '../../../../../components/SecondaryNav'
import vOrderItem from '../../../../../components/OrderItem'
import vTabHeader from '../../../../../components/TabHeader'
export default {
    data () {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['myOrderInfo'])
    },
    methods: {
        ...mapActions(['getMyOrderInfo'])
    },
    route: {
        data (){
            this.getMyOrderInfo();
        }
    },
    components: {
        vOrderItem,
        vSecondaryNav,
        vTabHeader
    },
    ready(){}
}
</script>