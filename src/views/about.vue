<template>
  <div class="about">
    <div class="banner">
      <carousel :interval="3000" :loop="true" :autoplay="true">
        <carousel-item v-for="(item, index) in imgList" :key="index">
          <div :class="['block', `block-${index+1}`]">{{index}}</div>
        </carousel-item>
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from '@/components/carousel/index.vue'
import carouselItem from '@/components/carousel/carousel-item.vue'
export default {
  components:{
    carousel,
    carouselItem
  },
  data() {
    return {
      imgList: [
        {src: '../assets/images/carousel1.jpg'},
        {src: '@/assets/images/carousel2.jpg'},
        {src: '@/assets/images/carousel3.jpg'},
      ],
    }
  },
  created(){
    
  },
  methods: {
    
    
  },
}
</script>

<style lang="scss" scoped>
.about{
  .banner{
    width: 1000px;
    height: 400px;
    margin: 0 auto;
    .block{
      width: 100%;
      height: 100%;
      font-size: 50px;
      line-height: 400px;
      text-align: center;
    }
    .block-1{
      background-color: pink;
    }
    .block-2{
      background-color: lime;
    }
    .block-3{
      background-color: skyblue;
    }
  }
}
</style>