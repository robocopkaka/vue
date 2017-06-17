<template>
  <div id="app">
    <message>Hello there</message>
  </div>
</template>

<script>
import message from './components/message.vue';
export default {
  name: 'app',
  components: {message},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
