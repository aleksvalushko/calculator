<template>
  <div :class="$style.buttonsBlock">
    <div :class="$style.memoryButtons">
      <Button
        v-for="(memoryButton, index) in memoryButtons"
        :key="index"
        :button="memoryButton"/>
    </div>
    <div :class="$style.buttons">
      <Button
        v-for="(button, index) in buttons"
        :key="index"
        :button="button"/>
    </div>
  </div>
</template>

<script>
import Button from '@/05-components/Button'
import { mapState } from 'vuex'

export default {
  name: 'Buttons',
  components: { Button },
  computed: {
    ...mapState(['buttons', 'memoryButtons'])
  }
}
</script>

<style module lang="scss">
.buttonsBlock {
  height: 79%;
  display: flex;
  flex-direction: column;

  .memoryButtons {
    display: flex;
    width: 50%;
  }

  .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    height: 100%;
  }
}
</style>
