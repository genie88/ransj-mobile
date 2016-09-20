<template>
  <v-transparent-nav></v-transparent-nav>
  <v-farmer-detail></v-farmer-detail>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vTransparentNav from '../../../components/TransparentNav'
import vFarmerDetail from '../../../components/FarmerDetail'


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