<template>
    <div class="height45"></div>
    <!--一级分类开始-->
    <div class='classify-big' id="classify-box">
        <div class="classify-all">
            <a v-link="{path: '/list/108'}" class="classify-icon">
                <img src="../static/images/classify/all.png">
            </a>
            <a v-link="{path: '/list/108'}" class="align-c">全部</a>
        </div>
        <div class="swiper-container classify togglon" id="classify">
            <ul class="swiper-wrapper">
                <li class="swiper-slide swiper-slide-active" v-for="cate in cates">
                    <div class="classify-con">
                        <a v-link="{path: '/list/' + cate.id}" class="classify-icon">
                            <img :src="'/images/classify/'+ cate.id + '.png'">
                        </a>
                        <a v-link="{path: '/list/' + cate.id}" class="classify-name">
                            {{cate.name}}
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>    
    export default {
        name: 'v-catagory',
        props: ['cates'],
        data(){
            return {
            }
        },
        components:{ 

        },
        watch: {
            'cates': (newval, oldval)=>{
                //分类水平滑动
                let adverSlide = new Swiper('.classify', {
                    slidesPerView: 4.7,
                    spaceBetween: 5,
                    paginationClickable: true,
                    freeMode: true,
                    slidesOffsetBefore: 65,
                    slidesOffsetAfter: 10,
                });
            }
        },
        ready(){
        }
    }
</script>


<style>

    /**增加这两个样式是为了即使Slider没有加载好，看起来也不会有问题*/
    .classify li {
        max-width: 79px;
    }
    .classify ul{
        transform: translate3d(65px, 0px, 0px);
    }
</style>