<template>
<!-- Make a div wrapped slider,set height and width -->
 <div class="wraps">
      <!-- Using the slider component -->
      <slider ref="slider" :options="options">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
      </slider>
 </div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
  data () {
    return {
      // data list [array]
      someList: [
        {
          html: 'slide1',
          style: {
            'background': '#1bbc9b'
          }
        },
        {
          html: 'slide2',
          style: {
            'background': '#4bbfc3'
          }
        },
        {
          html: 'slide3',
          style: {
            'background': '#7baabe'
          }
        }
      ],
      // Slider configuration [obj]
      options: {
        effect: 'slide',
        currentPage: 0,
        speed: 300,
        itemAnimation: true,
        centeredSlides: true,
        thresholdDistance: 100,
        thresholdTime: 300,
        slidesToScroll: 1
      }
    }
  },
  components: {
    slider,
    slideritem
  }
}
</script>
<style lang="less" scoped>
.wraps{
  width:100%;
  margin:20px auto;
  height:200px
}
</style>
