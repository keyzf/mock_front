<template>
	<div class="container">
    <el-col :span="22">
    	<el-form ref="currentApi" label-width="100px" :model="currentApi" :rules="apiRules">
			  <el-form-item label="接口名称" prop="name">
			    <el-input v-model="currentApi.name" placeholder="请输入接口名称"></el-input>
			  </el-form-item>
			  <el-form-item label="接口路径" prop="path">
			    <el-input v-model="currentApi.path" placeholder="如：/api/get"></el-input>
			  </el-form-item>
			  <el-col :span="8">
			  	<el-form-item label="请求方法" prop="method">
				    <el-select placeholder="请求方法" v-model="currentApi.method">
				      <el-option label="GET" value="get"></el-option>
				      <el-option label="POST" value="post"></el-option>
				    </el-select>
				  </el-form-item>
			  </el-col>
			  <el-col :span="24">
				  <el-form-item label="json数据" prop="response">
				  	<el-input
						  type="textarea"
						  :autosize="{ minRows: 25, maxRows: 15}"
						  placeholder="请输入内容"
						  v-model="currentApi.response">
						</el-input>
				  </el-form-item>
				</el-col>
				<el-col :span="24">
				  <el-form-item label="">
				  	<el-button type="success" @click="update" v-if="status == 'update'">保存</el-button>
				  	<el-button type="success" @click="add" v-if="status == 'new'">添加</el-button>
				  	<el-button type="primary" @click="test" v-if="status == 'update' && currentApi.method != 'post'">查看接口</el-button>
				  </el-form-item>
				</el-col>
			</el-form>
    </el-col>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import JSONLint from 'json-lint'
import config from '../../config'

export default {
  computed: {
    ...mapGetters({
      currentApi: 'getCurrentApi',
      status: 'getStatus',
      fetching: 'getFetching'
    })
  },
	data () {
    let validateResponse = (rule, value, callback) => {
      let lint = JSONLint(value)
      if (lint.error) {
        callback(new Error('JSON格式错误'));
      } else {
        callback();
      }
    }
    return {
      apiRules: {
        name: [
          { required: true, message: '请输入接口名称', trigger: 'blur' },
        ],
        path: [
          { required: true, message: '请输入接口路径', trigger: 'blur' },
        ],
        method: [
          { required: true, message: '请输入请求方法', trigger: 'blur' },
        ],
        response: [
          { required: true, message: '请输入json数据', trigger: 'blur' },
          { validator: validateResponse, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
  	add () {
      this.$refs.currentApi.validate((valid) => {
        if (valid) {
          this.currentApi.categoryId = this.$route.params.id
          this.$store.dispatch('addApi', this.currentApi)
          .then(() => {
            this.$store.dispatch('getApiList', this.$route.params.id)
            this.$message({
              title: '成功',
              message: '添加成功',
              type: 'success'
            })
          })
          .catch(() => {
            this.$message.error({
              title: '错误',
              message: '接口出错了'
            })
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
  	},
    update () {
      this.$refs.currentApi.validate((valid) => {
        if (valid) {
          this.$store.dispatch('updateApi', this.currentApi)
          .then(() => {
            this.$store.dispatch('getApiList', this.$route.params.id)
            this.$message({
              title: '成功',
              message: '保存成功',
              type: 'success'
            })
          })
          .catch(() => {
            this.$message.error({
              title: '错误',
              message: '接口出错了'
            })
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    test () {
      window.open(config.api_root + this.currentApi.path)
      // this.$store.dispatch('setTesting', true)
      // this.$store.dispatch('testApi', this.currentApi.path)
      // .then(() => {
      //   console.log('ererererere')
      //   this.$store.dispatch('setTesting', false)
      //   this.$message({
      //     title: '成功',
      //     message: '请求成功',
      //     type: 'success'
      //   })
      // })
      // .catch(() => {
      //   this.$message.error({
      //     title: '错误',
      //     message: '接口出错了'
      //   })
      // })
    }
  }
}	
</script>

<style scoped>
.input_json {
	margin-left: 80px;	
}
</style>