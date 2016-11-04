<template>
  <v-transparent-nav></v-transparent-nav>
  <v-article-detail :article="articleDetail"></v-article-detail>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vTransparentNav from '../../../components/TransparentNav'
import vArticleDetail from '../../../components/ArticleDetail'
import wx from '../../../utils/wx'

export default {
  data () {
    return {
      id: '',
      loadingAsyncData: true
    }
  },
  computed: {
    ...mapGetters(['articleDetail', 'articleComments'])
  },
  methods: {
    ...mapActions(['getArticleDetail', 'getArticleComments'])
  },
  watch: {
    'articleDetail': function(newVal, oldVal){
      let title = newVal.title + ' - 然生记';
      wx.setTitle(title);
    }
  },
  route: {
      data ({to}) {
        if(isNaN(to.params.id)){
          router.go('/home');
          return;
        } else {
          this.$data.id = to.params.id;
          this.getArticleDetail(this.$data.id);
          // this.getComments(this.$data.id);
          this.$data.loadingAsyncData = false;
        }
      }
  },
  components:{
    vTransparentNav,
    vArticleDetail
  }
}
</script>

<!-- <style src="./styles.css"></style> -->
