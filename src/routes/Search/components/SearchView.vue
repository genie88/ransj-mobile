<template>
  <div class="search-container">
    <v-search-header :keyword="'泰和乌鸡 · 武山'"
      v-on:willsearch="onSearch" 
      v-on:searchinputchange="onInputChange">    
    </v-search-header>
    <div class="scroll-box">
      <!-- <v-loading></v-loading> -->
      <v-search-history 
        v-on:clearsearchhistory="onClearSearchHistory"
        :cates="cates.data" 
        :history="searchHistory" 
        :hotwords="searchHotWords">
      </v-search-history>
      <!-- <v-search-result></v-search-result> -->
    </div>
    <div class="height45"></div>
  </div>
  
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vSearchHeader from '../../../components/SearchHeader'
import vSearchResult from '../../../components/SearchResult'
import vSearchHistory from '../../../components/SearchHistory'
import vLoading from '../../../components/Loading'

export default {
  name: 'Search',
  data () {
    return {
      loadingAsyncData: true
    }
  },
  computed: {
    ...mapGetters(['cates','searchHotWords', 'searchSuggestions', 'searchHistory'])
  },
  methods: {
    ...mapActions(['getProductCates', 'getSearchHotWords', 'getSearchSuggestions', 'getSearchHistory', 'addSearchHistory', 'clearSearchHistory']),
    onSearch(data){
      this.addSearchHistory(data);
      router.go('/search/result?k='+data)
    },
    onInputChange(data) {
      //获取搜索建议词
    },
    onClearSearchHistory(){
      this.clearSearchHistory()
    }
  },
  route: {
      data ({to}) {
        // this.getSearchHotWords();
        this.getSearchHistory();
        this.getProductCates();
        this.$data.loadingAsyncData = false;
      }
  },
  components:{
    vSearchHeader,
    vSearchResult,
    vSearchHistory,
    vLoading
  }
}
</script>
