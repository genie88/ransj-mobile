<template>
    <v-secondary-nav :title="'我的喜欢'"></v-secondary-nav>
    <div class="user_content">
        <ul class="like_pro_list" v-if="myLikes && myLikes.data && myLikes.data.length">
            <li v-for="item in myLikes.data">
                <div class="proList_l">
                    <a href="">
                        <img :src="item.pictures[0]" style="width:70px;height:70px;border-radius:30px;" />
                    </a>
                </div>
                <div class="proList_r">
                    <p class="l_p_title f14 c_1b374b">
                        {{item.title}}
                    </p>
                    <p class="l_p_f f12 mt5">
                        {{item.farmer}}  {{item.specification}} 500g
                    </p>
                    <p class="l_p_price f14 c_81ad94 mt5">
                        ￥{{item.price |getPrice 0}}
                    </p>
                    <span class="l_p_del_btn" @click.prevent="removeFromLike(item.id)">
                    </span>
                    <span class="l_p_buy_btn" @click.prevent='addToCart({product_id: item.id, qty: 1})'>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import vSecondaryNav from '../../../../../components/SecondaryNav'
export default {
    data () {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['myLikes'])
    },
    methods: {
        ...mapActions(['getMyLikes', 'addToCart', 'dislike', 'showToast']),
        removeFromLike(id) {
            this.dislike(id).then((json)=>{
                this.showToast({tips: '移除成功'})
            })
        }
    },
    route: {
        data (){
            this.getMyLikes();
        }
    },
    components: {
        vSecondaryNav
    },
    ready(){}
}
</script>