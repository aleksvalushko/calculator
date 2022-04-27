<template>
  <div :class="$style.memoryBlock">
    {{ 'memory' }}
  </div>
</template>

<script>
export default {
  name: 'Memory'
}
</script>

<style module lang="scss">
.memoryBlock {
  width: 29%;
  border-left: 1px solid #000000;
}
</style>
