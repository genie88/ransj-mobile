<template>
    <!--图片滑动广告-->
    <div class="floor-con">
    <div class="floor adver-slide">
        <div class="lr-slide">
            <div class="swiper-container floor-slide" id="scroll_ads_container">
                <div class="swiper-wrapper adver-wrapper" id="scroll_ads">
                    <div class="swiper-slide" v-for="item of list">
                        <div class="adver-box">
                            <a v-link="{path: '/article/'+ item.id}">
                                <img :src="item.pics" width="114" height="100" />
                                <p class="title clamp-one">{{item.title}}</p>
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
        props: ['list'],
        data(){
            return {
            }
        },
        components:{ 
        },
        watch: {
            'list': () => {
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
        },
        ready(){
            
        }
    }
</script>

<style>
    .adver {
        width: 40%;
        height: 100px;
        margin: 0px 12px;
    }
</style>