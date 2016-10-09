<template>
    <v-secondary-nav :title="'我的订单'"></v-secondary-nav>
    <v-tab-header :tabs="tabs" :tabchange="onTabChange"></v-tab-header>
    <section id="orderList" style="margin-top: 8rem; margin-bottom: 4rem; height: auto; overflow: hidden;background:#f5f5f5;">
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
                <template v-for="item in myOrderInfo.data">
                    <v-order-item :info="item"></v-order-item>
                </template>

                <!-- 没有订单 -->
                <li style="padding-top:65px;" v-if="myOrderInfo.length == 0">
                    <section>
                        <div class="order_none">
                            <h5>你还没有待付款的订单</h5>
                            <h5>现在就去挑选</h5>
                            <a v-link="{path: '/'}" class="btn">逛逛看</a>
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
            tabs: [{
                index: 0,
                current: true,
                name: '所有',
                link: '/user/order'
            },{
                index: 1,
                name: '待付款',
                link: '/user/order/status/2'
            },{
                index: 2,
                name: '待收货',
                link: '/user/order/status/3'
            }
            ,{
                index: 3,
                name: '待评论',
                link: '/user/order/status/4'
            },{
                index: 4,
                name: '已完成',
                link: '/user/order/status/5'
            },{
                index: 5,
                name: '已作废',
                link: '/user/order/status/6'
            }
            ]
        }
    },
    computed: {
        ...mapGetters(['myOrderInfo'])
    },
    methods: {
        ...mapActions(['getMyOrderInfo'])
    },
    route: {
        data ({to}){
            //无效的状态参数 
            let status = parseInt(to.params.status)
            if( !isNaN(status) && status > 6) {
                route.go('/user/order');
                return
            }

            //确定待显示的订单的类别
            if(!isNaN(status)){
                this.$data.tabs.forEach((item) => item.current = false);
                // console.log(this.$data.tabs, status)
                this.$data.tabs[status].current = true;
                this.$data.status = status;
                this.getMyOrderInfo({status: status});
            } else {
                this.getMyOrderInfo();
            }
            
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