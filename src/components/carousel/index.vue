<template>
  <div class="index"
       @mouseenter="handleMouseenter"
       @mouseleave="handleMouseleave">
    <div class="arrow arrow-left"
         @click="pre">
      <span class="iconfont icon-previewleft"></span>
    </div>
    <div class="imgs">
      <slot></slot>
    </div>
    <div class="arrow arrow-right"
         @click="next">
      <span class="iconfont icon-previewright"></span>
    </div>
    <ul>
      <li v-for="(item, index) in items"
          :key="index"
          :class="[activeIndex === index?'active': '']"
          @click="dotClick(index)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    interval: {
      type: Number,
      default: 300,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      items: [],
      activeIndex: 0,
      timer: null,
    }
  },
  mounted() {
    this.updateItems()
    if (this.autoplay && this.interval > 0) {
      this.startTimer()
    }
  },
  methods: {
    handleMouseenter() {
      this.pause()
    },
    handleMouseleave() {
      if (this.autoplay) {
        this.startTimer()
      }
    },
    updateItems() {
      this.items = this.$children.filter(
        (child) => child.$options.name === 'CarouselItem'
      )
    },
    setActiveItem(index){
      console.log(index);
      let len = this.items.length
      if(index < 0){
        this.activeIndex = this.loop ? len - 1 : 0
      }else if(index >= len){
        this.activeIndex = this.loop ? 0 : len - 1
      }else{
        this.activeIndex = index
      }
    },
    next() {
      this.setActiveItem(this.activeIndex + 1)
    },
    pre() {
      this.setActiveItem(this.activeIndex - 1)
    },
    startTimer() {
      this.timer = setInterval(this.play, this.interval)
    },
    play() {
      //循环
      // this.activeIndex = (this.activeIndex + 1) % this.items.length
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++
      } else if (this.loop) {
        this.activeIndex = 0
      }
    },
    pause() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    },
    dotClick(index) {
      this.activeIndex = index
    },
  },
  destroyed(){
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

<style lang="scss" scoped>
.index {
  position: relative;
  height: 100%;
  overflow: hidden;
  .imgs {
    width: 100%;
    height: 100%;
    white-space: nowrap;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    .iconfont {
      font-size: 40px;
      color: #fff;
      opacity: 0.8;
    }
  }
  .arrow-left {
    left: 1%;
  }
  .arrow-right {
    right: 1%;
  }
  ul {
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
    li {
      display: inline-block;
      width: 40px;
      height: 3px;
      margin-right: 10px;
      background-color: rgba(255, 255, 255, 0.5);
      vertical-align: middle;
      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>