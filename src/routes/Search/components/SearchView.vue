<template>
  <div class="search-container">
    <v-search-header></v-search-header>
    <div class="scroll-box">
      <!-- <v-loading></v-loading> -->
      <v-search-result></v-search-result>
    </div>
  </div>
  
  
</template>

<script>
import vSearchHeader from '../../../components/SearchHeader'
import vSearchResult from '../../../components/SearchResult'
import vLoading from '../../../components/Loading'

export default {
  data () {
    return {
    }
  },
  components:{
    vSearchHeader,
    vSearchResult,
    vLoading
  }
}
</script>
