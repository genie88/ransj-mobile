<template>
    <header>
        <span class="arrow" onclick="javascript:history.go(-1);"></span>
        <p id="" class="">{{title}}</p>    
        <div class="list_pix wd10">
            <a class="c_afc1cb f13" id="edit">{{btn}}</a>
        </div>
    </header>
</template>

<script>    
    export default {
        name: 'v-secondary-nav',
        props: ['title', 'btn'],
        data(){
            return {
            }
        },
        components:{
        }
    }
</script>