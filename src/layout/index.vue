<template>
  <div :class="['layout', collapse ? 'collapse' : '']">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main">
      <navbar></navbar>
      <main-content class="main-content"></main-content>
    </div>
  </div>
</template>

<script>
import sidebar from "./sidebar/index.vue";
import navbar from "./navbar.vue";
import mainContent from "./view.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    sidebar,
    navbar,
    mainContent,
  },
  computed: {
    ...mapGetters({
      collapse: "sidebarState",
    }),
  },
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  &.collapse {
    .sidebar-container {
      width: 64px;
      overflow: hidden;
    }
    .main {
      margin-left: 64px;
    }
  }
  .main {
    height: 100%;
    margin-left: 210px;
    transition: margin-left 0.5s linear;
    .main-content {
      min-height: calc(100% - 50px);
      overflow: hidden;
    }
  }
}
</style>