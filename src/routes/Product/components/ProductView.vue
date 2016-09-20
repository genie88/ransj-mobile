<template>
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
            <span class="s_num">4</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="pro_tab_con" v-show="!showComment">
      <div class="pro_info_show wd90 m0">
        <v-product-detail :info="productDetail"></v-product-detail>
        <v-farmer-card :info="productDetail"></v-farmer-card>
      </div>
    </div>
    <div class="pro_tab_con pb40" v-show="showComment"> 
      <div class="pro_comment mt20" id="tags">
        
      </div>
      <v-comment-list></v-comment-list>
    </div>
  </section>

  <v-add-to-cart></v-add-to-cart>
  
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

export default {
  name: 'ProductDetail',
  data () {
    return {
      id: '',
      showComment: false
    }
  },
  computed: {
    ...mapGetters(['productDetail', 'productComments'])
  },
  methods: {
    switchTab(){
      this.$data.showComment = !this.$data.showComment;
    },
    ...mapActions(['initCheckComment', 'getDetail', 'getComments', 'comment'])
  },
  route: {
      data ({to}) {
        if(isNaN(to.params.id)){
          router.go('/home');
          return;
        } else {
          this.$data.id = to.params.id;
          this.getDetail(this.$data.id);
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
    vAddToCart
  }
}
</script>

<!-- <style src="./styles.css"></style> -->
