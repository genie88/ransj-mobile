<template>
  <v-transparent-nav></v-transparent-nav>
  <section class="bottomline section_one intro">
    <div class="make-choice slideBox">
        <div class="make-choice-img">
            <img src="/tags/cover/bkg_tags.jpg">
        </div>
    </div>
    <div class="product_name" align="center">
        <p class="c_1e384b f15 mt10">做个选择</p>
        <p class="c_b0c2cc">食物不只是食物，<br/>他们的种养过程定义了我们的环境。<br/>
每一次的购买，<br/>都是在为你想要的世界投票</p>
    </div>

    <div class="wd90 m0 farmer_p">
        <p>然生记倡导有意念的吃，希望每个人都能关心食物的来历。 </p>
        <p>「我们希望然生记不仅仅代表着一种健康的产品和健康的生活方式，更能够鼓励大家有意念的吃『Eat consciously』。吃进去的东西从哪里来，到哪里去，怎么运来的，我们选择的食物、吃剩的，是不是会带给环境和土壤造成一定的伤害？这些都是我们希望带给消费者的理念。」然生记创办人如是说。</p> 
        <p>在进食之前，想一想这些食物从产地搬到餐桌的一路上经历了什么，然后做个选择。</p>
    </div>

    <div class="row tag_zone">
      <a v-link="{path: '/tag/'+tag.id}" v-for="tag in tagList">
        <div class="tag_card ">
          <img :src="'/tags/'+ tag.id + '.png'">
          <p class="tag_name">{{tag.name}}</p>
          <p class="tag_desc">{{tag.description}}</p>
        </div>
      </a>
    </div>

    <div class="height45"></div>

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
    ...mapGetters(['tagList'])
  },
  methods: {
    ...mapActions(['getTagList'])
  },
  route: {
      data ({to}) {
        this.getTagList();
      }
  },
  components:{
    vTransparentNav
  }
}
</script>

<style>
  .height45{
     height: 45px;
     clear: both;
  }
  .tag_zone {
  }
  .tag_zone a {
    width: 40%;
    float: left;
    margin-left: 5%;
    margin-top: 20px;
  }
  .tag_card {
    text-align: center;

  }
  .tag_card .tag_name {
    font-size: 16px;
    font-weight: bold;
    padding: 10px 0;
  }
  .tag_card img{
     height: 100px;
     width: 100px;
     margin: 0 auto;
  }
</style>
