<template>
  <div :class="$style.historyBlock">
    <div v-if="history.length > 0">
      <div
        v-for="result in history"
        :key="result.id"
        style="margin-right: 10px;"
      >
        <div>{{ result.expression }}</div>
        <div style="font-size: 30px; margin: 10px 0;">
          {{ result.result }}
        </div>
      </div>
    </div>
    <div
      v-else
      style="font-size: 15px;"
    >
      {{ 'There\'s no history yet' }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'History',
  computed: {
    ...mapState(['history'])
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
  max-height: 100%;
  height: 70vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.25);
  }
}
</style>
