<template>
	<div class="container">
		<el-pagination
	    layout="prev, pager, next"
	    :total="categoryCount"
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

<style>
.el-pagination {
	text-align: center;
}	
</style>