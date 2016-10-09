<template>
    <div class="order_nav swiper-container" id="wrapper" style="overflow: hidden;">
        <ul class="order_scroll swiper-wrapper">
            <li class="swiper-slide" 
                v-for="tab in tabs" 
                :class="tab.current? 'on' : ''" 
                data-index="{{tab.index}}">
                <a @click="tabClicked(tab.index)" v-link="{path: tab.link}">{{tab.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>    
    export default {
        name: 'v-tab-header',
        props: ['tabs'],
        data(){
            return {
            }
        },
        methods: {
            tabClicked(index){
                this.$dispatch('tabchange', index);
            }
        },
        watch: {
            'tabs': function(newval, oldval) {
                
            }
        },
        components:{
        },
        ready(){
            let tabHeaderNav = new Swiper('.order_nav', {
                slidesPerView: 5,
                paginationClickable: true,
                spaceBetween: 10,
                freeMode: true,
                slidesOffsetBefore: 10,
                slidesOffsetAfter: 10
            });
        }
    }
</script>