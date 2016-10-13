<template>
    <v-secondary-nav :title="'添加评论'">
    </v-secondary-nav>
    <section class="mt40">
        <!-- 我的评价 -->
        <div class="allcomments" style="display: block;">
            <!-- 针对单个商品的评论  -->
            <div class="commentli">
                <div class="wd90 m0">
                    <p class="mt10 mb5 f14 fb c_1e384b">
                        订单详情
                    </p>
                    <p class="mt10 mb5">
                        <span class="f13">
                            订单编号: {{orderDetail.order_no}}
                        </span>
                        <span class="order_time fr f10">
                           {{orderDetail.create_time | formatTime}}
                        </span>
                    </p>
                    <p class="mt5 mb5">
                        收货信息: {{orderDetail.addr}}
                    </p>
                    <p class="mt5 mb5">
                        {{orderDetail.accept_name}} {{orderDetail.mobile}}
                    </p>

                    <p class="mt10 mb5 f14 fb c_1e384b">
                        商品详情
                    </p>

                    <div class="" v-for="good in orderDetail.goods">
                        <p>
                            <a v-link="{path: '/product/' + good.goods_id}" style="height: 60px;line-height: 60px;">
                                <img :src="good.pic" title="{{good.title}}" width="60" height="60" style="border-radius: 20px;max-width: 60px;float:left;">
                                <span class="" style="margin-left: 20px;">{{good.title}}</span>
                                <span class="order_time fr f10 c_1e384b">
                                    ￥{{good.goods_price}} x {{good.goods_nums}}件
                                </span>
                            </a>

                        </p>
                        
                    </div>

                    <!-- <p>
                        <span>评分</span>
                        <span class="average_stars">
                            <span class="avstar redstar" style="width: 100%;">
                            </span>
                        </span>
                    </p> -->

                    <!-- 用户标签 -->
                    <!-- <div class="pro_comment_bar m0 clearfix">
                        <span style="background-color: #1b374b;color: #fff;">标签</span>        
                        <span>配送及时</span>        
                        <span>很好吃</span>  
                    </div> -->

                    <div class="reply_box">
                        <div class="reply_text mb5">
                            <textarea placeholder="请填写评论内容，最多1000字" rows="10" v-model="comment"></textarea>
                        </div>
                        <p>
                            <span class="go_comment">
                                <a class="c_fff f12" @click="onAddComment()">
                                    评论
                                </a>
                            </span>
                        </p>
                    </div>
                    
                </div>
                <hr/>
            </div>

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
            comment: ''
        }
    },
    computed: {
        ...mapGetters(['orderDetail'])
    },
    methods: {
        ...mapActions(['getOrderDetail', 'commentOrder', 'showToast']),
        onAddComment(){
            console.log(this.$data.comment)
            this.commentOrder({
                order_id: this.orderDetail.id,
                comment: this.$data.comment
            }).then((json) => {
                this.showToast({tips: '评论成功'})
            })
        }
    },
    route: {
        data ({to}){
            this.getOrderDetail(to.params.orderId)
        }
    },
    components: {
        vSecondaryNav,
        vTabHeader
    },
    ready(){}
}
</script>
ad
