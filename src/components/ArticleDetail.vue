<template>
<div id="disp" class="page-content" style="padding-top:0px;">
  <div><img :src="article.cover_image" alt="{{article.title}}"/></div>
  <div class="articleInfo">
    <p class="blog_abstract">{{article.abstract}}</p>
    <p class="blog_articleTitle">
      {{article.title}}
    </p>
    <p class="blog_articleTime">
      {{article.update_time | formatTime}}
    </p>
  </div>
  <div class="content" id="article-content">
    {{{article.content[0]}}}
  </div>

<!--   <p style="color:#0d3749;text-align:center;font-weight:bold;font-size:1.6rem;margin-top:1rem;">他们让农田再度鸣唱</p>
  <p style="color:#0d3749;text-align:left;font-weight:bold;font-size:1.6rem;margin-top:2rem;padding:0 5%;">寂静的春天</p>
  <p style="color:#5D6166;text-align:left;font-size:1.4rem;margin-top:1rem;padding:0 5%;">50多年前，蕾切尔•卡森（Rachel Carson）写了一本书：《寂静的春天》。在这本书中，她讲述了：为什么在春天到来的时候，我们再也听不到鸟儿的歌声了？</p>
  <p style="color:#5D6166;text-align:left;font-size:1.4rem;margin-top:1rem;padding:0 5%;">因为人类以化学合成农药来消灭害虫，同时也杀害了无辜生灵，污染了绿色大地，造成春到人间，但不闻鸟语虫鸣，只剩下寂静的春天。</p>
  <p style="color:#5D6166;text-align:left;font-size:1.4rem;margin-top:1rem;padding:0 5%;">同时，农药的使用，不仅从根本上改变了水、土壤，那些致命的微量的毒素，通过生物链被一级一级放大，最后到达了人体。</p>
  <p style="color:#0d3749;text-align:left;font-weight:bold;font-size:1.6rem;margin-top:2rem;padding:0 5%;">他们让农田再度鸣唱</p>
  <p style="color:#5D6166;text-align:left;font-size:1.4rem;margin-top:1rem;padding:0 5%;">卡森女士50多年前的警告，在中国的当下已经不再是警告。因为农药经年累月地施用于田间，所以诸如农药毒害与药害事件、抗药性害虫的出现、有益生物之连带受害等问题层出不穷。如果你来自农村，当你回想起小时的农村时，是不是觉得那时的昆虫比现在多得多？</p>
  <p style="color:#5D6166;text-align:left;font-size:1.4rem;margin-top:1rem;padding:0 5%;">虽然如此，仍有很多农夫坚持着自己的耕种理想，不使用任何人工合成农药，而是使用生态、物理、轮作等方式控制害虫。这些方法的使用，让农田的生态变得活跃、健康，他们的农田也再度鸣唱起来。</p>
  <p style="color:#0d3749;text-align:left;font-weight:bold;font-size:1.6rem;margin-top:2rem;padding:0 5%;">不用农药种田的方法</p>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img1.jpg"></div>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img2.jpg"></div>
  <p style="color:#5D6166;text-align:center;font-size:1.4rem;margin-top:1rem;padding:0 5%;">百欧欢农场内的物理防虫方法展板</p>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img3.jpg"></div>
  <p style="color:#5D6166;text-align:center;font-size:1.4rem;margin-top:1rem;padding:0 5%;">百欧欢更注重生态的多元性，有300多种作物在这里生长</p>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img4.jpg"></div>
  <p style="color:#5D6166;text-align:center;font-size:1.4rem;margin-top:1rem;padding:0 5%;">岑谷农场的种植者在手工捕虫</p>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img5.jpg"></div>
  <p style="color:#5D6166;text-align:center;font-size:1.4rem;margin-top:1rem;padding:0 5%;">嘉心菜利用稻草堆吸引害虫产卵，保护农田里的作物</p>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img6.jpg"></div>
  <p style="color:#5D6166;text-align:center;font-size:1.4rem;margin-top:1rem;padding:0 5%;">锦菜园利用昆虫的趋光性原理消灭害虫</p>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img7.jpg"></div>
  <p style="color:#5D6166;text-align:center;font-size:1.4rem;margin-top:1rem;padding:0 5%;">玫瑰庄园养鸭，消灭稻田里的害虫和杂草</p>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img8.jpg"></div>
  <p style="color:#5D6166;text-align:center;font-size:1.4rem;margin-top:1rem;padding:0 5%;">朴和素农场小规模种植作物，使得害虫的侵袭减弱</p>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img9.jpg"></div>
  <p style="color:#5D6166;text-align:center;font-size:1.4rem;margin-top:1rem;padding:0 5%;">食全食美使用生物制剂防治害虫</p>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img10.jpg"></div>
  <p style="color:#5D6166;text-align:center;font-size:1.4rem;margin-top:1rem;padding:0 5%;">食全食美采用性诱剂吸引害虫</p>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img11.jpg"></div>
  <p style="color:#5D6166;text-align:center;font-size:1.4rem;margin-top:1rem;padding:0 5%;">争荣农场使用轮作的方式减少病虫害，他们以水稻和茭白进行轮作</p>
  <div style="padding:0 5%;margin-top:1rem;"><img src="http://m.yimishiji.com/farmer/img/field_img/img12.jpg"></div>
  <p style="color:#5D6166;text-align:center;font-size:1.4rem;margin-top:1rem;padding:0 5%;">一号农场利用昆虫对黄色敏感的特性消灭害虫</p> -->
  
</div>
  
</template>

<script>
export default {
  name: 'v-article-detail',
  props: ['article'],
  components:{
  },
  ready(){
  }
}
</script>


<style>
.blog_articleInfo {
    position: relative;
    margin-top: 10px;
    margin-bottom: 70px;
}
.blog_articleTitle {
    margin: 20px auto;
    margin-bottom: 20px;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
}
.blog_articleTime {
  font-family: 'Sentinel-BoldItalic';
  font-size: 16px;
  color: #5D6166;
  text-align: center;
  font-style: italic;
}
#article-content{
  padding: 10px;
}
#article-content img{
    width: 100% !important;
}
#article-content p, #article-content span{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px !important;
    line-height: 18px !important;
}
</style>
