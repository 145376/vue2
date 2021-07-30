<template>
  <div class="nested1-1">
    <el-table :data="tableData"
              class="table">
      <el-table-column label="日期"
                       prop="date"></el-table-column>
      <el-table-column label="姓名"
                       prop="name"></el-table-column>
      <el-table-column label="地址"
                       prop="address"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"
                     @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :total="50"
                :page-size="4"
                laypout="prev,next"
                @current-change="handleChange"
                pos="right"></pagination>
    <vue-editor v-model="htmlForEditor"
                :editor-toolbar="customToolbar">
    </vue-editor>
  </div>
</template>

<script>
import pagination from '@/components/pagination.vue'
import { VueEditor } from 'vue2-editor'
export default {
  components: {
    pagination,
    VueEditor,
  },
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      htmlForEditor: '1111',
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image', 'code-block'],
        [{ color: [] }, { background: [] }],
        ["clean"]
      ],
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    handleChange() {
      console.log('页数改变了')
    },
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      console.log(file, Editor, cursorLocation, resetUploader)
    },
  },
}
</script>

<style lang="scss" scoped>
.nested1-1 {
  .table {
    margin-bottom: 20px;
  }
}
</style>