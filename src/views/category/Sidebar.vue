<template>
	<div>	
    <el-menu mode="vertical" 
      default-active="0" 
      class="el-menu-vertical-demo">
      <el-menu-item-group title="接口">
        <div @click="select(item)" v-for="(item, index) in apiList">
          <el-menu-item  
            v-bind:index="String(index)">
            <i class="el-icon-setting"></i>{{item.name}}
            <i class="el-icon-delete" @click="del(item)"></i>
          </el-menu-item>
        </div>
      </el-menu-item-group>
      <el-button class="add_btn" type="primary" size="small" @click="add">添加</el-button>
    </el-menu>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      apiList: 'getApiList',
      fetching: 'getFetching'
    })
  },
  methods: {
    select (item) {
      this.$store.dispatch('selectApi', item)
      this.$store.dispatch('changeStatus', 'update')
    },
    del (item) {
      this.$confirm('此操作将永久删除该接口(' + item.name + '), 是否继续?', '提示', {
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('deleteApi', item._id).then(() => {
          this.$store.dispatch('getApiList')
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
    },
    add () {
      
      this.$store.dispatch('selectApi', {name: '', path: '', method: 'get', json: ''})
      // this.$store.dispatch('selectApi', {name: '测试007', path: '/api/get', method: 'get', response: '{"name": "admin"}'})
      this.$store.dispatch('changeStatus', 'new')
    }
  }
} 
</script>

<style>
.add_btn {
  position: absolute;
  top: 10px;
  right: 12px;
}
.el-menu-item-group__title {
  padding-bottom: 10px;
}
.el-icon-delete {
  display: none;
  position: absolute;
  top: 20px;
  right: 10px;
}
.el-menu-item:hover .el-icon-delete {
  display: block;
}
.el-menu-item-group {
  min-height: 800px;
}
</style>