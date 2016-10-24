<template>
    <div id="slideBox" class="slideBox">      
      <div class="bd swiper-container floor-slide swiper-container-horizontal swiper-container-free-mode">
        <div class="tempWrap" style="overflow:hidden; position:relative;">
            <ul class="swiper-wrapper">
                <li v-for="pic in info.pictures" class="swiper-slide">
                    <a class="pic" href="javascript:void(0);">
                        <img :src="pic"/>
                    </a>
                    <div class="tit" v-if="$index == 0">
                        <div class="standard">
                            <ul>
                                <li> <p> {{info.specification || "暂无"}}</p> <p> 规格 </p> </li> 
                                <li> <p> {{info.storage_condition}} </p> <p> 保存方式 </p> </li>
                                <li> <p> {{info.durability}}天 </p> <p> 保质期 </p> </li>
                            </ul>
                        </div>
                    </div>
                </li>
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
                new Swiper('#slideBox', {
                    loop: true,
                    autoplay: 3000,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    autoplayDisableOnInteraction: false
                });
                // TouchSlide({
                //     slideCell:"#slideBox",
                //     titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
                //     mainCell:".bd ul",
                //     effect:"leftLoop",
                //     autoPage:true,//自动分页
                //     autoPlay:true //自动播放
                // });
            }
        },
        ready(){
            
        }
    }
</script>