<template>
    <v-secondary-nav :title="'我的卡券'"></v-secondary-nav>
    <v-tab-header></v-tab-header>
    <div class="meb_ticket_cont"><ul class="coupon_bg"><li class="ticket_list"><a href="#"><div class="pepper_l_tit f16">新用户20元礼包</div><div class="pepper_l_time f12  c_afc1cb fb">2016-07-15 至 2016-09-15</div><div class="pepper_l_tips f12 mt5">截至于<span class="c_ee9b84">6</span>天之前</div></a><span class="ygq_icon"></span></li></ul><ul class="coupon_bg"><li class="ticket_list"><a href="#"><div class="pepper_l_tit f16">新用户200减40元礼包</div><div class="pepper_l_time f12  c_afc1cb fb">2016-07-15 至 2016-09-15</div><div class="pepper_l_tips f12 mt5">截至于<span class="c_ee9b84">6</span>天之前</div></a><span class="ygq_icon"></span></li></ul><ul class="coupon_bg"><li class="ticket_list"><a href="#"><div class="pepper_l_tit f16">新用户满300减80礼包</div><div class="pepper_l_time f12  c_afc1cb fb">2016-07-15 至 2016-09-15</div><div class="pepper_l_tips f12 mt5">截至于<span class="c_ee9b84">6</span>天之前</div></a><span class="ygq_icon"></span></li></ul><ul class="coupon_bg"><li class="ticket_list"><a href="#"><div class="pepper_l_tit f16">新用户蔬菜满100减30礼包</div><div class="pepper_l_time f12  c_afc1cb fb">2016-07-15 至 2016-09-15</div><div class="pepper_l_tips f12 mt5">截至于<span class="c_ee9b84">6</span>天之前</div></a><span class="ygq_icon"></span></li></ul><ul class="coupon_bg"><li class="ticket_list"><a href="#"><div class="pepper_l_tit f16">新用户水中鲜物满100减30礼包</div><div class="pepper_l_time f12  c_afc1cb fb">2016-07-15 至 2016-09-15</div><div class="pepper_l_tips f12 mt5">截至于<span class="c_ee9b84">6</span>天之前</div></a><span class="ygq_icon"></span></li></ul></div>
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