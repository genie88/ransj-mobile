<template>
<div class="scroll">
        <div id="disp" class="page-content pt61">
            <section id="history" class="history-search">
                <div class="history-c" id="thistory">
                    <p class="history-title"><span class="mrf29 f14">·&nbsp;&nbsp;历史搜索&nbsp;&nbsp;·</span><span class="lightBlue fr" onclick="clearcook()">删除</span></p>
                    <div class="history-list" id="myhistory">
                      <a><p class="js-search">  测试</p></a>
                      <a><p class="js-search">  十四行诗</p></a>
                    </div>
                </div>                   
                <div class="history-c hot-search">
                    <p class="history-title "><span class="f14">·&nbsp;&nbsp;热门搜索&nbsp;&nbsp;·</span></p>
                    <div class="history-list clear">
                      
                        <a onclick="tosearch2('有机葡萄')"><p class="js-search">有机葡萄</p></a>
                      
                        <a onclick="tosearch2('首契玉米')"><p class="js-search">首契玉米</p></a>
                      
                        <a onclick="tosearch2('横沙岛主')"><p class="js-search">横沙岛主</p></a>
                      
                        <a onclick="tosearch2('虾皮')"><p class="js-search">虾皮</p></a>
                      
                        <a onclick="tosearch2('丑蕉')"><p class="js-search">丑蕉</p></a>
                      
                        <a onclick="tosearch2('Ocean Gala')"><p class="js-search">Ocean Gala</p></a>
                      
                        <a onclick="tosearch2('牛排')"><p class="js-search">牛排</p></a>
                      
                        <a onclick="tosearch2('精气神')"><p class="js-search">精气神</p></a>
                      
                        <a onclick="tosearch2('啤酒')"><p class="js-search">啤酒</p></a>
                      
                    </div>
                </div>
                <div class="history-c hot-search">
                    <p class="history-title"><span class="f14">·&nbsp;&nbsp;所有分类&nbsp;&nbsp;·</span></p>
                    <div class="clear" id="alltype"><ul id="ul"><li class="on"><a onclick="firstType(22,&quot;四时菜蔬&quot;)"><img src="http://www.yimishiji.com/public/images/a1/a6/6a/914b14c236311026f0773e162aeed02d6c55ba4f.png"><p>四时菜蔬</p></a></li><li class="on"><a onclick="firstType(43,&quot;安全水果&quot;)"><img src="http://www.yimishiji.com/public/images/7a/3d/34/04702dd64c106a89693f437f7d713cb2fbb83538.png"><p>安全水果</p></a></li><li class="on"><a onclick="firstType(25,&quot;肉禽蛋品&quot;)"><img src="http://www.yimishiji.com/public/images/0e/df/f0/c58c6eb89ea397ecc11081d888aae7726de1fa51.png"><p>肉禽蛋品</p></a></li><li class="on"><a onclick="firstType(57,&quot;水中鲜物&quot;)"><img src="http://www.yimishiji.com/public/images/40/82/eb/a46ca8fd18cddf5ab7abc1113b4fb883e567a1f5.png"><p>水中鲜物</p></a></li><li class="on"><a onclick="firstType(129,&quot;乳制品类&quot;)"><img src="http://www.yimishiji.com/public/images/79/0d/cc/865bc92bb82118f3ce5c277d91f660d10c5701d4.png"><p>乳制品类</p></a></li><li class="on"><a onclick="firstType(28,&quot;粮油酱醋&quot;)"><img src="http://www.yimishiji.com/public/images/c7/00/96/eb7db7fd3d4afc3c41d21d64f04c6707bbdc2464.png"><p>粮油酱醋</p></a></li><li class="on"><a onclick="firstType(31,&quot;吃吃零嘴&quot;)"><img src="http://www.yimishiji.com/public/images/a5/e4/44/898ec8c867a07b95d05b34d887696a3fc0ca8891.png"><p>吃吃零嘴</p></a></li><li class="on"><a onclick="firstType(71,&quot;饮料酒水&quot;)"><img src="http://www.yimishiji.com/public/images/c7/66/38/d8f5ae09576b313fe8324ee9fd7f9adf6d0190b0.png"><p>饮料酒水</p></a></li><li class="on"><a onclick="firstType(120,&quot;面点小食&quot;)"><img src="http://www.yimishiji.com/public/images/49/30/2d/17a4477b18cfbf72fa34c56de6279e49e2e4010e.png"><p>面点小食</p></a></li><li class="on"><a onclick="firstType(79,&quot;好物组合&quot;)"><img src="http://www.yimishiji.com/public/images/b4/bc/36/c257d6dbce6e35cd44fd94f2e08146e475148d64.png"><p>好物组合</p></a></li></ul></div>
                </div>
            </section>
        </div>
    </div>
  
</template>

<script>
export default {
  name: 'v-search-history',
  data () {
    return {
    }
  },
  components:{
  },
  ready(){
  }
}
</script>
