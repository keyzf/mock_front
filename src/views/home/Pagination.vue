<template>
	<div class="container">
		<el-pagination
	    layout="prev, pager, next"
	    :total="categoryCount"
      :page-size="20"
	    @current-change="handleCurrentChange">
	  </el-pagination>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
 
export default {
  computed: {
    ...mapGetters({
      categoryCount: 'getCategoryCount'
    })
  },
  data() {
    return {
		
		}
  },
  methods: {
    handleCurrentChange (val) {
    	this.$store.dispatch('getCategoryList', val)
    }
  }
}	
</script>

<style scoped>
.container {
  margin-top: 10px;
}
.el-pagination {
	text-align: center;
}	
</style>