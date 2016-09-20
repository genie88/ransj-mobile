<template>
    <div class="show_pro_detail show" id="describtion">
        <div class="floor-head mt30 mb20">
            <div class="bold box box-center">
                  <p></p><span>尝过这一味</span><p></p>
            </div>
        </div> 
        <div class="detail_info">
            {{{info.content[0]}}}
        </div>
        <!-- 
        <div class="floor-head mt30 mb20">    
            <div class="bold box box-center">      
                <p></p><span>食物的背后</span><p></p>   
            </div> 
        </div> 
        <div class="detail_info">        
            <div class="article_con">在一品农庄可以看到每个鸡舍外面都设有三百平米的鸡只活动场，鸡可以在这里晒太阳、捉虫、伸展翅膀。「鸡需要紫外线的照射它才会更健康，你可以看到我们的鸡冠和别人家的鸡冠是不一样的。」一品农庄红标鸡的鸡冠确实红通通，看上去分外精神。</div>        
            <div class="mb10"><img src="http://www.yimishiji.com/public/images/e3/c7/65/d10d22990acd6b2062988c9de239e3b6d4400f9a.jpg?1447206822#w?1458906301#w"></div>        
            <div class="article_con">在一品农庄的负责人眼里，鸡其实跟人一样，都是会有感受的，给它一个好的环境，它才会很好地生长——一品农庄现在是一平方养四只鸡，对鸡来说，这是一个宽松、舒适的环境。同时，它们的饮用水都经过净化，再在其中加入酵素，就像人喝酸奶一样，起到保护红标鸡肠胃的作用。</div>        
            <div class="mb10"><img src="http://www.yimishiji.com/public/images/a4/fb/a6/377d3758c50f208c71e28da873c2869f850d2142.jpg?1447206690#w?1458906330#w"></div>        
            <div class="article_con">一品农庄带着红标鸡参加禽类的展览会，现场有试吃会，「鸡汤煮出来，很多消费者就说，你这个鸡汤里面有放味精。我们在煮的过程中，不放任何调料，不要焯水，就是跟盐结合，够了。」一品农庄的负责人在谈及红标鸡的美味时，给我们讲述了这个展会中的小插曲。</div>        
            <div class="mb10"><img src="http://www.yimishiji.com/public/images/bc/5d/e5/55ed23b7df818ee2348ecf58a4d0724b1d5f8cfa.jpg?1447207045#w?1458906387#w"></div>        
            <div class="article_con">一品农庄的鸡汤竟然让品尝的人产生了错觉，红标鸡的美味由此可见一斑。除了美味之外，红标鸡的营养含量亦是超出一众家鸡。它富含人体需要的氨基酸、蛋白质，含量高达23.4%，含较高的无机盐和微量元素，所含维生素比普通家鸡高一倍以上。</div>
        </div> -->
    </div>

    <!-- 展开查看更多 -->
    <div class="updown_more up">
        <p id="moreall">点击收起更多</p>
        <p><span class="updowns_arrow on"></span></p>
    </div>
</template>

<style>
    #describtion img{
        width: 100% !important;
    }
    #describtion p{
        font-size: 14px !important;
        line-height: 18px !important;
    }
    #describtion p span{
        width: 100%;
        text-align: center;
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 15px;
    }
</style>

<script>    
    export default {
        name: 'v-product-detail',
        props: ['info'],
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>