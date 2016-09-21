<template>
    <li class="wd94 m0 pt15">
        <div class="myorder_loop">
            <p>
                <span class="mr5 f12 fb">
                    订单号
                </span>
                <span>
                    {{info.order_no}}
                </span>
                <span class="fr c_b0c2cc f12 bdm_b0c2cc copy_number" @click.prevent="copyOrderNumber(item.order_no)">
                    复制单号
                </span>
                <span class="replicated">
                    已复制
                </span>
            </p>
            <hr>
                <div class="hold_pay clearfix">
                    <p class="mb5">
                        <span class="mr5 f12 fb">
                            金额
                        </span>
                        <span class="f12 fb">
                            ¥{{info.order_amount}}
                        </span>
                        <span class="fr f12 c_e88671" v-if="info.status == 0">
                            未付款
                        </span>
                        <span class="fr f12 c_e88671" v-if="info.status == 1">
                            待收货
                        </span>
                        <span class="fr f12 c_e88671" v-if="info.status == 2">
                            待收货
                        </span>
                        <span class="fr f12 c_e88671" v-if="info.status == 3">
                            已付款
                        </span>
                        <span class="fr f12 c_e88671" v-if="info.status == 4">
                            待收货
                        </span>
                    </p>
                    <div class="order_pro_li">
                        <ul>
                            <li>
                                <a v-link="{path: '/product/'+ info.goods[0].goods_id}">
                                    <img :src="info.goods[0].pic" style="border-radius: 18px;"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr>
                    <div class="order_action">
                        <span class="order_time fl c_999 f12">
                            {{info.create_time | formatTime}}
                        </span>
                        <span class="fr">
                            <a class="order_btn" @click.prevent="buy(info.id)">
                                再次购买
                            </a>
                            <a class="order_btn delet_btn" @click.prevent="delete(info.id)">
                                删除订单
                            </a>
                        </span>
                    </div>
                    <div class="myorder_down_arrow">
                    </div>
                </hr>
            </hr>
        </div>
    </li>
</template>
<script>
    export default {
        name: 'v-order-item',
        props: ['info'],
        data(){
            return {
            }
        },
        computed: {

        },
        components:{
        }
    }
</script>