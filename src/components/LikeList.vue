<template>
    <ul class="like_pro_list">
        <li>
            <div class="proList_l">
                <a href="/mine_2.0/show_product?product_id=1571&goods_id=1026">
                    <img src="http://www.yimishiji.com/public/images/bb/3c/5d/527f3d38bd4fffac3b39629e225f0433f9dd627f.png?1459156653#h"/>
                </a>
            </div>
            <div class="proList_r">
                <p class="l_p_title f14 c_1b374b">
                    [预售]横沙岛主 鲜牛腱*3
                </p>
                <p class="l_p_f f12 mt5">
                    方叔家出品 1200g
                </p>
                <p class="l_p_price f14 c_81ad94 mt5">
                    ￥162.00
                </p>
                <span class="l_p_del_btn" onclick="cancel(1026)">
                </span>
                <span class="l_p_buy_btn" onclick='addCart(this,"[预售]横沙岛主 鲜牛腱*3",1026,1571,true)'>
                </span>
            </div>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'v-like-list',
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>