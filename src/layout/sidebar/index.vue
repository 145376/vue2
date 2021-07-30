<template>
  <div class="sidebar">
    <el-menu
      background-color="#333"
      text-color="#fff"
      :default-active="activeMenu()"
      :router="true"
      :collapse="collapse"
      :collapse-transition="false"
      :unique-opened="false"
      mode="vertical"
    >
      <side-item
        v-for="item in routes"
        :key="item.path"
        :item="item"
        :basePath="item.path"
      ></side-item>
    </el-menu>
  </div>
</template>

<script>
import sideItem from "./item.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    sideItem,
  },
  created() {
    this.routes = this.$router.options.routes.filter( v => v.isShow );
  },
  data() {
    return {
      routes:[]
    };
  },
  methods: {
    ...mapMutations({
      setBreadcrumb: "app/SET_CURRENTPATH",
    }),
    activeMenu() {
      let path = this.$route.path;
      console.log(path)
      return path;
    },
  },
  computed: {
    ...mapGetters({
      collapse: "sidebarState",
    }),
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 210px;
  height: 100%;
  background-color: #333;
  transition: width 0.5s linear;
  .el-menu{
    width: 100% !important;
    border-right: none;
    .horizontal-collapse-transition {
      transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
    } 
  }
}
</style>