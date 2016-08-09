<template>
  <v-header></v-header>
  <v-catagory></v-catagory>
  <v-banner></v-banner>
  <v-ad-slider></v-ad-slider>
  <v-floor-txt-header></v-floor-txt-header>
  <v-good-slider></v-good-slider>
  <v-floor-image-header></v-floor-image-header>
  <v-good-slider></v-good-slider>
  <v-floor-image-header></v-floor-image-header>
  <v-good-slider></v-good-slider>
  <v-floor-image-header></v-floor-image-header>
  <v-good-list></v-good-list>
  <v-floor-image-header></v-floor-image-header>
  <v-good-list></v-good-list>
</template>

<script>
import vHeader from '../../../components/Header'
import vCatagory from '../../../components/Catagory'
import vBanner from '../../../components/Banner'
import vAdSlider from '../../../components/AdSlider'
import vGoodSlider from '../../../components/GoodSlider'
import vGoodList from '../../../components/GoodList'
import vFloorTxtHeader from '../../../components/FloorTxtHeader'
import vFloorImageHeader from '../../../components/FloorImageHeader'
export default {
  data () {
    return {
      DuckImage: require('../assets/Duck.jpg')
    }
  },
  components:{
    vHeader,
    vCatagory,
    vBanner,
    vAdSlider,
    vGoodSlider,
    vGoodList,
    vFloorTxtHeader,
    vFloorImageHeader
  }
}
</script>

<!-- <style src="./styles.css"></style> -->
