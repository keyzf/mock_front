<template>
	<div class="container">
    <el-col :span="20">
    	<el-form ref="form" label-width="80px">
			  <el-form-item label="接口名称">
			    <el-input v-model="name" placeholder="请输入接口名称"></el-input>
			  </el-form-item>
			  <el-form-item label="接口路径">
			    <el-input v-model="path" placeholder="如：/api/get"></el-input>
			  </el-form-item>
			  <el-col :span="6">
			  	<el-form-item label="请求方法">
				    <el-select placeholder="请求方法" v-model="method">
				      <el-option label="GET" value="GET"></el-option>
				      <el-option label="POST" value="POST"></el-option>
				    </el-select>
				  </el-form-item>
			  </el-col>
			  <el-col :span="24">
				  <el-form-item label="json数据">
				  	<el-input
						  type="textarea"
						  :autosize="{ minRows: 15, maxRows: 10}"
						  placeholder="请输入内容"
						  v-model="json">
						</el-input>
				  </el-form-item>
				</el-col>
				<el-col :span="24">
				  <el-form-item label="">
				  	<el-button type="success" @click="update">保存</el-button>
				  	<el-button type="success" @click="add">添加</el-button>
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

    })
  },
	data () {
    return {
    	name: '测试' + new Date().getTime(),
    	path: '/api/get',
    	method: 'GET',
    	json: '{"name": "test"}'
    }
  },
  mounted () {
    this.$store.dispatch('getApi', this.$route.params.id)
  },
  methods: {
  	add () {
  		var self = this
  		util.add({
      	name: self.name,
      	path: self.path,
      	method: self.method,
      	json: self.json
      }).then((res) => {
  			if (res.data.success) {
  				self.$message({
          	type: 'success',
	          showClose: true,
	          message: '添加成功'
	        });
  			}
  		})	
  	},
    update () {
    	console.log('我要更新')
    	// var self = this
     //  util.save({
     //  	name: self.name,
     //  	path: self.path,
     //  	method: self.method,
     //  	json: self.json
     //  }).then((res) => {
     //    if (res.data.result) {
     //      self.$message({
     //      	type: 'success',
	    //       showClose: true,
	    //       message: '保存成功'
	    //     });
     //    }
     //  })
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