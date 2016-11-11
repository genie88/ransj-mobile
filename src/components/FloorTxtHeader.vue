<template>
    <section>
        <div class="floor-con">
            <div class="floor">
                <div class="floor-head">
                    <div class=" border-t bold align-c">
                        <span class="dot"></span>
                        &nbsp;{{title}}&nbsp;
                        <span class="dot"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>    
    export default {
        name: 'v-floor-txt-header',
        props: ['title', 'link'],
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