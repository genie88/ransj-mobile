<template>
    <header>
        <span class="arrow" onclick="javascript:history.go(-1);"></span>
        <p id="" class="">购物篮</p>    
        <div class="list_pix wd10">
            <a href="javascript:;" class="c_afc1cb f13" onclick="if(this.text=='编辑') { editOpen(); } else {editClose(); }" id="edit">编辑</a>
        </div>
    </header>
</template>

<script>    
    export default {
        name: 'v-secondary-nav',
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>