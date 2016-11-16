<template>
	<div class="container">
    <el-col :span="20">
    	<el-form ref="form" label-width="80px">
			  <el-form-item label="接口名称">
			    <el-input v-model="currentApi.name" placeholder="请输入接口名称"></el-input>
			  </el-form-item>
			  <el-form-item label="接口路径">
			    <el-input v-model="currentApi.path" placeholder="如：/api/get"></el-input>
			  </el-form-item>
			  <el-col :span="6">
			  	<el-form-item label="请求方法">
				    <el-select placeholder="请求方法" v-model="currentApi.method">
				      <el-option label="GET" value="get"></el-option>
				      <el-option label="POST" value="post"></el-option>
				    </el-select>
				  </el-form-item>
			  </el-col>
			  <el-col :span="24">
				  <el-form-item label="json数据">
				  	<el-input
						  type="textarea"
						  :autosize="{ minRows: 15, maxRows: 10}"
						  placeholder="请输入内容"
						  v-model="currentApi.json">
						</el-input>
				  </el-form-item>
				</el-col>
				<el-col :span="24">
				  <el-form-item label="">
				  	<el-button type="success" @click="update" v-if="status == 'update'">保存</el-button>
				  	<el-button type="success" @click="add" v-if="status == 'new'">添加</el-button>
				  	<el-button type="primary" @click="test">测试</el-button>
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
      currentApi: 'getCurrentApi',
      status: 'getStatus'
    })
  },
	data () {
    return {
     
    }
  },
  ready () {
    this.$store.dispatch('getApiList', this.$route.params.id)
  },
  methods: {
  	add () {
      this.$store.dispatch('addApi', this.currentApi).then(() => {
        this.$store.dispatch('getApiList')
        this.$message({
          type: 'success',
          message: '添加成功'
        });
      })
  	},
    update () {
    	this.$store.dispatch('updateApi', this.currentApi).then(() => {
        this.$store.dispatch('getApiList')
        this.$message({
          type: 'success',
          message: '添加成功'
        });
      })
    },
    test () {
    	console.log('我要测试')
    }
  }
}	
</script>

<style>
.container {
	padding-top: 40px;
}
.input_json {
	margin-left: 80px;	
}
</style>