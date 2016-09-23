<template>
    <v-secondary-nav :btn="''" :title="'收银台'">
    </v-secondary-nav>

    <div class="bdm8 mt50 pt10 pb10">
        <p class="wd90 m10 f14">
            <span>订单号</span>
            <span class="fr fb">{{paymentInfo.order.order_no}}</span>
        </p>
        <p class="wd90 m10 f14">
            <span>应付金额</span>
            <span class="fr fb">¥{{paymentInfo.order.order_amount | currency}}</span>
        </p>
    </div>

    <!-- 支付方式选择 -->
    <div class="order_s_content wd88">
        <ul class="payment_style" id="getpayway">
            <li v-for="pay in paymentInfo.paylist" @click.prevent="submitPay(pay.id)">
                <span class="icon"> <img :src="'http://ransj.com/' + pay.logo" alt="pay.title"/></span>
                <span class="channel">{{pay.title}}</span>
                <span class="arr_right"></span>
            </li>
        </ul>
    </div>


    <!-- 返回离开弹窗 -->
    <div class="recharge_suc_pop dn">
        <div class="pop_bg" style="z-index:136"></div>
        <div class="sendTime_pop txtc">
            <p class="f14 fb mt20">确定离开收银台？</p>
            <p class="c_999 f12 mt5">请在30分钟内付款，超时自动取消订单</p>         
            <p class="mt20"><a href="/show_home" class="go_reset wd45 fl">确定离开</a><a href="javascript:gotopay();" class="go_reset gopay wd45 fr">继续支付</a></p>
        </div>
    </div>

    <!--支付出现无法支付的时候 弹出此框-->
    <div class="recharge_suc_pop2 dn">
        <div class="pop_bg" style="z-index:136"></div>
        <div class="sendTime_pop txtc">
            <p class="f14 fb mt20">so sorry!发生小错误，无法买单</p>
            <p class="c_999 f12 mt5">联系客服小然，她会帮你搞定</p> 
            <p class="mt20"><a href="http://a1.7x24cc.com/phone_webChat.html?accountId=N000000007766&amp;chatId=ymsj-cbdeeb20-473d-11e6-b3d4-3b1daf700b9d" class="go_reset wd45 fl">联系在线客服</a><a href="tel:400-655-1212" class="go_reset wd45 fr">拨打客服电话</a></p>
        </div>
    </div>

    <div class="recharge_suc_pop3 dn">
        <div class="pop_bg" style="z-index:136"></div>
        <div class="sendTime_pop txtc">
            <p class="f14 fb mt20">so sorry!发生小错误，无法买单</p>
            <p class="c_999 f12 mt5">再下单零农残食物，抱歉让你经历了麻烦</p> 
            <p class="mt20"><a href="/show_home" class="go_reset wd45 fl">返回首页</a><a href="javascript:buyAgain(orderid,'normal');" class="go_reset wd45 fr">重新下单</a></p>
        </div>
    </div>
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vSecondaryNav from '../../../components/SecondaryNav'
export default {
    data () {
        return {
            order_id: null
        }
    },
    computed: {
        ...mapGetters(['paymentInfo']),
    },
    methods: {
        ...mapActions(['payment', 'getPaymentInfo']),
        submitPay(payment){
            if(!this.$data.order_id) {
                alert('order_id不能为空');
                return;
            }
            if(!this.payment) {
                alert('请选择支付方式');
                return;
            }
            this.payment({
                order_id: this.$data.order_id,
                payment: payment
            });
        }
    },
    route: {
        data ({to}) {
            if(isNaN(to.params.id)){
              router.go('/home');
              return;
            } else {
              this.$data.order_id = to.params.id;
              this.getPaymentInfo(this.$data.order_id);
            }
        }
    },
    components: {
        vSecondaryNav
    },
    ready(){}
}
</script>

<style>
    .payment_style li span{
        margin-right: 20px;
        margin-top: -10px;
        height: 32px;
        width: 32px;
    }
    .payment_style li .channel{
        width: 200px;
    }
    .payment_style li .icon{
        margin-left: 30px; 
    }
    .payment_style li .icon img{
        margin-top: 12px;
    }
</style>