<template>
    
    <v-secondary-nav></v-secondary-nav>

    <div class="height45"></div>
    <section class="cart_product_list mt40">
        <!--购物篮空空的-->
        <div class="wd80 m0 txtc cart_none">
            <p><img src="../../../static/img/icon/nothing.png"></p>
            <p class="f14 mb30">购物篮中空空的喔</p>
            <a href="/" class="pink_btn c_fff mb30 db">去逛逛，不要忘记带上食欲</a>
        </div>
    </section>

    <section class="" style="margin-bottom:6rem">   
        <div class="wd94 m0">   
            <p class="f14 fb c_1e384b">浏览记录</p>         
            <div class="floor-con">
                <div class="floor">                 
                    <v-good-slider></v-good-slider>
                </div>
            </div>              
        </div>
    </section>
</template>

<script>
import vSecondaryNav from '../../../components/SecondaryNav'
import vGoodSlider from '../../../components/GoodSlider'
export default {
    data () {
        return {
            
        }
    },
    components: {
        vSecondaryNav,
        vGoodSlider

    },
    ready(){}
}  
</script>