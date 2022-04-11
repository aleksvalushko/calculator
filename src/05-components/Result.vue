<template>
  <div :class="$style.resultBlock">
    {{ result }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Result',
  computed: {
    ...mapState(['result'])
  }
}
</script>

<style module lang="scss">
.resultBlock {
  border: 1px solid #000000;
  height: 19%;
  font-size: 80px;
  display: flex;
  justify-content: right;
  align-items: center;
  color: #000000;
}
</style>
