<template>
    <div class="order_nav" id="wrapper" style="overflow: hidden;">
        <ul class="order_scroll">
            <li class="on" id="0"><a href="javascript:;">全部订单</a></li>
            <li id="1"><a href="javascript:;">待付款</a></li>
            <li id="2"><a href="javascript:;">待收货</a></li>
            <li id="3"><a href="javascript:;">待评论</a></li>
            <li id="4"><a href="javascript:;">已完成</a></li>
            <li id="5"><a href="javascript:;">已作废</a></li>
        </ul>
    </div>
</template>

<script>    
    export default {
        name: 'v-tab-header',
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>