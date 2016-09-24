<template>
    <section>
        <div class="floor-con">
            <div class="floor">
                <div class="floor-head">
                    <div class="border-t">
                        <a href="{{link}}">
                            <img class="lazy" :src="image" style="display: block;">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>    
    export default {
        name: 'v-floor-image-header',
        props: ['image', 'link'],
        data(){
            return {
            }
        },
        components:{ 
        },
        ready(){
            
        }
    }
</script>