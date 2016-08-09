<template>
    <div class="height45"></div>
    <!--一级分类开始-->
    <div class='classify-big' id="classify-box">
        <div class="classify-all">
            <a href="/#!/all-products" class="classify-icon">
                <img src="../static/images/classify/all.png">
            </a>
            <a href="/#!/all-products" class="align-c">全部</a>
        </div>
        <div class="swiper-container classify togglon" id="classify">
            <ul class="swiper-wrapper">
                
            </ul>
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