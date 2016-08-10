<template>
    <!-- 产品展示卡片 -->

    <!-- 基本信息 -->
    <div class="product_detail_name">
      <p class="c_b0c2cc" id="farmer">一品农庄</p>
      <p class="c_1e384b f15 mb5" id="name">红标鸡鸡翅（半翅）</p>
      <p><span class="c_1e384b f12">¥<span class="f16 fb" id="good_unit">38.00</span></span><span id="price" class="c_999 f12 txdth ml5"></span></p>
      <span class="lovein"></span>
      <span class="fly_texts">已喜欢</span>
    </div>

    <!-- 促销 -->
    <p class="bdredline wd90 m0 txtc mb20 pre"><span class="giftbox"><img src="/mine_2.0/img/icon/giftbox.png"></span></p>
    <div class="pro_act">
     促销信息展示在这里
    </div>

    <!-- 产品标签 -->
    <div class="pro_tag">
      <div class="pro_tag_list" id="wrapper" style="overflow: hidden;">
        <ul class="scrolls" style="width: 368px; transform-origin: 0px 0px 0px; position: absolute; top: 0px; left: 0px;"><li><a href="http://www.yimishiji.com/public/files/detection_report/a907948c6db509e82731749c191bed94.pdf"><img src="/mine_2.0/images/report/badge_sgs.png"></a></li><li><a href="javascript:void(0);"><img src="http://www.yimishiji.com/public/images/69/86/a2/73c685cf7ee1f694d9846da51fafae9b3cfc2a46.png?1458874062#h"><p>无激抗</p></a></li><li><a href="javascript:void(0);"><img src="http://www.yimishiji.com/public/images/15/fe/e7/46d909f6ac25b3f3f0246dab4e18775a7d57334d.png?1458880036#h"><p>一米亲访</p></a></li><li><a href="javascript:void(0);"><img src="http://www.yimishiji.com/public/images/b8/73/c3/74edbcf6a437ebea3a73bf6666af0bd6851119b2.png?1458878035#h"><p>走地散养</p></a></li></ul>
      </div>
    </div>

</template>

<script>    
    export default {
        name: 'v-product-card',
        data(){
            return {
            }
        },
        components:{
        },
        ready(){
            var iscrollWidth;
            var liLength = $(".pro_tag_list ul li").length;
            var liWidth = $(".pro_tag_list ul li").width();  
            var divWidth = $(".pro_tag_list").width();
            var ulWidth = liWidth*liLength + (liLength - 1)*5;  
            
            if(ulWidth<=divWidth){
                $(".pro_tag_list ul").addClass("pul").css("width",ulWidth);
            } else {
                iscrollWidth = ( liWidth + 8 )* liLength;
                $(".scrolls").css("width",iscrollWidth); 
                var myscroll = new iScroll("wrapper", {
                    hScrollbar:false, 
                    vScrollbar:false,
                    vScroll:false
                });
            }
        }
    }
</script>