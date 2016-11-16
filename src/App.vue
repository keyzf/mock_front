<template>
  <div id="app">
    <NavMenu></NavMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'

export default {
  name: 'app',
  components: {
    NavMenu
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
