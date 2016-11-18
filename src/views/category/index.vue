<template>
  <div class="category_container">
    <el-row :gutter="20">
      <el-col :span="5">
        <Sidebar></Sidebar>
      </el-col>
      <el-col :span="19">
        <Edit></Edit>
        <TestApi></TestApi>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Edit from './Edit'
import TestApi from './TestApi'

export default {
  components: {
    Sidebar,
    Edit,
    TestApi
  },
  created () {
    this.$store.dispatch('getApiList', {categoryId: this.$route.params.id})
  }
}
</script>

<style scoped>
.category_container {
  padding-top: 40px;
  width: 1002px;
  margin: 0 auto;
}
</style>
