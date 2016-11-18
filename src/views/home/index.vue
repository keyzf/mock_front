<template>
  <div>
  	<CatecoryTable></CatecoryTable>
  	<Pagination></Pagination>
  </div>
</template>

<script>
import CatecoryTable from './CatecoryTable'
import Pagination from './Pagination'

export default{
  name: 'home',
  created () {
    this.$store.dispatch('getCategoryList', 1)
  },
  methods: {
  	add () {
  		this.$store.dispatch('increment')
  	}
  },
  components: {
  	CatecoryTable,
  	Pagination
  }
}
</script>