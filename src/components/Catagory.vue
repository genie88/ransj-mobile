<template>
    <div class="height45"></div>
    <!--一级分类开始-->
    <div class='classify-big style' id="classify-box">
        <div class="classify-all">
            <a href="http://m.yimishiji.com/shop_show_new/allproductslist.jsp" class="classify-icon">
                <img src="shop_show_new/images/classify/all.png">
            </a>
            <a href="http://m.yimishiji.com/shop_show_new/allproductslist.jsp" class="align-c">全部</a>
        </div>
        <div class="swiper-container classify togglon" id="classify">
            <ul class="swiper-wrapper"></ul>
        </div>
    </div>
</template>

<script>    
    export default {
        name: 'v-catagory',
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>