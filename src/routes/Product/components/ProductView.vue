<template>
  <v-loading v-if="loadingAsyncData"></v-loading>
  <template v-if="!loadingAsyncData">
    <v-transparent-nav></v-transparent-nav>
    <section class="bottomline section_one">
      <v-slider-box :info="productDetail"></v-slider-box>
      <v-product-card :info="productDetail"></v-product-card>
    </section>

    <section class="pre mb50">
      <div class="pros_tab">
        <ul>
          <li :class="!showComment? 'on': ''">
            <a @click.prevent="switchTab()">商品详情</a>
          </li>
          <li :class="showComment? 'on': ''">
            <a @click.prevent="switchTab()">吃货评论
              <!-- <span class="s_num">4</span> -->
            </a>
          </li>
        </ul>
      </div>
      <div class="pro_tab_con" v-if="!showComment">
        <div class="pro_info_show wd90 m0">
          <v-product-detail :info="productDetail"></v-product-detail>
          <v-farmer-card :info="productDetail" :farmergoods="farmerGoods.data"></v-farmer-card>

          <!-- 猜你喜欢 -->
          <!-- <div class="floor-head pt30 mb20">
            <div class="bold box box-center">
              <p></p><span>你可能会喜欢</span><p></p>
            </div>
          </div>
          <v-good-slider></v-good-slider> -->


        </div>
      </div>
      <div class="pro_tab_con pb40" v-if="showComment"> 
        <template v-if="productComments && productComments.length">
          <div class="pro_comment mt20" id="tags"></div>
          <v-comment-list :comments="productComments"></v-comment-list>
        </template>

        <template v-if="!productComments || !productComments.length">
          <!-- 没有评论过 -->
          <div class="no_comments wd90 m0" style="min-height: 600px;">
              <img src="/img/mycard/comment.png" style="margin: 3rem auto;">
              <p class="mt30 c_b0c2cc">还没有点评，抢沙发</p>
          </div>
        </template>
        
      </div>
    </section>

    <v-add-to-cart v-on:addtocart="beforeAddToCart" :max="productDetail.stock"></v-add-to-cart>
  </template> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vTransparentNav from '../../../components/TransparentNav'
import vSliderBox from '../../../components/SliderBox'
import vCommentList from '../../../components/CommentList'
import vFarmerCard from '../../../components/FarmerCard'
import vAddToCart from '../../../components/AddToCart'
import vProductCard from '../../../components/ProductCard'
import vProductDetail from '../../../components/ProductDetail'
import vGoodSlider from '../../../components/GoodSlider'
import vLoading from '../../../components/Loading'

export default {
  name: 'ProductDetail',
  data () {
    return {
      id: '',
      loadingAsyncData: true,
      showComment: false
    }
  },
  computed: {
    ...mapGetters(['productDetail', 'productComments', 'farmerGoods'])
  },
  methods: {
    switchTab(){
      this.$data.showComment = !this.$data.showComment;
    },
    beforeAddToCart(data) {
      this.addToCart({product_id: this.$data.id, qty: data.qty})
      this.showToast({tips: '添加 ' + this.productDetail.title});
    },
    ...mapActions(['initCheckComment', 'getDetail', 'getComments', 'comment', 'getFarmerGoods', 'addToCart', 'addProductViewHistory', 'showToast'])
  },
  route: {
      data ({to}) {
        if(isNaN(to.params.id)){
          router.go('/');
          return;
        } else {
          this.$data.id = to.params.id;
          this.getDetail(this.$data.id).then((good) => {
            this.getFarmerGoods(good.farmer_id);
            this.addProductViewHistory(good);

          })
          this.getComments(this.$data.id);
          this.$data.loadingAsyncData = false;
          
        }
      }
  },
  components:{
    vTransparentNav,
    vSliderBox,
    vCommentList,
    vFarmerCard,
    vProductCard,
    vProductDetail,
    vGoodSlider,
    vAddToCart,
    vLoading
  }
}
</script>

<!-- <style src="./styles.css"></style> -->
