<template>
    <v-secondary-nav :title="'我的评论'"></v-secondary-nav>
    <section class="mt40">
    <!-- 我的评价 -->
    <div class="comments_con" style="display: block;">
        <!-- 没有评论过 -->
        <div class="no_comments wd90 m0" style="display: block;">
            <img src="/img/mycard/comment.png" style="margin: 3rem auto;">
            <p class="mt30 c_b0c2cc">无待评论商品</p>
            <a href="javascript:;" class="txtc mt10 wd50 m0 c_fff pink_btn">去购物</a>
        </div>

        
        <!-- 有评论 -->
        <div class="has_comments wd90 m0" style="display: none;">
            

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