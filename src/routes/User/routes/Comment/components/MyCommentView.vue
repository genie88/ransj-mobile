<template>
    <v-secondary-nav :title="'我的评论'"></v-secondary-nav>
    <section class="mt40">
    <!-- 我的评价 -->
    <div class="comments_con" style="display: block;">
        <!-- 没有评论过 -->
        <div class="no_comments wd90 m0" v-if="!userComments || !userComments.length ">
            <img src="/img/mycard/comment.png" style="margin: 3rem auto;">
            <p class="mt30 c_b0c2cc">暂无评论</p>
            <a v-link="{path: '/'}" class="txtc mt10 wd50 m0 c_fff pink_btn">去购物</a>
        </div>

        
        <!-- 有评论 -->
        <div class="has_comments wd90 m0" v-if="userComments && userComments.length > 0 ">
            <div class="commentli" v-for="comment in userComments">
                <div class="wd90 m0">
                <p>
                    <!-- <span class="comment_point_pic">
                        <img src="/mine_2.0/img/user_icon/touxiang.png">
                    </span> -->
                    <span class="f13">{{comment.update_time | formatTime}}</span>
                    <span class="order_time fr c_aaa f10">
                        
                    </span>
                </p>
                <p class="mt5 mb5 c_999">{{comment.content}}</p>
                <p>
                    <span class="average_stars">
                        <span class="avstar redstar" style="width: 100%;"></span>
                    </span>
                    <span class="go_comment fr replay"> 
                        <a v-link="{path: '/user/order/' + comment.oid}" style="color:#fff;">查看订单</a> 
                    </span>
                </p>  
                </div>
                <hr>
            </div>

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
            
        }
    },
    computed: {
        ...mapGetters(['userComments'])
    },
    methods: {
        ...mapActions(['getUserComments'])
    },
    route: {
        data (){
            this.getUserComments()
        }
    },
    components: {
        vSecondaryNav,
        vTabHeader
    },
    ready(){}
}
</script>