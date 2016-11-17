<template>
	<div class="container">
    <el-col :span="22"
      v-loading="testing"
      element-loading-text="保存配置，准备测试接口..."
      class="test_container">
      <el-form label-width="100px" 
        v-if="test.url">
        <el-form-item label="请求接口">
          <el-input v-model="test.url" :disabled="true"></el-input>
        </el-form-item>
        <el-col :span="24">
          <el-form-item label="返回数据">
            <el-input
              type="textarea"
              :autosize="{ minRows: 15, maxRows: 10}"
              placeholder="请输入内容"
              v-model="test.response"
              :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
      </el-form>
    </el-col>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      test: 'getTest',
      testing: 'getTesting'
    })
  }
}	
</script>

<style scoped>
.input_json {
	margin-left: 80px;	
}
.test_container {
  min-height: 302px;
}
</style>