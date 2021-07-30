<template>
  <div class="side-item">
    <template>
      <template v-if="hasOnlyChild()">
        <el-menu-item :index="resolvePath()">
          <span
            :class="[
              'iconfont',
              (item.children && item.children[0].meta.icon) || item.meta.icon,
            ]"
          ></span>
          {{
            (item.children && item.children[0].meta.title) || item.meta.title
          }}
        </el-menu-item>
      </template>
      <template v-else>
        <el-submenu :index="resolvePath()">
          <template slot="title">
            <span :class="['iconfont', item.meta.icon]"></span>
            {{
              (item.children && item.children[0].meta.title) || item.meta.title
            }}
          </template>
          <side-item
            v-for="child in item.children"
            :key="child.path"
            :basePath="resolvePath(child.path)"
            :item="child"
            :isNest="true"
          ></side-item>
        </el-submenu>
      </template>
    </template>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: "sideItem",
  props: {
    item: {
      type: Object,
    },
    basePath: {
      type: String,
    },
    isNest: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  methods: {
    hasOnlyChild() {
      if (this.item.children) {
        if (this.item.children.length === 1) {
          return true;
        }
        return false;
      } else {
        return true;
      }
    },
    resolvePath(str){
      if(str) return path.resolve(this.basePath, str) 
      let childPath = ''
      if(this.item.children){
        if(this.item.children.length === 0) childPath = this.item.children[0].path
      }else{
        childPath = this.item.path
      }
      if(this.basePath.includes(childPath)) return this.basePath
      return path.resolve(this.basePath, childPath)
    }
  },
};
</script>

<style lang="scss" scoped>
.side-item {
  .iconfont{
    margin-right: 25px;
  }
  // ::v-deep .el-menu-vertical-demo:not(.el-menu--collapse) {
  //   width: 200px;
  //   min-height: 400px;
  // }
}
</style>