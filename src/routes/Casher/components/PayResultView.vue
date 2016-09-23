<template>
    <div class="recharge_suc_pop2" v-if="!payResult.error">
        <div class="sendTime_pop txtc" style="top:10%;">
            <p class="f20 fb txtc"><img src="/img/icon/ok.png" alt="" style="margin: 20px auto;width:100px;height:100px;"></p>
            <p class="f20 fb mb40">支付成功</p>
            <p class="c_999 f12 mt5">订单编号：{{payResult.order_no}}</p> 
            <p class="c_999 f12 mt5">订单金额：￥
                <span class="text-danger size-18">{{payResult.amount | currency}}</span>
            </p> 
            <p class="c_999 f12 mt5">支付方式：{{payResult.channel}}</p> 
            <p class="mt20">
                <a v-link="{path: '/user/my'}" class="go_reset wd45 fl">用户中心</a>
                <a v-link="{path: '/'}" class="go_reset wd45 fr">返回首页</a></p>
        </div>
    </div>

    <!-- 支付结果异常，错误的交易号或者交易失败 -->
    <div class="recharge_suc_pop2" v-if="payResult.error">
        <div class="sendTime_pop txtc" style="top:10%;">
            <p class="f20 fb txtc"><img src="/img/icon/error.png" alt="" style="margin: 20px auto;width:200px;height:100px;"></p>
            <p class="f20 fb mb40">支付异常</p>
            <p class="mt20">
                <a v-link="{path: '/user/my'}" class="go_reset wd45 fl">用户中心</a>
                <a v-link="{path: '/'}" class="go_reset wd45 fr">返回首页</a></p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data () {
        return {
        }
    },
    computed: {
        ...mapGetters(['payResult']),
    },
    methods: {
        ...mapActions(['getPayResult'])
    },
    route: {
        data ({to}) {
            // console.log(to.query)
            this.getPayResult(to.query);
        }
    },
    components: {
    },
    ready(){}
}
</script>