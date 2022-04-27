<template>
  <div
    :class="getClass($style)"
    @mouseover="mouseOver"
  >
    <el-button
      :title="button.title"
      @click="handleButtonChoose"
      v-html="getButton()"
    />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'Button',
  data () {
    return {
      id: 0
    }
  },
  props: {
    button: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapState(['firstNumber', 'secondNumber', 'isPlusSignTouched', 'result', 'currentSign', 'resultExpression',
      'resultExpressionsForHistory'])
  },
  methods: {
    mouseOver (event) {
    },
    // eslint-disable-next-line complexity,max-statements
    handleButtonChoose () {
      if (this.button.isNumberButton) {
        if (!this.secondNumber && !this.currentSign) {
          this.SET_FIRST_NUMBER(this.button.value)
          this.SET_RESULT(this.firstNumber)
          this.SET_RESULT_EXPRESSION(this.firstNumber)
          return
        }
        if (this.firstNumber && this.currentSign) {
          this.SET_SECOND_NUMBER(this.button.value)
          this.SET_RESULT(this.secondNumber)
          this.SET_RESULT_EXPRESSION(this.firstNumber + this.currentSign + this.secondNumber)
          return
        }
      }
      if (this.button.isSignButton) {
        this.SET_CURRENT_SIGN(this.button.value)
        if (this.button.isPlusSign) {
          this.SET_IS_PLUS_SIGN_TOUCHED(true)
          this.pushedPlusSignButton()
          return
        }
      }
      if (this.button.isEquallyButton) {
        this.pushedEquallyButton()
        return
      }
      if (this.button.isClearAllSign) {
        this.pushedClearAllSignButton()
      }
    },
    pushedPlusSignButton () {
      this.SET_CURRENT_SIGN(this.button.value)
      if (this.isPlusSignTouched) {
        this.SET_RESULT(+this.firstNumber + +this.secondNumber)
        this.SET_FIRST_NUMBER('')
        this.SET_FIRST_NUMBER(this.result)
        this.SET_RESULT_EXPRESSION(this.firstNumber + this.currentSign)
        this.SET_SECOND_NUMBER('')
        this.SET_IS_PLUS_SIGN_TOUCHED(false)
      } else {
        this.SET_IS_PLUS_SIGN_TOUCHED(true)
        this.SET_FIRST_NUMBER(+this.firstNumber + +this.secondNumber)
        this.SET_RESULT_EXPRESSION(this.firstNumber + this.currentSign)
        this.SET_SECOND_NUMBER('')
      }
    },
    pushedEquallyButton () {
      this.SET_RESULT(+this.firstNumber + +this.secondNumber)
      this.SET_RESULT_EXPRESSION(this.firstNumber + this.currentSign + this.secondNumber + '=')
      const localResultExpressionForHistory = {
        id: this.resultExpressionsForHistory.length > 0 ? this.id + 1 : 0,
        expression: this.firstNumber + this.currentSign + this.secondNumber + '=',
        result: this.result
      }
      this.SET_RESULT_EXPRESSIONS_FOR_HISTORY(localResultExpressionForHistory)
      this.SET_HISTORY(this.resultExpression)
      this.SET_FIRST_NUMBER('')
      this.SET_SECOND_NUMBER('')
      this.SET_IS_PLUS_SIGN_TOUCHED(false)
      this.SET_CURRENT_SIGN(this.button.value)
    },
    pushedClearAllSignButton () {
      this.SET_RESULT('')
      this.SET_FIRST_NUMBER('')
      this.SET_SECOND_NUMBER('')
      this.SET_IS_PLUS_SIGN_TOUCHED(false)
      this.SET_CURRENT_SIGN('')
      this.SET_RESULT_EXPRESSION('')
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
    ...mapMutations(['SET_RESULT', 'SET_FIRST_NUMBER', 'SET_SECOND_NUMBER', 'SET_IS_PLUS_SIGN_TOUCHED', 'SET_RESULT_EXPRESSION',
      'SET_CURRENT_SIGN', 'SET_HISTORY', 'SET_RESULT_EXPRESSIONS_FOR_HISTORY'])
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
    background-color: #e4e7ed;
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
