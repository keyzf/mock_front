<template>
	<div>
		<el-menu default-active="1" class="menu" mode="horizontal">
			<router-link :to="'/'">
				<el-menu-item index="1" class="menu-item">接口管理平台</el-menu-item>
			</router-link>
		  	
		  <!-- <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1">选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		  </el-submenu>
		  <el-menu-item index="3">订单管理</el-menu-item> -->
		</el-menu>
	</div>
</template>

<style>
.menu {
	background: #00A0FA;
}	
.menu-item.is-active {
	color: #fff;
	font-size: 18px;
	padding-left: 40px;
}
.el-menu--horizontal .el-menu-item:hover {
	background: #00A0FA
}
</style>