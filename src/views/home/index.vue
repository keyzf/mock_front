<template>
  <div>
  	<CatecoryTable></CatecoryTable>
  	<Pagination></Pagination>
    <!-- <button @click="add">加</button>{{count}} -->
  </div>
</template>

<script>
import CatecoryTable from './CatecoryTable'
import Pagination from './Pagination'
import { mapGetters } from 'vuex'

export default{
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  },
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