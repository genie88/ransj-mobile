<template>
    <!--轮播-->
    <div class="swiper-container" id="banner">
        <div class="swiper-wrapper banner-wrapper">            
                <div class="swiper-slide">
                    <a href="" target="_blank">
                        <img src="../static/uploads/banner/1470144609736.jpg" alt="">
                    </a>
                </div>
            
                <div class="swiper-slide">
                    <a href="" target="_blank">
                        <img src="../static/uploads/banner/1470145564674.jpg" alt="">
                    </a>
                </div>
            
                <div class="swiper-slide">
                    <a href="" target="_blank">
                        <img src="../static/uploads/banner/1470618643247.jpg" alt="">
                    </a>
                </div>
            
        </div>
        <div class="swiper-pagination">
            <span class="swiper-pagination-bullet"></span>
        </div>
    </div>
    <!--/轮播end-->
</template>

<script>    
    export default {
        name: 'v-banner',
        data(){
            return {
            }
        },
        components:{ 
        },
        ready(){
            new Swiper('#banner', {
                loop: true,
                autoplay: 3000,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplayDisableOnInteraction: false
            });
        }
    }
</script>