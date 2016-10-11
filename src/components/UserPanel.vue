<template>
    <div class="user_header">
        <div class="user_setting" v-link="{path: '/user/setting'}">
            <img src="../static/img/bill.png">
        </div>
        <div class="user_photo_level">
            <div class="user_photo_c pre" onclick="">
                <div class="user_photo">
                    <img class="my_img" src="../static/img/touxiang.png">
                </div>
                <div class="user_edit"><img src="../static/img/user_edit.png"></div>
            </div>
            <p class="txtc c_1b374b f8 mb5 mt10">上次登录时间: {{info.last_login_time | formatTime}}</p>
            <p class="txtc c_1b374b f18 mb5 mt10">{{info.username}}</p>
            <div class="user_level">
                <span class="user_num c_fff"><img src="../static/img/friendly2x.png"></span>
                <span class="c_fff f12">友善会员</span>
            </div>
        </div>
        <div class="wd100 user_bar dn">
            <ul>
                <li>
                    <a v-link="{path: '/user/balance'}">
                        <p class="c_1b374b fb f16">{{info.balance | currency}}</p>
                        <p class="c_1b374b f13">账户余额</p>
                        <span class="add_icon f12"><img src="../static/img/u_add_icon.png"></span>
                    </a>
                </li>
                <li>
                    <a v-link="{path: '/user/score'}">
                        <p class="c_1b374b fb f16">{{info.score}}</p>
                        <p class="c_1b374b f13">当前积分</p>
                    </a>
                </li>
                <li class="bdr">
                    <a v-link="{path: '/user/coupon'}">
                        <p class="c_1b374b fb f16">{{info.score}}</p>
                        <p class="c_1b374b f13">优惠券</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <section class="wd100 m0 mt10 pb30">
    <div class="user_li ">
        <ul>
            <li>
                <a v-link="{path: '/user/order/status/1'}">
                    <img src="../static/img/minePageicon012x.png"><p>我的订单</p>
                </a>
            </li>
            <li>
                <a v-link="{path: '/user/order/status/2'}">
                    <img src="../static/img/minePageicon022x.png"> 
                    <p>待付款</p>
                </a>
            </li>
            <li>
                <a v-link="{path: '/user/order/status/3'}">
                    <img src="../static/img/minePageicon032x.png"><p>待收货</p>
                </a>
            </li>
            <li>
                <a v-link="{path: '/user/order/status/4'}">
                    <img src="../static/img/minePageicon042x.png">
                    <p>待评价</p>
                </a>
            </li>
            <p class="user_bdm clearfix"></p>
            <!-- <li>
                <a v-link="{path: '/user/order/history'}">
                    <img src="../static/img/minePageicon052x.png">
                    <p>我常买的</p>
                </a>
            </li> -->
            <li>
                <a v-link="{path: '/user/like'}">
                    <img src="../static/img/minePageicon062x.png">
                    <p>我喜欢的</p>
                </a>
            </li>
            <li>
                <a v-link="{path: '/user/comment'}">
                    <img src="../static/img/minePageicon072x.png">
                    <p>我的评论</p>
                </a>
            </li>
            <!-- <li>
                <a v-link="{path: '/user/tuan'}">
                    <img src="../static/img/minePageicon102x.png">
                    <p>我的团购</p>
                </a>
            </li> -->
            <!-- <li>
                <a v-link="{path: '/user/card'}">
                    <img src="../static/img/minePageicon112x.png">
                    <p>我的充值卡</p>
                </a>
            </li> -->
            <li>
                <a @click.prevent="logout()">
                    <img src="../static/img/minePageicon122x.png">
                    <p class="c_afc1cb">退出登录</p>
                </a>
            </li>
        </ul>
    </div>

</section>
</template>

<script>    
    export default {
        name: 'v-user-pannel',
        props: ['info'],
        data(){
            return {
            }
        },
        methods: {
            logout(){
                this.$dispatch('willlogout');
            }
        },
        components:{ 
        },
        ready(){

        }
    }
</script>