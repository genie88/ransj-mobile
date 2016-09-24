<template>
    <div class="lr-slide">
        <div class="floor-product-list">
            <ul class="clearfloat">
                <li v-for="item of list">
                    <div class="c-goods">
                        <div class="goods-pic">
                            <a v-link="{path: '/product/'+ item.id}">
                                <img class="lazy" :src="item.pics" style="display: block;border-radius: 60px;" width="158" height="158">
                            </a>
                            <div class="addto-cart">
                                <div class="turn">
                                    <span class="add-btn"></span>
                                </div>
                            </div>
                        </div>
                        <div class="c-goods-detail">
                            <a href="/show_product?product_id=1057&amp;goods_id=551">
                            <span class="title clamp-one">
                                {{item.title}}
                            </span>
                            </a>
                        <span class="sub-title clamp-one">
                            <!-- 锦菜园&nbsp;450g -->
                        </span>
                            <p class="price">
                            <span class="green bold mr3">
                                ¥ {{item.price}}
                            </span>
                            </p>
                        </div>
                    </div>
                </li>
                <li v-if="more">
                    <div class="c-goods">
                        <div class="goods-pic">
                            <a v-link="{path: '{{more.title}}'}">
                                <img class="lazy" :src="more.image" style="display: block;">
                            </a>
                        </div>
                        <div class="c-goods-detail">
                            <p class="more green">
                                <a href="" class="green bold mr3">
                                    {{more.title}}<!-- 更多四时菜蔬 -->
                                </a>
                            </p>
                            <p class="more-icon "><span class="green-bg"></span></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>    
    export default {
        name: 'v-home-good-list',
        props: ['list', 'more'],
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