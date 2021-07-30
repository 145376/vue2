<template>
  <div class="a">
    我是a组件
    <el-button v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>

<style>

</style>