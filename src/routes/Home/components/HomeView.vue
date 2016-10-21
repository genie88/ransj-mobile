<template>
  <v-header :title="'所有分类'"></v-header>
  <v-catagory :cates="cates.data"></v-catagory>
  <v-banner></v-banner>
  <v-ad-slider :list="hotArticles.data"></v-ad-slider>

  <!-- 好物主打 -->
  <!-- <v-floor-image-header  :link="''"
    :image="'/images/headers/good.jpg'">  
  </v-floor-image-header>
  <v-home-good-list :list="hotProducts.data" v-on:addToCart="addToCartClick"></v-home-good-list> -->

  <!-- 四时蔬菜 -->
  <v-floor-image-header  :link="''"
    :image="'/images/headers/vege.jpg'">  
  </v-floor-image-header>
  <v-home-good-list :list="productsByCates.cate109" v-on:addToCart="addToCartClick"></v-home-good-list>
  

  <!-- 肉禽蛋类 -->
  <v-floor-image-header  :link="''"
    :image="'/images/headers/meat.jpg'">  
  </v-floor-image-header>
  <v-home-good-list :list="productsByCates.cate110" v-on:addToCart="addToCartClick"></v-home-good-list>

  

  <!-- 联系方式 -->
  <div class="info-box">
    <p>服务热线：18073181682</p>
    <p>周一至周日 8:00-21:00</p>
  </div>
  <div class="height45"></div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vHeader from '../../../components/Header'
import vCatagory from '../../../components/Catagory'
import vBanner from '../../../components/Banner'
import vAdSlider from '../../../components/AdSlider'
import vGoodSlider from '../../../components/GoodSlider'
import vHomeGoodList from '../../../components/HomeGoodList'
import vFloorTxtHeader from '../../../components/FloorTxtHeader'
import vFloorImageHeader from '../../../components/FloorImageHeader'
export default {
  data () {
    return {
      loadingAsyncData: true
    }
  },
  computed: {
    ...mapGetters(['homeSlider', 'cates', 'hotProducts', 'productsByCates',
      'newProducts', 'hotArticles'])
  },
  methods: {
    ...mapActions(['getProductCates', 'getHomeSliders', 'getHotArticles', 
      'getProductsByCate', 'getHotProducts', 'getNewProducts', 'addToCart', 
      'showToast', 'changeMenu']),
    addToCartClick(data){
      this.addToCart(data);
      this.showToast({tips: data.title});
    }
  },
  route: {
      data ({to}) {
        this.getProductCates();
        this.getHotArticles();
        this.getHotProducts();
        this.getProductsByCate(110);
        this.getProductsByCate(109);
        // this.showToast({tips: '欢迎回来'});
        this.changeMenu(0);
        this.$data.loadingAsyncData = false;
      }
  },
  components:{
    vHeader,
    vCatagory,
    vBanner,
    vAdSlider,
    vGoodSlider,
    vHomeGoodList,
    vFloorTxtHeader,
    vFloorImageHeader
  }
}
</script>

<!-- <style src="./styles.css"></style> -->
