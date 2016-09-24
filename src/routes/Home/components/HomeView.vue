<template>
  <v-header></v-header>
  <v-catagory></v-catagory>
  <v-banner></v-banner>
  <v-ad-slider :list="hotArticles.data"></v-ad-slider>
  <v-floor-image-header  :link="''"
    :image="'/images/headers/good.jpg'">  
  </v-floor-image-header>
  <v-home-good-list :list="hotProducts.data"></v-home-good-list>
  <v-floor-image-header  :link="''"
    :image="'/images/headers/meat.jpg'">  
  </v-floor-image-header>
  <v-home-good-list :list="hotProducts.data"></v-home-good-list>
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
    ...mapGetters(['homeSlider', 'cates', 'hotProducts', 
      'newProducts', 'hotArticles'])
  },
  methods: {
    ...mapActions(['getProductCates', 'getHomeSliders', 'getHotArticles', 
      'getHotProducts', 'getNewProducts', 'addToCart'])
  },
  route: {
      data ({to}) {
        this.getProductCates();
        this.getHotArticles();
        this.getHotProducts();
        this.$data.loadingAsyncData = false;
      }
  },
  watch: {
    'cates': (newval, oldval)=> {

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
