<template>
    <!-- 产品展示卡片 -->

    <!-- 基本信息 -->
    <div class="product_detail_name">
      <p class="c_b0c2cc" id="farmer">{{info.farmer.title}}</p>
      <p class="c_1e384b f15 mb5" id="name">{{info.title}}</p>
      <p>
        <span class="c_1e384b f12">
            现价¥
            <span class="f16 fb" id="good_unit"> 
                {{info.price | getPrice 0}} 
            </span>
        </span>
        <span id="price" class="c_999 f12 txdth ml5">
            原价¥{{info.price | getPrice 1}}
        </span>
      </p>
      <!-- loveinred -->
      <span class="lovein" :class="hasLiked? 'loveinred': ''" @click="onLikeClick(info.id)"></span>
      <!-- loveanimate greytext -->
      <span class="fly_texts loveanimate greytext">已喜欢</span>
    </div>

    <!-- 促销 -->
    <p class="bdredline wd90 m0 txtc mb20 pre"><span class="giftbox"><img src="../static/img/icon/giftbox.png"></span></p>
    <div class="pro_act" style="text-align:left;">
     {{info.description}}
    </div>

    <!-- 产品标签 -->
    <div class="pro_tag">
      <div class="pro_tag_list" id="wrapper" style="overflow: hidden;">
        <ul class="scrolls" style="width: 368px; transform-origin: 0px 0px 0px; position: absolute; top: 0px; left: 0px;">
            <li>
                <a href="http://www.yimishiji.com/public/files/detection_report/a907948c6db509e82731749c191bed94.pdf">
                <img src="../static/images/report/badge_sgs.png">
                </a>
            </li>
            <li v-for="tag in info.tags">
                <a href="javascript:void(0);">
                    <img src="../static/images/report/wujishu.png">
                    <p>{{tag.name}}</p>
                </a>
            </li>
        </ul>
      </div>
    </div>

</template>

<script>   
import { mapActions, mapGetters } from 'vuex' 
    export default {
        name: 'v-product-card',
        props: ['info'],
        data(){
            return {
                hasLiked: false
            }
        },
        computed: {

        },
        methods: {
            ...mapActions(['addToLike', 'dislike']),

            //喜爱按钮点击事件
            onLikeClick(id){
                //判断是否登录，未登录提示登录
                if(!this.$data.hasLiked) {
                    //如果没有喜欢过，则为添加到喜欢
                    this.addToLike(id).then((json) => {
                        this.$data.hasLiked = true;
                    })
                } else {
                    //如果已经喜欢过，则为取消喜欢
                    this.dislike(id).then((json) => {
                        this.$data.hasLiked = false;
                    })
                }
                
            }
        },

        components:{

        },

        watch: {
            'info.tags': function() {
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
        },
        ready(){
            
        }
    }
</script>