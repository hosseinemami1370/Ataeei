<template>
  <div id="app" class="container">
    <Header1/>
    <router-view></router-view>
  </div>
</template>

<script>

import Header1 from './components/Header1'
export default {
  name: 'App',

  components: {
    Header1
  }
}
</script>

<style>
body {
  padding: 30px;
}
</style>
