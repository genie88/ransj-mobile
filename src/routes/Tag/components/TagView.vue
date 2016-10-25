<template>
  <v-transparent-nav></v-transparent-nav>
  <section class="bottomline section_one intro">
    <div class="make-choice slideBox">
        <div class="make-choice-img">
            <img :src="'/tags/cover/'+ id + '.png'">
        </div>
        <div class="make-choice-tabs">
            <span class="family-farming"> <img :src="'/tags/'+ id + '.png'" alt=""></span>
        </div>
    </div>
    <div class="product_name" align="center">
        <p class="c_1e384b f15 mt10">{{tagDetail.name}}</p>
        <p class="c_b0c2cc">{{tagDetail.description}}</p>
    </div>

    <div class="wd90 m0 farmer_p show_pro_detail">
        {{{tagDetail.content}}}
    </div>

    <!-- <div class="updown_more">
      <p id="moreall">点击查看更多</p>
      <p><span class="updowns_arrow"></span></p>
    </div> -->
</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vTransparentNav from '../../../components/TransparentNav'

export default {
  data () {
    return {
      id: '',
      loadingAsyncData: true
    }
  },
  computed: {
    ...mapGetters(['tagDetail'])
  },
  methods: {
    ...mapActions(['getTagDetail'])
  },
  route: {
      data ({to}) {
        if(isNaN(to.params.id)){
          router.go('/home');
          return;
        } else {
          this.$data.id = to.params.id;
          this.getTagDetail(this.$data.id);
        }
      }
  },
  components:{
    vTransparentNav
  }
}
</script>
