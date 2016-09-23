<template>
    <section class="wd90 m0">
        <div class="txtc wrongPage">
            <p class="wd50 m0"><img src="/img/icon/error.png"></p>
            <p class="f20 fb mt20">出错!</p>
            <p class="mt20 f16">您的食物被网络截断了</p>
            <p class="mt10 f12 c_999">请检查您的网络连接是否断开...</p>
            <div class="wrong_go">
                <a href="/" class="fl" id="backindex">返回首页</a>
                <a href="#" class="fr" id="tryagain">再试一次</a>
            </div>
        </div>
    </section>
</template>

<script>    
    export default {
        name: 'v-error-page',
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>