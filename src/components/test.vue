<template>
  <div>
  </div>
</template>

<script>
export default {
  props:{
    value: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  created(){
    console.log('子组件创建', this.value);
  },
  mounted(){
    console.log('子组件挂载', this.value);
  },
  updated(){
    console.log('子组件跟新', this.value);
  }
}
</script>

<style>

</style>