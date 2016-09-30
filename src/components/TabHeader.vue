<template>
    <div class="order_nav" id="wrapper" style="overflow: hidden;">
        <ul class="order_scroll">
            <li :class="tab.current? 'on' : ''" v-for="tab in tabs" data-index="{{tab.index}}">
                <a @click="tabClicked(tab.index)" v-link="{path: tab.link}">{{tab.name}}</a>
            </li>
        </ul>
    </div>
</template>

<script>    
    export default {
        name: 'v-tab-header',
        props: ['tabs'],
        data(){
            return {
            }
        },
        methods: {
            tabClicked(index){
                this.$dispatch('tabchange', index);
            }
        },
        watch: {
            'tabs': function(newval, oldval) {
                
            }
        },
        components:{
        }
    }
</script>