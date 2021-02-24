<template>
  <!-- <PropsItemList title="hello world"/> -->
  <div v-if="isVisible">
    <h2>{{ title }}</h2>
    <a :href="link"></a>
    <button @click="isVisible = false">Hide</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'link'],
  data () {
    return {
      isVisible: true
    }
  }
}
</script>

<style>
</style>
