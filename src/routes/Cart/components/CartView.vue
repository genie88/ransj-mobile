<template>
    <v-secondary-nav :title="'购物篮'" :btn="''"></v-secondary-nav>
    <template v-if="cartItems && cartItems.data && cartItems.data.length > 0">
        <!-- 购物车列表 -->
        <section class="cart_product_list mt40">
            <!--产品列表-->
            <form action="" id="cart-form" method="post">
                <!--列表循环-->
                <div id="cartGoods">
                    <div class="cart_pro_li cart-pro" v-for="info in cartItems.data">
                        <div class="wd94 m0">
                            <div class="cart_pro_con box boxpack-center">
                                <div class="choose_one">
                                    <input checked="" :value="info.product_id" v-model="selected"
                                        type="checkbox" number/>
                                </div>
                                <div class="cart_product_pic">
                                    <img v-link="{path: '/product/'+ info.product_id}" :src="info.pic" 
                                    style="border-radius:20px;width: 60px;height: 60px;"/>
                                </div>
                                <div class="cart_product_info">
                                    <div class="product_name">
                                        <a class="c_1e384b f15" v-link="{path: '/product/'+ info.product_id}">
                                            {{info.title}}
                                        </a>
                                    </div>
                                    <div class="cart_price_in">
                                        <div class="cart_price">
                                            <p class="c_ccc f14 txdth">
                                                <!-- ¥{{info.unit_price | currency}} -->
                                            </p>
                                            <p class="c_81ad94 f18">
                                                ¥{{info.unit_price | currency 1}}
                                            </p>
                                        </div>
                                        <div class="cart_number">
                                            <span class="decrease" @click.prevent="decrease(info.product_id)">
                                            </span>
                                            <span class="change_number">
                                                <input class="num_s" readonly="" type="text" value="{{info.qty}}">
                                                </input>
                                            </span>
                                            <span class="increase" @click.prevent="increase(info.product_id)">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="stock_tip dn">
                                        <span class="c_fff f12">
                                            库存不足
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <!-- 优惠信息 -->
                            <div class="cart_gift_box dn">
                                <div class="cart_pro_gift">
                                    <p>
                                        9折特惠
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>

        <!-- 所有优惠 -->
        <section class="cart_product_list">
            <div class="wd94 m0">
                <p class="f14 fb c_1e384b">
                    所有优惠
                </p>
                <div class="list_style">
                    <ul id="_order_promotion">
                        <li>
                            <span class="c_9b9b9b f12">
                                满300元减20
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 所有优惠券 -->
        <!-- <section class="cart_product_list"> 
            <div class="wd94 m0">   
                <p class="f14 fb c_1e384b pb10" id="goshow">您有优惠券0张</p>         
                <div class="list_style list_style2 dn" id="quan">

                </div>                  
            </div>
        </section> -->


        <!-- 金额小计 -->
        <section class="cart_product_list">
            <div class="wd94 m0">
                <p class="f14 fb c_1e384b">
                    金额小计
                </p>
                <div class="amount pb10">
                    <p>
                        <span class="f14 c_1e384b">
                            诚食价
                        </span>
                        <span class="amount_price fb c_81ad94" id="goodscost">
                            ¥{{total | currency}}
                        </span>
                    </p>
                    <!-- <p class="">
                        <span class="f14 c_1e384b" id="pmt_order_label">
                            运费
                        </span>
                        <span class="amount_price fb c_81ad94" id="pmt_order">
                            ¥0.00
                        </span>
                    </p> -->
                    <p class="">
                        <span class="f14 c_1e384b" id="pmt_order_label">
                            优惠
                        </span>
                        <span class="amount_price fb c_ee9b84" id="pmt_order">
                            -¥ {{discount | currency}}
                        </span>
                    </p>
                    <hr>
                        <p class="mt10">
                            <span class="f14 c_1e384b">
                                小计<!-- (不含运费) -->
                            </span>
                            <span class="amount_price fb c_81ad94" id="total_goods_price">
                                ¥{{totalAfterDiscount | currency}}
                            </span>
                        </p>
                        <p>
                            <span class="f14 c_ccc">
                                可得积分
                            </span>
                            <span class="amount_price c_ccc" id="total_goods_points">
                                {{Math.floor(total)}}
                            </span>
                        </p>
                    </hr>
                </div>
            </div>
        </section>

        <!-- 结算编辑 -->
        <section class="account_bar">   
            <div class="account_con">
                <div class="acount_info">
                    <div class="select_all">
                        <label>
                            <input type="checkbox" v-model="selectAll"/>
                            <span class="c_1e384b f14">全选</span>
                        </label>
                    </div>
                    <div class="acount_price">
                        <p class="f13 c_1e384b" id="subtotal_goods_amount">
                            共{{cartItems.num}}件商品
                        </p>
                        <p>
                            <span class="f15 c_1e384b">小计&nbsp;</span>
                            <span class="fb f16 c_81ad94" id="final_price">
                                ¥{{totalAfterDiscount | currency}}
                            </span> 
                        </p>
                    </div>
                </div>
                <div class="account_btn">
                    <a @click.prevent="gotoCasher()">去结算</a>
                </div>
            </div>
            <div class="account_edit dn" v-show="editMode">
                <div class="select_all edit_check">
                    <label>
                        <input type="checkbox" id="selAll" value="" 
                            name="checkAllBox" checked="checked"/>
                        <span class="c_1e384b f14">全选</span>
                    </label>
                </div>
                <div class="edit_btn">
                    <a class="move_love" @click.prevent="addToLike()">添加至喜欢的</a>
                    <a class="del" @click.prevent="removeCartItem()">删除</a>
                </div>
            </div>
        </section>
    </template>

    <!-- 空购物车 -->
    <template v-if="!cartItems || !cartItems.data || cartItems.data.length == 0">
        <div class="height45">
        </div>
        <section class="cart_product_list mt40">
            <!--购物篮空空的-->
            <div class="wd80 m0 txtc cart_none">
                <p>
                    <img src="../../../static/img/icon/nothing.png" style="margin: 0 auto;"/>
                </p>
                <p class="f14 mb30">
                    购物篮中空空的喔
                </p>
                <a class="pink_btn c_fff mb30 db" href="/">
                    去逛逛，不要忘记带上食欲
                </a>
            </div>
        </section>
    </template>


    <!-- 本地浏览记录 -->
    <section class="" style="margin-bottom:6rem">
        <div class="wd94 m0">
            <p class="f14 fb c_1e384b">
                浏览记录
            </p>
            <div class="floor-con">
                <div class="floor">
                    <v-good-slider></v-good-slider>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import vSecondaryNav from '../../../components/SecondaryNav'
