<template>
	<div>
		<el-button class="intro_button" @click="open"><i class="el-icon-document"></i>介绍</el-button>
		<el-dialog title="介绍" v-model="dialogTableVisible">
		  <ul>
		  	<li>1. 功能：在后端接口还没写好时，前端可以自己写接口、造数据。等后端接口写好之后，换一下代理的地址就可以联调了。</li>
		  	<li>2. 平台的代理地址是：http://58.215.180.210:8090/</li>
		  	<li>3. 支持mock模拟随机数据，地址: <a href="http://mockjs.com/" target="_blank">Mock.js</a></li>
		  </ul>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data () {
		return {
			dialogTableVisible: false
		}
	},
	methods: {
		open () {
			this.dialogTableVisible = true
		}
	}
}	
</script>

<style>
.intro_button {
	position: absolute;
  top: 68px;
  right: 0;	
}
i {
	margin-right: 5px;
}
li {
	list-style: none;
	line-height: 28px;
}
</style>