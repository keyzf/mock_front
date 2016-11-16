<template>
	<div>	
    <el-menu mode="vertical" default-active="0" class="el-menu-vertical-demo">
      <el-menu-item-group title="接口">
        <div @click="select(item)" v-for="(item, index) in apiList">
          <el-menu-item  
            v-bind:index="String(index)">
            <i class="el-icon-setting"></i>{{item.name}}
            <i class="el-icon-delete" @click="del(item)"></i>
          </el-menu-item>
        </div>
      </el-menu-item-group>
      <el-button class="add_btn" type="primary" size="mini" @click="add">添加</el-button>
    </el-menu>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      apiList: 'getApiList'
    })
  },
  mounted () {
    this.$store.dispatch('getApiList', this.$route.params.id)
  },
  methods: {
    select (item) {
      console.log(item)
      this.$store.dispatch('selectApi', item)
      this.$store.dispatch('changeStatus', 'update')
    },
    del (item) {
      this.$store.dispatch('deleteApi', item._id).then(() => {
        this.$store.dispatch('getApiList')
        this.$message({
          type: 'success',
          message: '删除成功'
        });
      })
    },
    add () {
      // {name: '', path: '', method: 'get', json: ''}
      this.$store.dispatch('selectApi', {name: '测试007', path: '/api/get', method: 'get', json: '{"name": "admin"}'})
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
  padding-bottom: 5px;
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
</style>