<template>
    <v-secondary-nav></v-secondary-nav>
    <section class="mt40 mb30" style="margin-top:3.7rem!important">
        <!--余额显示-->
        <div class="accout_show">           
            <div class="account_num">
                <p class="un_recharge f16 dn">您还未充值</p>
                <div class="recharge_num">
                    <p class="f12 fly_left">当前余额（元）</p>
                    <p class="fly_right">0.00</p>
                    <p class="mt5 mb5 revise_btn" style="left: 138px;"><a href="/myChargeCardsAccountPassword" class="revise_psd">
                    设置支付密码
                    </a></p>
                </div>
            </div>     
            <div class="account_tab">
                <ul>
                    <li class=""><a href="javascript:;"><span>充值卡充值</span></a></li>
                    <li class=""><a href="javascript:;"><span>我的充值卡</span></a></li>
                    <li class="on"><a href="javascript:;"><span>余额明细(元)</span></a></li>
                </ul>
            </div>          
        </div>
        <!-- 充值卡充值 -->
        <div class="account_info" style="display: none;">
            <div class="wd88 m0 mt10">
                <p class="recharge_p mb5"><span class="f14 mr10">卡号</span><input type="text" class="" placeholder="输入充值卡卡号" value="" id="cardNo"></p>
                <p class="recharge_p"><span class="f14 mr10">密码</span><input type="text" class="" placeholder="输入充值卡密码" value="" id="cardAuthCode"></p>
                <a href="#" id="recharge_btn" class="sure_btn txtc mt30 c_fff pink_btn">充值</a>
                <a href="/listcard" class="buy_btn txtc mt20 c_1e384b pink_btn">购买充值卡</a>
            </div>
            <!-- 充值成功弹窗 -->
            <div class="recharge_suc_pop dn">
                <div class="pop_bg" style="z-index:136"></div>
                <div class="sendTime_pop txtc">
                    <p><img src="/mine_2.0/img/mycard/piggy_bank.png" class="wd30"></p>
                    <p class="c_81ad94 f15 mt10">充值成功</p>
                    <p class="mb15">请设置支付密码，体验安全支付</p>
                    <p><a href="/myChargeCardsAccountPassword" class="go_reset">去设置</a></p>
                </div>
            </div>
        </div>
        <!-- 我的充值卡 -->
        <div class="account_info dn" style="display: none;">
            <div class="wd90 m0">
                
                
                <!-- 无充值卡 -->
                <div class="no_card txtc">
                    <p class="mt30"><img src="/mine_2.0/img/mycard/gift_card.png" class="wd30"></p>
                    <p class="mt10 f14 mb30">没有充值卡</p>
                    <a href="/listcard" class="pink_btn c_fff f14">去购买</a>
                </div>
                
            </div>

        </div>
        <!-- 余额明细 -->
        <div class="account_info dn" style="display: block;">
            
        </div>
    </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import vSecondaryNav from '../../../../../components/SecondaryNav'
import vTabHeader from '../../../../../components/TabHeader'
export default {
    data () {
        return {
            
        }
    },
    computed: {

    },
    methods: {

    },
    route: {
        data (){

        }
    },
    components: {
        vSecondaryNav,
        vTabHeader
    },
    ready(){}
}
</script>