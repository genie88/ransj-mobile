<template>
  <v-catagory></v-catagory>
  <v-banner></v-banner>
  <v-ad-slider></v-ad-slider>
  <v-floor-txt-header></v-floor-txt-header>
  <v-floor-image-header></v-floor-image-header>
  <v-floor-image-header></v-floor-image-header>
</template>

<script>
import vCatagory from '../../../components/Catagory'
import vBanner from '../../../components/Banner'
import vAdSlider from '../../../components/AdSlider'
import vFloorTxtHeader from '../../../components/FloorTxtHeader'
import vFloorImageHeader from '../../../components/FloorImageHeader'
export default {
  data () {
    return {
      DuckImage: require('../assets/Duck.jpg')
    }
  },
  components:{
    vCatagory,
    vBanner,
    vAdSlider,
    vFloorTxtHeader,
    vFloorImageHeader
  }
}
</script>

<!-- <style src="./styles.css"></style> -->
