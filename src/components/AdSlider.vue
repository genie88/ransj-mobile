<template>
    <!--图片滑动广告-->
    <div class="floor-con">
    <div class="floor adver-slide">
        <div class="lr-slide">
            <div class="swiper-container floor-slide" id="scroll_ads_container">
                <div class="swiper-wrapper adver-wrapper" id="scroll_ads">
                    <div class="swiper-slide">
                        <div class="adver-box">
                            <a href="">
                                <img src="http://m.yimishiji.com/images/banner/1470448224471.jpg">
                                <p class="title clamp-one">竹海里的有机土鸡蛋</p>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="adver-box">
                            <a href="">
                                <img src="http://m.yimishiji.com/images/banner/1468986267466.jpg">
                                <p class="title clamp-one">买啤酒送果蔬干</p>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="adver-box">
                            <a href="">
                                <img src="http://m.yimishiji.com/images/banner/1467186016297.jpg">
                                <p class="title clamp-one">吃醋的女人最可爱</p>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="adver-box">
                            <a href="">
                                <img src="http://m.yimishiji.com/images/banner/1468996867778.jpg">
                                <p class="title clamp-one">不用农药怎么种田</p>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-slide" style="width: 144px; margin-right: 10px;">
                        <div class="adver-box">
                            <a href="">
                                <img src="http://m.yimishiji.com/images/banner/1467358391955.jpg">
                                <p class="title clamp-one">送达范围及时段说明</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>    
    export default {
        name: 'v-ad-slider',
        data(){
            return {
            }
        },
        components:{ 
        },
        ready(){
            let adSlider = new Swiper('#scroll_ads_container', {
                slidesPerView: 2.5,
                paginationClickable: true,
                spaceBetween: 10,
                freeMode: true,
                slidesOffsetBefore: 10,
                slidesOffsetAfter: 10,
                lazyLoadingInPrevNext : true,
                lazyLoading : true
            });
        }
    }
</script>