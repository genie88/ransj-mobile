<template>
    <v-secondary-nav :title="'添加评论'">
    </v-secondary-nav>
    <section class="mt40">
        <!-- 我的评价 -->
        <div class="allcomments" style="display: block;">
            <!-- 针对单个商品的评论  -->
            <div class="commentli">
                <div class="wd90 m0">
                    <p>
                        <span class="f13">
                            订单详情
                        </span>
                        <span class="order_time fr c_aaa f10">
                           规格 / 价格
                        </span>
                    </p>
                    <p class="mt5 mb5 c_999">
                        这里是商品介绍
                    </p>
                    <p class="comment_photo Gallery">
                        <a href="http://www.yimishiji.com/public/images/be/57/c5/42aa91cfd6b4c7a2633740892b7bf078811a113d.jpg?1475822509#w">
                            <img src="http://www.yimishiji.com/public/images/be/57/c5/42aa91cfd6b4c7a2633740892b7bf078811a113d.jpg?1475822509#w"/>
                        </a>
                    </p>
                    <p style="margin-top:20px;">商品评分</p>
                    <p>
                        <span class="average_stars">
                            <span class="avstar redstar" style="width: 100%;">
                            </span>
                        </span>
                    </p>
                    <div class="reply_box">
                        <div class="reply_text mb5">
                            <textarea placeholder="请填写评论内容，最多1000字" rows="10"></textarea>
                        </div>
                        <p>
                            <span class="go_comment">
                                <a class="c_fff f12" href="javascript:;" onclick="comreplay(this,6302);">
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
ad
