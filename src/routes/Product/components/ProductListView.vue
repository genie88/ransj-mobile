<template>
  <v-loading v-if="loadingAsyncData"></v-loading>
  <template v-if="!loadingAsyncData">
    <v-header></v-header>
    <v-catagory></v-catagory>

    <!-- 二级分类 -->
    <div class="sub-classify-box ">
      <div class="swiper-container sub-classify togglon swiper-container-horizontal swiper-container-free-mode">
        <ul class="swiper-wrapper">
          <li class="swiper-slide swiper-slide-active" :class=" subCate == id? 'on': ''">
            <a @click.prevent="changeSubCate(id)">全部</a>
          </li>
          <template v-for="cate in currentCate.subcates">
            <li class="swiper-slide swiper-slide-next" :class=" subCate == cate.id ? 'on': ''">
              <a @click.prevent="changeSubCate(cate.id)">{{cate.name}}</a>
            </li>
          </template>
        </ul>
      </div>
    </div>

    <v-home-good-list :list="productsByCate.data"></v-home-good-list>

    <div class="height45"></div>
  </template> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vHeader from '../../../components/Header'
import vCatagory from '../../../components/Catagory'
import vHomeGoodList from '../../../components/HomeGoodList'
import vLoading from '../../../components/Loading'

export default {
  name: 'ProductDetail',
  data () {
    return {
      id: '',
      subCate: 0,
      currentCate: null,
      loadingAsyncData: true
    }
  },
  computed: {
    ...mapGetters(['cates', 'productsByCate'])
  },
  methods: {
    ...mapActions(['getProductListByCate', 'getProductCates']),
    changeSubCate(catId){
      this.$data.subCate = catId;
      this.getProductListByCate(catId);
    }
  },
  route: {
      data ({to}) {
        if(isNaN(to.params.id)){
          router.go('/home');
          return;
        } else {
          this.$data.id = to.params.id;
          this.$data.subCate = to.params.id;
          this.getProductCates().then((json)=>{
            let cates = json.data;
            this.$data.currentCate =  cates.find((cat)=> cat.id == this.$data.id);
            //如果没有找到相关的分类，回到主页
            if(!this.$data.currentCate) {
              // router.go('/');
            }
            this.getProductListByCate(this.$data.id);
            this.$data.loadingAsyncData = false;
          })
        }
      }
  },
  watch: {
    'currentCate': () => {
      var subcateSlider = new Swiper('.sub-classify', {
          slidesPerView: 4.7,
          spaceBetween: 5,
          paginationClickable: true,
          freeMode: true,
          slidesOffsetBefore: 10,
          slidesOffsetAfter: 20,
      });
    },
  },
  components:{
    vHeader,
    vCatagory,
    vHomeGoodList,
    vLoading
  }
}
</script>

<!-- <style src="./styles.css"></style> -->
