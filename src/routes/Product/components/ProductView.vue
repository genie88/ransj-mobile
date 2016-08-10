<template>
  <v-transparent-nav></v-transparent-nav>
  <section class="bottomline section_one">
    <v-slider-box></v-slider-box>
    <v-product-card></v-product-card>
  </section>

  <section class="pre mb50">
    <div class="pros_tab">
      <ul>
        <li class="" at="good"><a href="javascript:;">商品详情</a></li>
        <li at="comm" class="on"><a href="javascript:;">吃货评论<span class="s_num">4</span></a></li>
      </ul>
    </div>
    <div class="pro_tab_con">
      <div class="pro_info_show wd90 m0">
        <v-product-detail></v-product-detail>
        <v-farmer-card></v-farmer-card>
      </div>
    </div>
    <div class="pro_tab_con pb40 dn">
      <div class="pro_comment mt20" id="tags">
        
      </div>
      <v-comment></v-comment>
    </div>
  </section>

  <v-add-to-cart></v-add-to-cart>
  
</template>

<script>
import vTransparentNav from '../../../components/TransparentNav'
import vSliderBox from '../../../components/SliderBox'
import vCommentList from '../../../components/CommentList'
import vFarmerCard from '../../../components/FarmerCard'
import vAddToCart from '../../../components/AddToCart'
import vProductCard from '../../../components/ProductCard'
import vProductDetail from '../../../components/ProductDetail'

export default {
  data () {
    return {
    }
  },
  components:{
    vTransparentNav,
    vSliderBox,
    vCommentList,
    vFarmerCard,
    vProductCard,
    vProductDetail,
    vAddToCart
  }
}
</script>

<!-- <style src="./styles.css"></style> -->
