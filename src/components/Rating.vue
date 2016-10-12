<template>
    <p>
        <span>评分</span>
        <span class="average_stars">
            <span class="avstar redstar" style="width: 100%;">
            </span>
        </span>
    </p>
</template>

<script>    
    export default {
        name: 'v-rating',
        props: {
            rate:{
                type: Number,
                default: 5.0
            },
        },
        data(){
            return {
                rating: 5,
                width: '100' // 100%
            }
        },
        methods: {
            
        },
        ready(){
          
        }
    }
</script>