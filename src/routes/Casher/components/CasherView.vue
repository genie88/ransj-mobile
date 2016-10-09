<template>
    <v-secondary-nav :btn="''" :title="'确认订单'">
    </v-secondary-nav>
    <!--地址 配送日期-->
    <section class="cart_product_list mt40">
        <div class="wd94 m0">
            <div class="list_style">
                <ul>
                    <li>
                        <!-- 新用户没有地址时，添加收货地址 -->
                        <a v-link="{path: '/user/addr?return_url=/cart'}" class="addDres" 
                            v-if="casherInfo.addrlist.length == 0">
                            <div class="address_info wd95 fl" id="defortinfo">
                            </div>
                        </a>
                        <!-- 已有地址，选择默认地址 -->
                        <a class=" hadAddress" v-for="addr in casherInfo.addrlist">
                            <div class="address_info wd95 fl" id="addressinfo">
                                <p>
                                    {{addr.accept_name}} | {{addr.mobile}}
                                </p>
                                <p>
                                    {{addr.addr}}
                                </p>
                            </div>
                            <span class="fr pre" @click="gotoSelectAddr()">
                                <span class="gourl">
                                </span>
                            </span>
                        </a>
                    </li>
                    <!-- <li class="dn">
                        <a class="open_time" onclick="selectDeliveryTime()">
                            <span class="sendTime mr5" id="showdate">
                                配送时间 09月23日 星期五 | 14:00-21:00
                            </span>
                            <span class="fr pre">
                                <span class="gourl rto45">
                                </span>
                            </span>
                        </a>
                    </li> -->
                </ul>
            </div>
        </div>
    </section>
    <!-- 配送时间弹框 -->
    <div class="open_pop dn">
        <div class="pop_bg">
        </div>
        <div class="sendTime_pop">
            <div class="send_date fl" id="send_date">
                <p class="mb5 f14 fb">
                    日期
                </p>
                <ul id="cdate">
                    <li class="" dd="2016-09-23">
                        <p>
                            09月23日  星期五
                        </p>
                    </li>
                    <li class="on" dd="2016-09-24">
                        <p>
                            09月24日  星期六
                        </p>
                    </li>
                </ul>
            </div>
            <div class="send_date fr" id="send_time">
                <p class="mb5 f14 fb">
                    时间
                </p>
                <ul id="ctime">
                    <li class="on">
                        <p>
                            14:00-21:00
                        </p>
                    </li>
                </ul>
            </div>
            <div class="clear">
            </div>
            <a class="sure_btn txtc mt20 pink_btn c_fff" onclick="selecttime()">
                确定
            </a>
        </div>
    </div>
    <!-- 商品清单 -->
    <section class="cart_product_list">
        <div class="wd94 m0">
            <p class="f14 fb c_1e384b">
                商品清单
            </p>
            <div class="checklist" v-for="good in casherInfo.check_goods">
                <div class="pro_list">
                    <ul class="scroll" id="wrapper" style="overflow: hidden;">
                        <li>
                            <a v-link="{path: '/product/' + good.product_id}">
                                <img :src="good.pic"/>
                            </a>

                        </li>
                        <li style="width: 200px;">{{good.title}}</li>
                        <li style="width: 200px;">￥{{good.unit_price | currency}}</li>
                        <li style="width: 200px;">小计: ￥{{good.price}}</li>
                    </ul>
                </div>
                <a class="list_show" href="/showProductList">
                    <span class="f13 mt10 ml5">
                        共
                        <span class="fb" id="goodnum">
                            {{good.qty}}
                        </span>
                        件
                    </span>
                </a>
            </div>
        </div>
    </section>
    <!--所有优惠券-->
    <section class="cart_product_list dn">
        <div class="wd94 od_coupon">
            <p class="f14 fb c_1e384b pb10" id="goshow">
                优惠券
                <span class="c_afc1cb f10 fn ml5">
                    0 张可用
                </span>
                <span class="godown fr">
                </span>
            </p>
            <div class="list_style list_style3 dn" id="quan">
                <ul>
                    <li>
                        <label>
                            <span class="mr5">
                                <input checked="" class="" id="fitst" name="coupon" type="radio" value=""/>
                            </span>
                            <span class="c_1e384b">
                                <input class="c_1e384b f13 wd100" id="fitstcoupon" placeholder="添加优惠券" style="text-transform:capitalize" type="text"/>
                            </span>
                            <a class="buy_btn yz wd20 fr c_1e384b pink_btn" onclick="usecoupon(1,this)">
                                验证
                            </a>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 积分抵扣 -->
        <div class="wd94 od_coupon">
            <p class="f14 fb c_1e384b pb10">
                积分
                <span class="c_afc1cb f11 fn ml5 opshow">
                    <!--本单可抵扣24.0元-->
                    共有0积分,本次最多抵扣0.00元
                </span>
                <span class="c_1e384b f11 fn ml5 ophide dn">
                    使用
                    <input class="deduction" id="deductionPoint" name="deductionPoint" type="number" value="">
                        积分
                        <span id="btnpointok">
                            确定
                        </span>
                    </input>
                </span>
                <span class="switch fr core">
                    <span class="switch_bar">
                    </span>
                </span>
            </p>
            <p class="deductions dn" id="hintpoint">
            </p>
        </div>
        <div class="wd94 od_coupon">
            <p class="f14 fb c_1e384b pb10">
                余额支付
                <span class="c_afc1cb f11 fn ml5 opshow">
                    余额¥0.0
                </span>
                <span class="c_1e384b f11 fn ml5 ophide dn">
                    使用
                    <input class="deduction" id="deductionAmount" name="deductionAmount" type="number" value="52.64">
                        元
                        <span id="btnbalanceok">
                            确定
                        </span>
                    </input>
                </span>
                <span class="switch fr payshow pre" id="bswitch">
                    <!-- <input type="number" class="keywordput" value=""> -->
                    <span class="switch_bar">
                    </span>
                </span>
            </p>
            <p class="deductions dn" id="hintbalance">
            </p>
        </div>
        <!-- 支付方式 -->
        <div class="wd94 od_coupon pay_way" onclick="chosepayway()">
            <p class="f14 fb c_1e384b pb10">
                支付方式
                <label class="ml5 bdr_line on">
                    <span class="">
                        <input checked="" class="" id="online" name="pay" type="radio" value="online"/>
                    </span>
                    <span class="c_afc1cb f13 fn">
                        线上支付
                    </span>
                </label>
                <label class="ml5">
                    <span class="">
                        <input class="" id="daofu" name="pay" type="radio" value="-1"/>
                    </span>
                    <span class="c_afc1cb f13 fn">
                        货到付款
                    </span>
                </label>
            </p>
        </div>
        <!-- 发票信息 -->
        <div class="wd94 od_coupon">
            <span class="f14 fb c_1e384b pb10 fl">
                发票信息
            </span>
            <div class="pb10 fl invoice" onclick="selectInvoice()">
                <ul>
                    <li class="on none_cupon">
                        <label class="ml5">
                            <span class="">
                                <input checked="" class="" id="wu" name="invoice" type="radio" value="无发票"/>
                            </span>
                            <span class="c_afc1cb f13 fn">
                                无发票
                            </span>
                        </label>
                    </li>
                    <li class="person_cupon">
                        <label class="ml5">
                            <span class="">
                                <input class="" id="person" name="invoice" type="radio" value="个人发票"/>
                            </span>
                            <span class="c_afc1cb f13 fn">
                                个人发票
                            </span>
                        </label>
                    </li>
                    <li class="company_cupon">
                        <label class="ml5">
                            <span class="">
                                <input class="" id="company" name="invoice" type="radio" value="公司发票"/>
                            </span>
                            <span class="c_afc1cb f13 fn">
                                公司发票
                            </span>
                        </label>
                    </li>
                </ul>
                <div class="invoice_show01 ">
                </div>
                <div class="invoice_show02 dn">
                    <p class="top_line">
                        <span class="on_line fl">
                        </span>
                        <span class="on_lineo fl">
                        </span>
                        <span class="on_line fl">
                        </span>
                    </p>
                    <p class="dn txtc mt10">
                        王大锤
                    </p>
                    <p class="mt10 dib wd100">
                        <input class="enter_con" id="geren" placeholder="请输入发票内容" type="text" value=""/>
                    </p>
                    <p class="mt10 dib wd100">
                        <label class="">
                            <span class=" f13 fn c_ee9b84">
                                按照购买的订单商品明细开具发票
                            </span>
                        </label>
                    </p>
                </div>
                <div class="invoice_show03 dn ">
                    <p class="top_line">
                        <span class="on_line fl">
                        </span>
                        <span class="on_line fl">
                        </span>
                        <span class="on_lineo fl">
                        </span>
                    </p>
                    <p class="mt10 dib wd100 company">
                        <input class="enter_con" id="gongsi" placeholder="请输入发票抬头" type="text" value=""/>
                    </p>
                    <p class="mt10 dib wd100 ">
                        <label class="">
                            <span class=" f13 fn c_ee9b84">
                                按照购买的订单商品明细开具发票
                            </span>
                        </label>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!--金额小计-->
    <section class="cart_product_list pb20">
        <div class="wd94 m0">
            <p class="f14 fb c_1e384b">
                订单金额
            </p>
            <div class="amount pb10" id="getmoney">
                <p>
                    <span class="f14 c_1e384b">
                        原价
                    </span>
                    <span class="amount_price fb c_81ad94" id="cost_item">
                        ¥{{casherInfo.real_amount | currency}}
                    </span>
                </p>
                <p>
                    <span class="f14 c_1e384b">
                        优惠
                    </span>
                    <span class="amount_price fb c_ee9b84" id="discount_goods">
                        -¥0.00
                    </span>
                </p>
                <p>
                    <span class="f14 c_1e384b">
                        优惠券
                    </span>
                    <span class="amount_price fb c_ee9b84" id="discount_coupon">
                        -¥0.00
                    </span>
                </p>
                <p>
                    <span class="f14 c_1e384b">
                        运费
                    </span>
                    <span class="amount_price fb c_81ad94" id="cost_freight">
                        ¥{{casherInfo.real_freight | currency}}
                    </span>
                </p>
                <hr>
                    <p class="mt10">
                        <span class="f14 c_1e384b">
                            订单金额
                        </span>
                        <span class="amount_price fb c_81ad94" id="real_amount">
                            ¥{{casherInfo.order_amount | currency}}
                        </span>
                    </p>
                    <p>
                        <span class="f14 c_1e384b">
                            积分抵扣
                        </span>
                        <span class="amount_price fb c_ee9b84" id="pointpayamount">
                            -¥0.00
                        </span>
                    </p>
                    <p>
                        <span class="f14 c_1e384b">
                            余额支付
                        </span>
                        <span class="amount_price fb c_ee9b84" id="balancepayamount">
                            -¥0.00
                        </span>
                    </p>
                    <!-- <p>
                        <span class="f14 c_ccc">
                            可得积分
                        </span>
                        <span class="amount_price c_ccc">
                            24点
                        </span>
                    </p> -->
                </hr>
            </div>
        </div>
        <div class="wd94 m0">
            <p class="f14 fb mb5 c_1e384b">
                订单备注
            </p>
            <p class="pb20">
                <textarea class="note" placeholder="有想叮嘱的事项可在此表述" type="text"></textarea>
            </p>
        </div>
    </section>
    <!-- 金额明细 -->
    <div class="show_detail dn">
        <div class="pop_bg dn" style="display: none;">
        </div>
        <div class="fund_info dn" style="display: none;">
            <p class="f14 fb txtc">
                金额明细
            </p>
            <span class="close">
            </span>
            <hr>
                <div>
                    <p>
                        <span class="f13 c_1e384b fl">
                            商品原价
                        </span>
                        <span class="f13 fb fr c_81ad94" id="cost_item2">
                            ¥24.00
                        </span>
                    </p>
                    <p id="promotionarr">
                        <span class="f13 c_1e384b fl">
                            优惠
                        </span>
                        <span class="f13 fb fr c_ee9b84" id="promotionarr_money">
                            -¥0.00
                        </span>
                    </p>
                    <p id="coupon_description">
                        <span class="f13 c_1e384b fl">
                            优惠券
                        </span>
                        <span class="f13 fb fr c_ee9b84" id="coupon_description_monery">
                            -¥0.00
                        </span>
                    </p>
                    <p id="coupon_description">
                        <span class="f13 c_1e384b fl">
                            运费
                        </span>
                        <span class="f13 fb fr c_81ad94" id="cost_freight2">
                            ¥20.00
                        </span>
                    </p>
                    <hr>
                        <p>
                            <span class="f13 c_1e384b fl">
                                订单金额
                            </span>
                            <span class="f13 fb fr c_81ad94" id="real_amount2">
                                ¥44.00
                            </span>
                        </p>
                        <p>
                            <span class="f13 c_1e384b fl">
                                积分抵扣
                            </span>
                            <span class="f13 fb fr c_ee9b84" id="pointpayamount2">
                                -¥0.00
                            </span>
                        </p>
                        <p>
                            <span class="f13 c_1e384b fl">
                                余额抵扣
                            </span>
                            <span class="f13 fb fr c_ee9b84" id="balancepayamount2">
                                -¥0.00
                            </span>
                        </p>
                        <p>
                            <span class="f13 c_1e384b fl">
                                应付金额
                            </span>
                            <span class="f13 fb fr c_81ad94" id="real_amount3">
                                ¥44.00
                            </span>
                        </p>
                        <p>
                            <span class="f13 c_999 fl">
                                可得积分
                            </span>
                            <span class="f13 fb fr c_999">
                                24点
                            </span>
                        </p>
                    </hr>
                </div>
            </hr>
        </div>
    </div>
    <!--结算编辑-->
    <section class="account_bar">
        <div class="account_con">
            <div class="acount_info">
                <div class="select_all sum_detail">
                    <span class="f14">
                        金额明细
                    </span>
                    <span class="godown rotate180">
                    </span>
                </div>
                <div class="acount_price sum_detail02">
                    <p class="f13 c_1e384b" id="totalnum">
                        共1件商品
                    </p>
                    <p>
                        <span class="f15 c_1e384b">
                            应付
                        </span>
                        <span class="fb f16 c_81ad94" id="paymoney">
                            ¥{{casherInfo.order_amount | currency}}
                        </span>
                    </p>
                </div>
            </div>
            <div class="account_btn">
                <a @click.prevent="submitOrder()">
                    提交订单
                </a>
            </div>
        </div>
    </section>
    <div class="height52">
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vSecondaryNav from '../../../components/SecondaryNav'
export default {
    data () {
        return {
            address: null,
            payment: 1,
            user_remark: '',

        }
    },
    computed: {
        ...mapGetters(['casherInfo', 'lastCheckout']),
    },
    methods: {
        ...mapActions(['createOrder', 'checkout']),
        submitOrder(){
            // let formdata = new FormData();
            // formdata.append('address', this.casherInfo.addrlist[0].id)
            // formdata.append('payment', this.$data.payment);
            // formdata.append('user_remark', this.$data.user_remark);
            // formdata.append('goodslist', this.casherInfo.check_goods);

            let formdata = { 
              address: '32',
              name: '',
              mobile: '',
              addr: '',
              payment: '1',
              user_remark: '',
              goodslist: JSON.stringify(this.casherInfo.check_goods)
            }

            this.createOrder(formdata)
        },
        gotoSelectAddr(){
            router.go('/user/address/sel')
        }
    },
    route: {
        data (){
            //如果有casherInfo
            if(this.casherInfo && this.casherInfo.check_goods) {
                return;
            }
            //如果没有 casherInfo 但是有 lastCheckout信息，重新获取casherInfo
            if(this.lastCheckout) {
                this.checkout(this.lastCheckout)
                return;
            }
            //如果既没有casherInfo也没有lastCheckout 信息，则重定向到购物车页面
            router.go('/cart');
        }
    },
    components: {
        vSecondaryNav
    },
    ready(){}
}
</script>