import vGoodSlider from '../../../components/GoodSlider'
export default {
    data () {
        return {
            editMode: false,
            selected: []
        }
    },
    computed: {
        ...mapGetters(['cartItems']),

        //全选状态
        selectAll: {
            get: function () {
                if(!this.cartItems || !this.cartItems.data) return true;
                return this.cartItems.data.length == this.$data.selected.length;
            },
            set: function (value) {
                var selected = [];
                if (value) {
                    this.cartItems.data.forEach(function (item) {
                        selected.push(item.product_id);
                    });
                }
                this.$data.selected = selected;
            }
        },

        //优惠金额
        discount() {
            //满300减20
            let num = Math.floor(this.total / 300)
            return 20*num;
        },

        //当前选中金额
        total() {
            if(!this.cartItems  || !this.cartItems.total) return 0;
            let total = 0;
            this.cartItems.data.forEach((item)=>{
                if(this.$data.selected.includes(item.product_id)) {
                    total += item.price;
                }
            })
            return total;
        },

        //优惠后小计
        totalAfterDiscount() {
            return this.total - this.discount;
        },

        //勾选的商品总数
        totalNum() {
            if(!this.cartItems && this.cartItems.total) return 0;
            return this.cartItems.total - this.discount;
        }
    },
    methods: {
        ...mapActions(['getCartInfo', 'updateCartItem', 'checkout']), //'addToLike',

        //调整购物车数量
        decrease(id){
            let data = this.cartItems.data.find((item) => item.product_id === id)
            if(!data) return;
            this.updateCartItem({
                id: id,
                qty: Math.max(0, data.qty - 1)
            })
        },

        //调整购物车数量
        increase(id){
            let data = this.cartItems.data.find((item) => item.product_id === id)
            if(!data) return;
            this.updateCartItem({
                id: id,
                qty: data.qty+1
            })
        },

        //去结算
        gotoCasher() {
            let ids = ''
            for(let i=0; i<this.$data.selected.length;i++){
                ids += ((i==0)?'':'&') + 'ids=' + this.$data.selected[i]
            }
            console.log(ids);
            this.checkout(ids)
        }
    },
    route: {
        data (){
            this.getCartInfo();
        }
    },
    components: {
        vSecondaryNav,
        vGoodSlider

    },
    ready(){}
}
</script>