<template>
<section class="search-box searchgo">
    <a href="javascript:void(0);" onclick="history.go(-1)"><span class="arrow ml5 fl"></span></a>
    <div class="c-input boxflex-one fl">        
        <input id="text" type="text" placeholder="然生记" value="">
       <label class="iconfont search-icon"></label>    
        <span class="iconfont delete_x dn"></span>     
    </div>
    <div class="btn-box fr"><p id="searchBtn" class="f14">搜索</p></div>
</section>
  
</template>

<script>
export default {
  name: 'v-search-header',
  data () {
    return {
    }
  },
  components:{
  },
  ready(){
    $(".c-input input").keyup(function(){
        if ($(this).val().length > 0) {
            $(this).siblings(".search-icon").hide();
            $(this).siblings(".delete_x").show();
        }
        else{
            $(this).siblings(".search-icon").show();
            $(this).siblings(".delete_x").hide();
        }
    })
    $(".c-input input").focus(function(){
        if ($(this).val().length > 0) {
            $(this).siblings(".search-icon").hide();
            $(this).siblings(".delete_x").show();
        }
        else{
            $(this).siblings(".search-icon").show();
            $(this).siblings(".delete_x").hide();
        }
    })
        
    
    /*演示清除input（新的）*/
    $('body').on('click', '.delete_x', function() { 
        $(this).parent('.c-input').find('input').val("");
        $(this).parent('.c-input').find('input').focus();
    });
  }
}
</script>
