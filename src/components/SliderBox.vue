<template>
    <div id="slideBox" class="slideBox">      
      <div class="bd">
        <div class="tempWrap" style="overflow:hidden; position:relative;">
            <ul>
                <li v-for="pic in info.pictures">
                    <a class="pic" href="javascript:void(0);">
                        <img src="{{pic}}"/>
                    </a>
                </li>
                <!-- <li >
                    <a class="pic" href="javascript:void(0);">
                        <img src="http://www.yimishiji.com//public/images/ff/5c/66/72d9a66c7f805ba5f047630dede95f431d3f95cf.jpg"/>
                    </a>
                    <div class="tit">
                        <div class="standard">
                            <ul>
                                <li>
                                    <p>
                                        {{info.specification}}
                                    </p>
                                    <p>
                                        规格
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        {{info.storage_condition}}
                                    </p>
                                    <p>
                                        保存方式
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        {{info.durability}}天
                                    </p>
                                    <p>
                                        保质期
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <a class="pic" href="javascript:void(0);">
                        <img src="http://www.yimishiji.com//public/images/db/0d/a1/f8d5dd707d9b1a04c230c0b8453f95a1550b1612.jpg"/>
                    </a>
                </li>
                <li>
                    <a class="pic" href="javascript:void(0);">
                        <img src="http://www.yimishiji.com//public/images/81/f9/d8/6a7b7bcfadf2f9789cef9e9056df1b503eebd87b.jpg"/>
                    </a>
                </li> -->
            </ul>
        </div>
      </div>

      <div class="hd">
        <ul></ul>
      </div>
    </div>
</template>

<script>    
    export default {
        name: 'v-slider-box',
        props: ['info'],
        data(){
            return {
            }
        },
        components:{
        },
        watch: {
            'info.pictures': () => {
                TouchSlide({
                    slideCell:"#slideBox",
                    titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
                    mainCell:".bd ul",
                    effect:"leftLoop",
                    autoPage:true,//自动分页
                    autoPlay:true //自动播放
                });
            }
        },
        ready(){
            
        }
    }
</script>