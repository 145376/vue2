<template>
  <div class="pagnation">
    <el-pagination
      :total="total"
      :layout="layout"
      :background="background"
      :page-size="pageSize"
      @current-change="currentChange"
      :style="{textAlign: pos}"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      require: true,
    },
    layout: {
      type: String,
      default: "prev, pager, next",
    },
    background: {
      type: Boolean,
      default: false,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    pos: {
      type: String,
      default: 'left'
    }
  },
  methods: {
    currentChange() {
      console.log("111");
      this.$emit("current-change");
    },
  },
};
</script>

<style lang="scss" scoped>
.pagnation {
}
</style>