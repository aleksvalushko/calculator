<template>
  <div :class="$style.historyBlock">
    {{ resultExpression }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'History',
  computed: {
    ...mapState(['resultExpression'])
  }
}
</script>

<style module lang="scss">
.historyBlock {
  display: flex;
  justify-content: right;
  width: 100%;
  font-size: 20px;
}
</style>
