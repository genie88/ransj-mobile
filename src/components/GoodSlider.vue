<template>
    <div class="lr-slide" id="verGoodsSec">
    <div class="swiper-container floor-slide swiper-container-horizontal swiper-container-free-mode">
        <div class="swiper-wrapper floor-wrapper">
            <div class="swiper-slide swiper-slide-active" v-for="item in list">
                <div class="c-goods new-goods">
                        <div class="goods-pic">
                            <a v-link="{path: '/product/' + item.id}">
                                <img :src="item.image+ '?imageView2/1/w/135/h/135'" style="border-radius:50px;">
                                <i class="new-label"></i>
                            </a>
                            <div class="addto-cart">
                                <div class="turn">
                                    <span class="add-btn"></span>
                                </div>
                            </div>
                        </div>
                        <div class="c-goods-detail">
                            <a v-link="{path: '/product/' + item.id}">
                                <span class="title clamp-one">
                                   {{item.title}}
                                </span>
                            </a>
                            <span class="sub-title clamp-one">  
                                {{item.farm}}&nbsp;{{item.specs}}
                            </span>
                            <p class="price">
                                <span class="green bold mr3">
                                    ¥{{item.price}}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>    
    export default {
        name: 'v-good-slider',
        props: ['list'],
        data(){
            return {
            }
        },
        components:{ 
        },
        watch: {
            'list': () => {
                //图片水平滑动
                var productSlide = new Swiper('.floor-slide', {
                    slidesPerView: 2.5,
                    paginationClickable: true,
                    spaceBetween: 10,
                    freeMode: true,
                    slidesOffsetBefore: 10,
                    slidesOffsetAfter: 10
                });
            }
        },
        ready(){
           
            
        }
    }
</script>