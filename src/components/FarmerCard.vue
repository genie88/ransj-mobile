<template>
    <div class="floor-head pt30 mb20">
      <div class="bold box box-center">
        <p></p><span>农友伙伴</span><p></p>
      </div>
    </div>

    <div class="txtc" id="farmer_detail">
        <p><img src="{{info.farmer.cover_image}}"></p>
        <p class="mt15 fb">{{info.farmer.title}}</p>
        <p class="c_afc1cb mt10">{{info.farmer.location}}</p>
        <p class="c_b0c2cc mb20"></p>
        <p>{{info.farmer.description}}</p>
        <p></p>
        <!-- <a v-link="{path: '/farmer/'+info.farmer.id}" class="txtc c_b0c2cc pt20 mb20 pre">
            <p>点击查看农场故事</p>
            <p><span class="updowns_arrow right"></span></p>
        </a> -->
    </div>

    <div class="floor-head pt30 mb20">
      <div class="bold box box-center">
        <p></p><span>农场好物</span><p></p>
      </div>
    </div>

    <v-good-list :list="farmergoods" :more=""></v-good-list>

</template>

<script>   
import vGoodList from './GoodList' 
export default {
    name: 'v-farmer-card',
    props: ['info', 'farmGoodList', 'farmergoods'],
    data(){
        return {
        }
    },
    components:{
        vGoodList
    }
}
</script>