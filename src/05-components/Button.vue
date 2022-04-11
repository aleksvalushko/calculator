<template>
  <div
    :class="getClass($style)"
    @mouseover="mouseOver"
  >
    <el-button
      v-html="getButton()"
      :title="button.title"
      @click="handleButtonChoose"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Button',
  props: {
    button: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
  },
  methods: {
    mouseOver (event) {
    },
    handleButtonChoose () {
      if (this.button.isNumberButton) {
        this.SET_RESULT(this.button.value)
      }
    },
    getClass (style) {
      if (this.button.isMemoryButton) {
        return style.memoryButton
      }
      if (this.button.isSignButton) {
        return style.signButton
      }
      if (this.button.isEquallyButton) {
        return style.equallyButton
      }
      return style.button
    },
    getButton () {
      if (this.button.value === 'Radical') {
        return '&#8730;x'
      }
      if (this.button.value === 'Square') {
        return 'x&#178;'
      }
      if (this.button.value === 'Multiply') {
        return '&#215;'
      }
      if (this.button.value === 'Backspace') {
        return '&#8678;'
      }
      if (this.button.value === 'Divide') {
        return '&#247;'
      }
      return this.button.value
    },
    ...mapMutations(['SET_RESULT'])
  }
}
</script>

<style module lang="scss">
.memoryButton {
  :global(.el-button) {
    color: #000000;
    background-color: transparent;
    border: 1px solid transparent;
    &:hover {
      color: #000000;
      border: 1px solid #808080;
      background-color: #afafaf;
      border-radius: 0;
    }
  }
}

.signButton, .button, .equallyButton {
  width: 24.8%;
  height: 16.3%;
  :global(.el-button) {
    font-size: 25px;
    width: 100%;
    height: 100%;
    margin-left: 0;
    border: 1px solid transparent;
    border-radius: 0;
    color: #000000;
  }
  :global(.el-button:hover) {
    color: #000000;
    background-color: #cecece;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .4), 0 0 6px rgba(0, 0, 0, .1)
  }
  &:hover {
    border-radius: 0;
  }
}

.signButton {
  :global(.el-button) {
    background-color: #e1e1e1;
  }
}

.button {
  :global(.el-button) {
    background-color: #ffffff;
  }
}

.equallyButton {
  :global(.el-button) {
    background-color: #89b9df;
  }
  :global(.el-button:hover) {
    background-color: #469adc;
  }
}
</style>
