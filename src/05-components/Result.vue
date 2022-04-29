<template>
  <div :class="$style.resultBlock">
    <div :class="$style.resultExpression">
      {{ resultExpression }}
    </div>
    <div>{{ result }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Result',
  computed: {
    ...mapState(['result', 'resultExpression'])
  }
}
</script>

<style module lang="scss">
.resultBlock {
  height: 19%;
  font-size: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  color: #000000;

  .resultExpression {
    font-size: 25px;
    color: gray;
  }
}
</style>
