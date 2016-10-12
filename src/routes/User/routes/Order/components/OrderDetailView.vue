<template>
    <v-secondary-nav :title="'我的订单'"></v-secondary-nav>
    

    <section class="cart_product_list mt40">
        <div class="wd94 m0 suc_order_info">
            <span class="fb">订单号 </span>
            <span class="order_numb">
                <textarea id="sporderid" class="sporderid" readonly="">{{orderDetail.order_no}}</textarea>
            </span>
            <span onclick="copyUrl2()" class="txdun c_b0c2cc">复制</span>
            <span class="replicated">已复制</span>
            <span class="fr mt5 c_ee9b84 f12">已取消</span>
        </div>
        <hr>
        <div class="wd90 m0">
            <!-- 订单物流 -->
            


            <div class="stream pb10">
                <div class="stream_title">
                    <span class="wuliu fl"><img src="/img/user_icon/address.png"></span>
                    <div class="stream_newinfo wd90 fl">
                        <p class="mb5">{{orderDetail.accept_name}} | <a class="dbl">{{orderDetail.mobile}}</a></p>
                        <p class="mb5">{{orderDetail.addr}}</p>
                        <p class="mb5">{{orderDetail.create_time | formatTime}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="cart_product_list no-bottom">
        <div class="order_s_content wd94 lpk_list_new pre ">
            <div class="order_s_box">
                <p><span class="fb">商品清单</span></p>
                <hr>
                
                    <div class="cart_pro_con" v-for="good in orderDetail.goods">
                        <div class="cart_product_pic wd20">
                            <img :src="good.pic">
                        </div>
                        <div class="cart_product_info wd75">
                            <p class="mt5">
                                <a v-link="{path: '/product'+ good.goods_id}" class="c_1e384b f14">{{good.title}}</a>
                            </p>
                            <div class="cart_price_in">
                                <span class="f12 c_1e384b">×{{good.goods_nums}}</span>
                                <span class="c_81ad94 f16 fr">¥{{good.sum}}</span>
                            </div>
                        </div>
                    </div>
                
                
            </div>
            <!-- 订单金额 -->
            <hr>
            <div class="wd100 mt20 mb20">
                <p class="clearfix"><span class="fb">订单金额</span></p>
                <div class="amount pb10">
                    <p>
                        <span class="f14 c_1e384b">原价</span>
                        <span class="amount_price fb c_81ad94">¥{{orderDetail.real_amount}}</span>
                    </p>
                    <p>
                        <span class="f14 c_1e384b">优惠</span>
                        <span class="amount_price fb c_ee9b84">-¥0.00</span>
                    </p>
                    <p>
                        <span class="f14 c_1e384b">优惠券</span>
                        <span class="amount_price fb c_ee9b84">-¥0.00</span>
                    </p>
                    <p>
                        <span class="f14 c_1e384b">运费</span>
                        <span class="amount_price fb c_81ad94">¥{{orderDetail.real_freight}}</span>
                    </p>
                    <hr>
                    <p class="mt10">
                        <span class="f14 c_1e384b">订单金额</span>
                        <span class="amount_price fb c_81ad94">¥{{orderDetail.order_amount}}</span>
                    </p>
                    <p><span class="f14 c_1e384b">积分抵扣</span><span class="amount_price fb c_ee9b84">-¥0.00</span></p>
                    <p><span class="f14 c_1e384b">余额支付</span><span class="amount_price fb c_ee9b84">-¥0.00</span></p>
                    <p><span class="f14 c_1e384b">可得积分</span><span class="amount_price c_1e384b fb">{{orderDetail.point}}</span></p>
                </div>
            </div>
            <hr>
            <!-- 支付方式 -->
            <div class="lh20 mb40">
                <p>
                    <span>支付方式</span>
                    <span class="c_999 ml5">{{orderDetail.payment}}</span>
                </p>
                <p>
                    <span>发票信息</span>
                    <span class="c_999 ml5">不需发票</span>
                </p>
                <p>
                    <span>订单备注</span>
                    <span class="c_999 ml5">{{orderDetail.user_remark || '无备注'}}</span>
                </p>
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
        ...mapGetters(['orderDetail'])
    },
    methods: {
        ...mapActions(['getOrderDetail'])
    },
    route: {
        data ({to}){
            this.getOrderDetail(to.params.orderId)
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