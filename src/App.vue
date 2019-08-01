<template>
  <div id="app">
    <img src="./assets/logo.png">

    <transition name="slide" appear mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
.slide-enter-active,.slide-leave-active{
  transition: all 0.5s cubic-bezier(.16,.67,.42,1.55)
}
.slide-enter,.slide-leave-to{
  opacity: 0;
  transform: translateX(100px)
}
</style>
