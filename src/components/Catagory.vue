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
            <li class="swiper-slide swiper-slide-active" >
                <div class="classify-con">
                <a href="" class="classify-icon">
                <img src="http://www.yimishiji.com/public/images/a1/a6/6a/914b14c236311026f0773e162aeed02d6c55ba4f.png">
                </a>
                <a href="?cat_id=22&amp;catName=四时菜蔬" class="classify-name">四时菜蔬</a>
                </div>
            </li>
            <li class="swiper-slide swiper-slide-next" >
                <div class="classify-con">
                <a href="?cat_id=43&amp;catName=安全水果" class="classify-icon"> 
                <img src="http://www.yimishiji.com/public/images/7a/3d/34/04702dd64c106a89693f437f7d713cb2fbb83538.png">
                </a>
                <a href="?cat_id=43&amp;catName=安全水果" class="classify-name">安全水果</a>
                </div>
            </li>
            <li class="swiper-slide" >
            <div class="classify-con">
            <a href="?cat_id=25&amp;catName=肉禽蛋品" class="classify-icon">
                <img src="http://www.yimishiji.com/public/images/0e/df/f0/c58c6eb89ea397ecc11081d888aae7726de1fa51.png">
            </a>
            <a href="?cat_id=25&amp;catName=肉禽蛋品" class="classify-name">肉禽蛋品</a>
            </div>
            </li>
            <li class="swiper-slide" >
            <div class="classify-con">
            <a href="?cat_id=57&amp;catName=水中鲜物" class="classify-icon">
            <img src="http://www.yimishiji.com/public/images/40/82/eb/a46ca8fd18cddf5ab7abc1113b4fb883e567a1f5.png"></a>
            <a href="?cat_id=57&amp;catName=水中鲜物" class="classify-name">水中鲜物</a>
            </div>
            </li>
            <li class="swiper-slide" >
            <div class="classify-con">
            <a href="?cat_id=129&amp;catName=乳制品类" class="classify-icon">
            <img src="http://www.yimishiji.com/public/images/79/0d/cc/865bc92bb82118f3ce5c277d91f660d10c5701d4.png"></a>
            <a href="?cat_id=129&amp;catName=乳制品类" class="classify-name">乳制品类</a>
            </div>
            </li>
            <li class="swiper-slide" ><div class="classify-con"><a href="?cat_id=28&amp;catName=粮油酱醋" class="classify-icon"><img src="http://www.yimishiji.com/public/images/c7/00/96/eb7db7fd3d4afc3c41d21d64f04c6707bbdc2464.png"></a><a href="?cat_id=28&amp;catName=粮油酱醋" class="classify-name">粮油酱醋</a></div></li><li class="swiper-slide" ><div class="classify-con"><a href="?cat_id=31&amp;catName=吃吃零嘴" class="classify-icon"><img src="http://www.yimishiji.com/public/images/a5/e4/44/898ec8c867a07b95d05b34d887696a3fc0ca8891.png"></a><a href="?cat_id=31&amp;catName=吃吃零嘴" class="classify-name">吃吃零嘴</a></div></li><li class="swiper-slide" ><div class="classify-con"><a href="?cat_id=71&amp;catName=饮料酒水" class="classify-icon"><img src="http://www.yimishiji.com/public/images/c7/66/38/d8f5ae09576b313fe8324ee9fd7f9adf6d0190b0.png"></a><a href="?cat_id=71&amp;catName=饮料酒水" class="classify-name">饮料酒水</a></div></li><li class="swiper-slide" ><div class="classify-con"><a href="?cat_id=120&amp;catName=面点小食" class="classify-icon"><img src="http://www.yimishiji.com/public/images/49/30/2d/17a4477b18cfbf72fa34c56de6279e49e2e4010e.png"></a><a href="?cat_id=120&amp;catName=面点小食" class="classify-name">面点小食</a></div></li><li class="swiper-slide" ><div class="classify-con"><a href="?cat_id=79&amp;catName=好物组合" class="classify-icon"><img src="http://www.yimishiji.com/public/images/b4/bc/36/c257d6dbce6e35cd44fd94f2e08146e475148d64.png"></a><a href="?cat_id=79&amp;catName=好物组合" class="classify-name">好物组合</a></div></li></ul>
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

        },
        ready(){
            //分类水平滑动
            var adverSlide = new Swiper('.classify', {
                slidesPerView: 4.7,
                spaceBetween: 5,
                paginationClickable: true,
                freeMode: true,
                slidesOffsetBefore: 65,
                slidesOffsetAfter: 10,
            });
        }
    }
</script>