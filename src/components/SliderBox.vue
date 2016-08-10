<template>
    <div id="slideBox" class="slideBox">      
      <div class="bd">
        <div class="tempWrap" style="overflow:hidden; position:relative;"><ul style="width: 2250px; position: relative; overflow: hidden; padding: 0px; margin: 0px; transition-duration: 0ms; transform: translate(-375px, 0px) translateZ(0px);"><li style="display: table-cell; vertical-align: top; width: 375px;"><a class="pic" href="javascript:void(0);"><img style="width:100%;max-height:500px;" src="http://www.yimishiji.com//public/images/e6/34/c7/a7e62bb2f1efc7ddb95602a1a9c0e19c491512dd.jpg"></a></li><li style="display: table-cell; vertical-align: top; width: 375px;"><a class="pic" href="javascript:void(0);"><img style="width:100%;max-height:500px;" src="http://www.yimishiji.com//public/images/ff/5c/66/72d9a66c7f805ba5f047630dede95f431d3f95cf.jpg"></a><div class="tit"><div class="standard"><ul><li><p>200g/份</p><p>规格</p></li><li><p>冷冻</p><p>保存方式</p></li><li><p>180天</p><p>保质期</p></li></ul></div></div></li><li style="display: table-cell; vertical-align: top; width: 375px;"><a class="pic" href="javascript:void(0);"><img style="width:100%;max-height:500px;" src="http://www.yimishiji.com//public/images/db/0d/a1/f8d5dd707d9b1a04c230c0b8453f95a1550b1612.jpg"></a></li><li style="display: table-cell; vertical-align: top; width: 375px;"><a class="pic" href="javascript:void(0);"><img style="width:100%;max-height:500px;" src="http://www.yimishiji.com//public/images/81/f9/d8/6a7b7bcfadf2f9789cef9e9056df1b503eebd87b.jpg"></a></li><li style="display: table-cell; vertical-align: top; width: 375px;"><a class="pic" href="javascript:void(0);"><img style="width:100%;max-height:500px;" src="http://www.yimishiji.com//public/images/e6/34/c7/a7e62bb2f1efc7ddb95602a1a9c0e19c491512dd.jpg"></a></li><li style="display: table-cell; vertical-align: top; width: 375px;"><a class="pic" href="javascript:void(0);"><img style="width:100%;max-height:500px;" src="http://www.yimishiji.com//public/images/ff/5c/66/72d9a66c7f805ba5f047630dede95f431d3f95cf.jpg"></a><div class="tit"><div class="standard"><ul><li><p>200g/份</p><p>规格</p></li><li><p>冷冻</p><p>保存方式</p></li><li><p>180天</p><p>保质期</p></li></ul></div></div></li></ul></div>
      </div>

      <div class="hd">
        <ul><li class="on">1</li><li class="">2</li><li class="">3</li><li class="">4</li></ul>
      </div>
    </div>
</template>

<script>    
    export default {
        name: 'v-slider-box',
        data(){
            return {
            }
        },
        components:{
        },
        ready(){
            TouchSlide({
                slideCell:"#slideBox",
                titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
                mainCell:".bd ul",
                effect:"leftLoop",
                autoPage:true,//自动分页
                autoPlay:true //自动播放
            });

        }
    }
</script>