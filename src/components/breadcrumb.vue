<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <transition-group name="fade">
        <el-breadcrumb-item v-for="(item, index) in routes" :key="index">{{
          item.meta.title
        }}</el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.routes = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
    },
  },
  watch: {
    $route() {
      this.getList();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>