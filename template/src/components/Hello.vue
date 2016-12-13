<template>
<h1 id="greetings">Hello! {{ name }}</h1>
</template>


<script>
export default {
  computed: {
    name() {
      return 'John Doe';
    },
  },
};
</script>

<style lang="scss">
#greetings {
  color: chocolate;
}
</style>
