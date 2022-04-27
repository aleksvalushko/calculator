<template>
  <div :class="$style.historyBlock">
    <div
      v-for="result in resultExpressionsForHistory"
      :key="result.id"
    >
      <div>{{ result.expression }}</div>
      <div style="font-size: 30px;">
        {{ result.result }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'History',
  computed: {
    ...mapState(['resultExpressionsForHistory'])
  }
}
</script>

<style module lang="scss">
.historyBlock {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: right;
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
}
</style>
