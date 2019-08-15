<template>
  <div id="app">
    <!-- <keep-alive include="home"> -->
    <!-- 这里是会被缓存的视图组件，比如 Home！ -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    <router-view v-if="!$route.meta.keepAlive">
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  margin-top: 60px; */
}
</style>
