<template>
  <transition :name="animate">
    <div class="item"
         v-if="selfIndex === activeIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CarouselItem',
  data() {
    return {
      activeIndex: 0,
      selfIndex: 0,
      animate: 'next',
      distance: 0,
    }
  },
  created() {
    this.activeIndex = this.$parent.activeIndex
    this.selfIndex = this.$vnode.key
  },
  watch: {
    '$parent.activeIndex'(val, oldVal) {
      this.animate = oldVal < val ? 'pre' : 'next'
      this.activeIndex = val
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.next-enter-active,
.next-leave-active {
  transition: all 0.5s linear;
}
.next-enter-active {
  transform: translateX(100%);
}
.next-leave-active {
  transform: translateX(0);
}
.next-enter-to {
  transform: translateX(0);
}
.next-leave-to {
  transform: translateX(-100%);
}

.pre-enter-active,
.pre-leave-active {
  transition: all 0.5s linear;
}
.pre-enter-active {
  transform: translateX(-100%);
}
.pre-leave-active {
  transform: translateX(0);
}
.pre-enter-to {
  transform: translateX(0);
}
.pre-leave-to {
  transform: translateX(100%);
}
</style>