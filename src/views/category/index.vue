<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="5">
        <Sidebar></Sidebar>
      </el-col>
      <el-col :span="19">
        <Edit></Edit>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Edit from './Edit'

export default {
  name: 'app',
  components: {
    Sidebar,
    Edit
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
