<template>
  <div class="view">
    <transition name="fade" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    key(){
      return this.$route.path
    }
  },
};
</script>

<style lang="scss" scoped>
.view {
  padding: 20px;
  .breadcrumb {
    margin-bottom: 20px;
  }
}
</style>