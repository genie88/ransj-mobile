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
    <p class="bdredline wd90 m0 txtc mb20 pre"><span class="giftbox"><img src="../static/img/icon/giftbox.png"></span></p>
    <div class="pro_act">
     促销信息展示在这里
    </div>

    <!-- 产品标签 -->
    <div class="pro_tag">
      <div class="pro_tag_list" id="wrapper" style="overflow: hidden;">
        <ul class="scrolls" style="width: 368px; transform-origin: 0px 0px 0px; position: absolute; top: 0px; left: 0px;"><li><a href="http://www.yimishiji.com/public/files/detection_report/a907948c6db509e82731749c191bed94.pdf"><img src="../static/images/report/badge_sgs.png"></a></li><li><a href="javascript:void(0);"><img src="../static/images/report/wujishu.png"><p>无激抗</p></a></li><li><a href="javascript:void(0);"><img src="../static/images/report/zoufang.png"><p>一米亲访</p></a></li><li><a href="javascript:void(0);"><img src="../static/images/report/sanyang.png"><p>走地散养</p></a></li></ul>
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