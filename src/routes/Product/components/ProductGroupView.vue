<template>
  <v-loading v-if="loadingAsyncData"></v-loading>
  <template v-if="!loadingAsyncData">
    <v-secondary-nav :title="'预购'"></v-secondary-nav>
    <div class="height45"></div>

    <div class="swiper-container mb5">
      <img src="/uploads/banner/banner-3.jpg">
    </div>

    <div class="floor-con ">
      <div class="lr-slide">
          <div class="floor-product-list pre-sale" id="">
              <ul class="clearfloat yushou_listpage" id="preSellGoods_list">
                <li v-for="good in productsByCate.data">  
                  <div class="c-goods">   
                    <div class="goods-pic">     
                      <a v-link="{path: '/product/'+good.id}">        
                        <img :src="good.pics">    
                        <i class="pre-label">预售</i>     
                      </a>    
                    </div>    
                    <div class="c-goods-detail">      
                      <a v-link="{path: '/product/'+good.id}"></a>
                      <p class="title clamp-one">
                        <a v-link="{path: '/product/'+good.id}">
                        {{good.title}}
                        </a>      
                      </p>
                      <!-- <p class="sub-title clamp-one">{{good.title}}</p>       -->
                      <p class="price"><span class="green bold mr3">¥{{good.price}}</span></p>    
                    </div>  
                  </div>
                </li>
              </ul>
          </div>
      </div>       
    </div>
  </template> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vLoading from '../../../components/Loading'
import vSecondaryNav from '../../../components/SecondaryNav'

export default {
  name: 'ProductGroupView',
  data () {
    return {
      id: '',
      subCate: 0,
      currentCate: null,
      loadingAsyncData: true
    }
  },
  computed: {
    ...mapGetters(['productsByCate'])
  },
  methods: {
    ...mapActions(['getProductListByCate']),
  },
  route: {
      data ({to}) {
        if(isNaN(to.params.id)){
          router.go('/home');
          return;
        } else {
          this.getProductListByCate(108);
          this.$data.loadingAsyncData = false;
        }
      }
  },
  components:{
    vSecondaryNav,
    vLoading
  }
}
</script>


<style>
  
.pre-sale .c-goods .goods-pic{
    padding-top: 66.4%;
    width: 100%;
  overflow: hidden;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.pre-sale .c-goods .goods-pic img{
    position: absolute;
    display: block;
    left: 0;
    top: 0;
}
.c-goods .goods-pic i.pre-label {
  text-align: center;
    position: absolute;
    left: -35px;
    top: 2px;
    width:100px;
    height:22px;
    line-height: 22px;
    background:#e88771; 
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    color: #fff
}
.c-goods .c-goods-detail .title{
  color: #1d394d
}
.c-goods .c-goods-detail p{
  padding: 2px 1px;
}
.banner{
  position: relative;
}
.banner span.arrow{
  position: absolute;
  left: 10px;
  top: 10px;
  width: 230px;
  height: 30px;
  -webkit-border-radius: 100%;
  border-radius: 100%;
  background: rgba(255,255,255,.8);
}
</style>
