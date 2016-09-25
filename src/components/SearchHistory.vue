<template>
<div class="scroll">
    <div id="disp" class="page-content pt61">
        <section id="history" class="history-search">

            <!-- 搜索历史 -->
            <div class="history-c" id="thistory" v-if="history && history.length">
                <p class="history-title">
                <span class="mrf29 f14">·&nbsp;&nbsp;历史搜索&nbsp;&nbsp;·</span>
                <span class="lightBlue fr" @click="clearSearchHistory()">清除</span></p>
                <div class="history-list" id="myhistory">
                  <a v-for="his in history" 
                    v-link="{path: '/search/result?k='+his.name}">
                    <p class="js-search">{{his.name}}</p>
                  </a>
                </div>
            </div>  

            <!-- 搜索热词 -->
            <div class="history-c hot-search" v-if="hotwords && hotwords.length">
                <p class="history-title "><span class="f14">·&nbsp;&nbsp;热门搜索&nbsp;&nbsp;·</span></p>
                <div class="history-list clear">
                    <a v-for="hotword in hotwords" 
                       v-link="{path: '/search/result?k='+hotword.name}">
                      <p class="js-search">{{hotword.name}}</p>
                    </a>
                </div>
            </div>

            <!-- 所有分类 -->
            <div class="history-c hot-search" v-if="cates && cates.length">
                <p class="history-title">
                  <span class="f14">·&nbsp;&nbsp;所有分类&nbsp;&nbsp;·</span>
                </p>
                <div class="clear" id="alltype">
                  <ul id="ul">
                    <li class="on" v-for="cate in cates">
                      <a v-link="{path: '/list/'+cate.id}">
                        <img :src="'/images/classify/'+cate.id+'.png'"/>
                        <p>{{cate.name}}</p>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
        </section>
    </div>
</div>
  
</template>

<script>
export default {
  name: 'v-search-history',
  props: ['cates', 'hotwords', 'history'],
  data () {
    return {
    }
  },
  methods: {
    clearSearchHistory(){
      this.$dispatch('clearsearchhistory')
    }
  },
  components:{
  },
  ready(){
  }
}
</script>
