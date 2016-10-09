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
                            订单已生成
                        </span>
                        <span class="fr f12 c_e88671" v-if="info.status == 1">
                            创建成功
                        </span>
                        <span class="fr f12 c_e88671" v-if="info.status == 2">
                            等待付款
                        </span>
                        <span class="fr f12 c_e88671" v-if="info.status == 3 && info.delivery_status == 0">
                            等待发货
                        </span>
                        <span class="fr f12 c_e88671" v-if="info.status == 3 && info.delivery_status == 1">
                            等待收货
                        </span>
                        <span class="fr f12 c_e88671" v-if="info.status == 4">
                            去评论
                        </span>
                        <span class="fr f12 c_e88671" v-if="info.status == 6">
                            已作废
                        </span>
                        <p class="c_b0c2cc fr">{{info.channel}}</p>
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
                            <a class="order_btn pay_btn" v-if="info.status == 2" v-link="{path: '/casher/pay/order/'+ info.id}">
                                立即付款
                            </a>
                            <a class="order_btn remind_btn" v-if="info.status == 3 && info.delivery_status == 0" @click.prevent="remindSend(info.id)">
                                提醒发货
                            </a>
                            <a class="order_btn confirm_btn" v-if="info.status == 3 && info.delivery_status == 1" @click.prevent="confirmReceipt(info.id)">
                                确认收货
                            </a>
                            <a class="order_btn comment_btn" v-if="info.status == 4" v-link="{path: '/order/'+ info.id + '/comment'}">
                                去评论
                            </a>
                            <a class="order_btn comment_btn" v-if="info.status == 5" @click.prevent="buyAagin(info.id)">
                                再次购买
                            </a>
                            <a class="order_btn" v-if="info.status == 6">
                                已作废
                            </a>
                            <a class="order_btn delet_btn" @click.prevent="confirmDeleteOrder(info.id)">
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
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'v-order-item',
    props: ['info'],
    data(){
        return {
        }
    },
    methods: {
        //确认删除订单
        confirmDeleteOrder(orderId){
            this.showConfirmDialog({
              title: '确认删除订单? 删除后将无法恢复' ,
              onConfirm: ()=>{
                this.deleteOrder(orderId)
              }
            })
        },

        ...mapActions(['confirmReceipt', 'deleteOrder', 'showConfirmDialog'])
    },
    computed: {

    },
    components:{
    }
}
</script>


<style>
    .pay_btn{
       background: #ee9b84; 
       color: #fff;
       border: 1px solid #ee9b84;
    }
    .remind_btn, .confirm_btn ,.comment_btn{
        background: #81ad94;
        color: #fff;
        border: 1px solid #81ad94;
    }
</style>