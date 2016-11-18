<template>
  <div>
  	<CatecoryTable></CatecoryTable>
  	<Pagination></Pagination>
    <Intro></Intro>
  </div>
</template>

<script>
import CatecoryTable from './CatecoryTable'
import Pagination from './Pagination'
import Intro from '../../components/Intro'

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
  	Pagination,
    Intro
  }
}
</script>