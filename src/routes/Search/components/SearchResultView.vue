<template>
  <div class="search-container">
    <v-search-header 
        :keyword="keyword"
        v-on:willsearch="onSearch" 
        v-on:searchinputchange="onInputChange">
    </v-search-header>


    <div class="scroll-box">
      <v-loading v-if="loadingAsyncData"></v-loading>
      <div class="scroll" v-if="!loadingAsyncData">
        <div id="disp" class="page-content pt61">
            <section class="goods-list">
                <p class="title-line">搜索结果<span class="fr" id="count">共{{searchResult.data.length}}件</span></p>
               
                <!--结果-->
                <div class="floor-con" v-if="searchResult.data && searchResult.data.length">
                    <v-home-good-list :list="searchResult.data" v-on:addToCart="onAddToCart"></v-home-good-list>
                </div>

                 <!--无结果-->
                <template v-if="!searchResult.data.length">
                  <div class="no-goods" >
                    <img src="/images/failicon.png">
                    <p class="red align-c">搜索无结果，请尝试其他关键词</p>
                  </div>
                  <!--无结果推荐-->
                  <div class="floor-con" id="wujieg">
                      <div class="floor">
                          <div class="floor-head">
                              <div class=" border-t bold align-c">
                                  ·&nbsp;推荐产品&nbsp;·
                              </div>
                          </div>
                          <div class="lr-slide">
                              <div class="floor-product-list" id="recommend">
                                  <v-home-good-list :list="hotProducts.data" v-on:addToCart="onAddToCart"></v-home-good-list>
                              </div>
                          </div>
                         
                      </div>
                  </div>
                  <!--无结果活动推荐入口-->
                 <!--  <div class="floor-con" id="wuhuod">
                      <div class="floor adver-slide">
                          <div class="floor-head">
                              <div class=" border-t bold align-c">
                                  ·&nbsp;最新活动&nbsp;·
                              </div>
                          </div>
                          <div class="lr-slide">
                              <div class="swiper-container floor-slide ">
                                  <div class="lr-slide">
                              <div class="swiper-container floor-slide">
                                  <div id="huodong" class="swiper-wrapper adver-wrapper">
                                  </div>
                              </div>
                          </div>
                              </div>
                          </div>
                      </div>
                  </div> -->
                  
                </template>
                
            </section>
        </div>
    </div>
    </div>
    <div class="height45"></div>
  </div>
  
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vSearchHeader from '../../../components/SearchHeader'
import vHomeGoodList from '../../../components/HomeGoodList'
import vLoading from '../../../components/Loading'

export default {
  name: 'SearchResult',
  data () {
    return {
      keyword: '',
      loadingAsyncData: true
    }
  },
  computed: {
    ...mapGetters(['searchResult', 'searchSuggestions', 'hotProducts'])
  },
  methods: {
    ...mapActions(['getSearchResult', 'getSearchSuggestions', 'getHotProducts', 'showToast', 'addToCart', 'changeMenu']),
    onSearch(data){
      router.go('/search/result?k='+data)
    },
    onInputChange(data) {

    },
    onAddToCart(data){
      this.addToCart(data);
      this.showToast({tips: data.title});
    }
  },
  route: {
      data ({to}) {
        if(!to.query.k) {router.go('/search')}
        this.$data.keyword = to.query.k;
        this.$broadcast('updateSearchKeyword', to.query.k);
        this.getHotProducts();
        this.getSearchResult(this.$data.keyword).then(()=>{
          this.$data.loadingAsyncData = false; 
        })
        this.changeMenu(1);
        this.$data.loadingAsyncData = false;
      }
  },
  components:{
    vSearchHeader,
    vHomeGoodList,
    vLoading
  }
}
</script>
