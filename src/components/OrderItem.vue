<template>
    <li class="wd94 m0 pt15">
        <div class="myorder_loop">
            <p>
                <span class="mr5 f12 fb">
                    订单号
                </span>
                <span>
                    <textarea class="f12 fb order_number" onclick="orderDetail(160909095888607)">
                        160909095888607
                    </textarea>
                </span>
                <span class="fr c_b0c2cc f12 bdm_b0c2cc copy_number" onclick="copyOrderNumber(this)">
                    复制单号
                </span>
                <span class="replicated">
                    已复制
                </span>
            </p>
            <hr>
                <div class="hold_pay clearfix" onclick="orderDetail(160909095888607)">
                    <p class="mb5">
                        <span class="mr5 f12 fb">
                            金额
                        </span>
                        <span class="f12 fb">
                            ¥218.00
                        </span>
                        <span class="fr f12 c_e88671">
                            已取消
                        </span>
                    </p>
                    <div class="order_pro_li">
                        <ul>
                            <li>
                                <a href="show_product?product_id=2871&goods_id=2314">
                                    <img src="http://www.yimishiji.com/public/images/db/5e/3f/9abd50ea93468045a387c32cf3e4bbf53015c51b.png"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr>
                    <div class="order_action">
                        <span class="order_time fl c_999 f12">
                            2016-09-09 09:58
                        </span>
                        <span class="fr">
                            <a class="order_btn" href="javascript:;" onclick="buyAgain(160909095888607,'normal')">
                                再次购买
                            </a>
                            <a class="order_btn delet_btn" href="javascript:;" onclick="orderDelete(160909095888607,0)">
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
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>