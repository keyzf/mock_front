<template>
  <div id="app">
    <NavMenu></NavMenu>
    <transition>
      <router-view></router-view>
    </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
