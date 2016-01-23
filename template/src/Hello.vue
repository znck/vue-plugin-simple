<template>
  <h1 id="greetings">Hello! {{ name }}</h1>
</template>


<script>
  export default {
    data () {
      return {
        name: 'John Doe'
      }
    }
  }
</script>


<style>
  #greetings {
    color: chocolate;
  }
</style>