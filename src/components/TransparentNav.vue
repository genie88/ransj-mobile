<template>
    <div class="share_back">
        <a class=" fl" href="javascript:history.go(-1);">
            <span class="arrow"></span>
        </a>
        <a class="gokefu fr mr5" href="javascript:void(0)">
            <img src="../static/img/user_icon/service2x.png">
        </a>
    </div>
</template>

<script>    
    export default {
        name: 'v-transparent-nav',
        data(){
            return {
            }
        },
        components:{
        },
        ready(){
            // 滚动改变头部
             $(window).scroll(function() {
                 var scrollY = $(window).scrollTop();// 获取垂直滚动的距离，即滚动了多少        
                 var slideHeight = $(".slideBox").height();
                 var tabHeight = $(".section_one").height();
                 if (scrollY > slideHeight/5){  
                     // 向下滚动
                   $(".share_back").css({background:"rgba(255,255,255,1)","border-bottom":"1px solid #eef3f5",transitionDuration: ".8s",transitionProperty: "all",transitionTimingFunction: "ease-in-out"});
                   $(".share_back").addClass("boxShadow");  
                   $(".show_font").css("opacity",1);
                 } 
                 else {
                     // 向上滚动
                    $(".share_back").css({background:"rgba(255,255,255,0)","border-bottom":"none",transitionDuration: ".8s",transitionProperty: "all",transitionTimingFunction: "ease-in-out"});
                   $(".share_back").removeClass("boxShadow"); 
                   $(".show_font").css("opacity",0)
                 }
                 if(scrollY >= tabHeight){
                   $(".pros_tab").addClass("tabfixed");
                 }
                 else{
                   $(".pros_tab").removeClass("tabfixed");
                 }
             })
        }
    }
</script>