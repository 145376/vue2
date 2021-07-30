<template>
  <div class="navbar">
    <div :class="['toggle-btn', isopen?'reverse':'']">
      <el-button type="primary" icon="el-icon-s-unfold" size="mini" @click="toggleSidebar"></el-button>
    </div>
    <breadcrumb></breadcrumb>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import breadcrumb from '@/components/breadcrumb.vue'
export default {
  components:{
    breadcrumb
  },
  methods: {
    ...mapMutations({
      toggleSidebar: 'sidebar/TOGGLE_SIDEBAR'
    })
  },
  computed: {
    ...mapGetters({
      isopen: 'sidebarState'
    })
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  box-shadow: 0 0 10px 0 #e0e0e0;
  .toggle-btn{
    margin-right: 20px;
    ::v-deep .el-button{
      i{
        font-size: 16px;
      }
    }
  }
  .reverse{
    transform: rotateZ(180deg);
  }
}
</style>