<template>
  <div id="app">
    <MainForm />
  </div>
</template>

<script>
import MainForm from '../05-components/MainForm.vue'

export default {
  name: 'App',
  components: {
    MainForm
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
