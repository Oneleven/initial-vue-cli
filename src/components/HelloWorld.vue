<template>
  <div class="hello">
    <span class="hello-ss">ddd</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.hello {
  border: 1px solid black;
  &-ss{
    border:  1px solid red
  }
}

</style>
