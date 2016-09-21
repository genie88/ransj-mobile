<template>
    <v-secondary-nav></v-secondary-nav>
    <div class="user_content">
        <div class="top_banner pt20 pb20">
            当前积分
            <p class="currPoint f28" id="currPoint">0</p>
        </div>
        <div class="qn_item pt10 pb10">
            <a href="../shopping_car_2.0/new_cart.jsp" class="spend_m">购物花积分</a>
            <a href="../mine_2.0/my_comments.jsp#2" class="make_m">评价赚积分</a>
        </div>
        <div class="wallet_content">
            <div class="intHeader f14 fb c_1b374b pl15">积分记录</div>
            <div class="intContent"></div>
            <div class=""></div>
            <div class=""></div>
        </div>
    </div>
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