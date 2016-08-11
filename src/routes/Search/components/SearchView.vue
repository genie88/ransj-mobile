<template>
  <div class="search-container">
    <v-search-header></v-search-header>
    <div class="scroll-box">
      <!-- <v-loading></v-loading> -->
      <v-search-history></v-search-history>
      <!-- <v-search-result></v-search-result> -->
    </div>
  </div>
  
  
</template>

<script>
import vSearchHeader from '../../../components/SearchHeader'
import vSearchResult from '../../../components/SearchResult'
import vSearchHistory from '../../../components/SearchHistory'
import vLoading from '../../../components/Loading'

export default {
  data () {
    return {
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
