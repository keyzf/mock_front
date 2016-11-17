<template>
  <div class="container">
    <el-row type="flex" justify="end">
      <el-col :span="0">
        <el-button type="primary" @click="add">添加</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="categoryList"
      v-loading="fetching"
      element-loading-text="拼命加载中"
      border
      style="width: 100%">
      <el-table-column prop="name" label="类别" width="300">
      </el-table-column>
      <el-table-column prop="createdAt" label="创建日期" width="280">
      </el-table-column>
      <el-table-column prop="updatedAt" label="修改日期" width="280">
      </el-table-column>
      <el-table-column inline-template fixed="right" label="操作" width="140">
        <div class="button-group">
          <!-- <el-button type="primary" size="small" @click="edit(row)">修改名称</el-button> -->
          <router-link :to="'/category/' + row._id">
            <el-button type="primary" size="small">查看</el-button>
          </router-link>
          <el-button type="danger" size="small" @click="del(row)">删除</el-button>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
 
export default {
  computed: {
    ...mapGetters({
      categoryList: 'getCategoryList',
      fetching: 'getFetching'
    })
  },
  methods: {
    add () {
      this.$prompt('请输入分类名称', '提示', {
        inputPattern: /[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+/,
        inputErrorMessage: '名称格式不正确'
      }).then(({ value }) => {
        this.$store.dispatch('addCategory', {name: value}).then(() => {
          this.$store.dispatch('getCategoryList')
          this.$notify({
            type: 'success',
            message: '添加成功'
          });
        })
      }).catch(() => {
        this.$notify({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    edit (row) {
      this.$prompt('请输入分类名称', '提示', {
        inputPattern: /[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+/,
        inputErrorMessage: '名称格式不正确'
      }).then(({ value }) => {
        this.$notify({
          type: 'success',
          message: '添加成功'
        });
      }).catch(() => {
        this.$notify({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    del (row) {
      this.$confirm('此操作将永久删除该分类(' + row.name + '), 是否继续?', '提示', {
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('deleteCategory', row._id).then(() => {
          this.$store.dispatch('getCategoryList')
          this.$notify({
            type: 'success',
            message: '删除成功'
          });
        })
      }).catch(() => {
        this.$notify({
          type: 'info',
          message: '已取消删除'
        });          
      });
    }
  }
}
</script>

<style scoped>
.container {
  width: 1002px;
  margin: 10px auto 0;
}  
.el-row {
  margin-bottom: 10px;
}
</style>