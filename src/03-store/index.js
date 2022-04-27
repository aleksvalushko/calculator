// import { cloneDeep } from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: '',
    firstNumber: '',
    secondNumber: '',
    isPlusSignTouched: false,
    resultExpression: '',
    currentSign: '',
    history: [],
    memoryButtons: [
      { value: 'MC', title: 'Clear all memory', isMemoryButton: true, isClearAllMemoryButton: true },
      { value: 'MR', title: 'Memory recall', isMemoryButton: true, isMemoryRecallButton: true },
      { value: 'M+', title: 'Memory add', isMemoryButton: true, isMemoryAddButton: true },
      { value: 'M-', title: 'Memory subtract', isMemoryButton: true, isMemorySubtractButton: true },
      { value: 'MS', title: 'Memory store', isMemoryButton: true, isMemoryStoreButton: true }
    ],
    buttons: [
      { value: '%', title: '', isSignButton: true, isPercentSign: true },
      { value: 'CE', title: '', isSignButton: true, isClearSign: true },
      { value: 'C', title: '', isSignButton: true, isClearAllSign: true },
      { value: 'Backspace', title: '', isSignButton: true, isBackspaceSign: true },
      { value: '1/x', title: '', isSignButton: true, isOneDivideToX: true },
      { value: 'Square', title: '', isSignButton: true, isSquareSign: true },
      { value: 'Radical', title: '', isSignButton: true, isRadicalSign: true },
      { value: 'Divide', title: '', isSignButton: true, isDivideSign: true },
      { value: '7', title: '', isNumberButton: true },
      { value: '8', title: '', isNumberButton: true },
      { value: '9', title: '', isNumberButton: true },
      { value: 'Multiply', title: '', isSignButton: true, isMultiplySign: true },
      { value: '4', title: '', isNumberButton: true },
      { value: '5', title: '', isNumberButton: true },
      { value: '6', title: '', isNumberButton: true },
      { value: '-', title: '', isSignButton: true, isMinusSign: true },
      { value: '1', title: '', isNumberButton: true },
      { value: '2', title: '', isNumberButton: true },
      { value: '3', title: '', isNumberButton: true },
      { value: '+', title: '', isSignButton: true, isPlusSign: true },
      { value: '+/-', title: '', isPositiveOrNegativeSign: true },
      { value: '0', title: '', isNumberButton: true },
      { value: ',', title: '', isFloatNumber: true },
      { value: '=', title: '', isEquallyButton: true }
    ]
  },
  mutations: {
    SET_RESULT (state, payload) {
      state.result = payload
    },
    SET_FIRST_NUMBER (state, payload) {
      if (payload) {
        state.firstNumber += payload
      } else {
        state.firstNumber = payload
      }
    },
    SET_SECOND_NUMBER (state, payload) {
      if (payload) {
        state.secondNumber += payload
      } else {
        state.secondNumber = payload
      }
    },
    SET_IS_PLUS_SIGN_TOUCHED (state, payload) {
      state.isPlusSignTouched = payload
    },
    SET_RESULT_EXPRESSION (state, payload) {
      state.resultExpression = payload
    },
    SET_CURRENT_SIGN (state, payload) {
      state.currentSign = payload
    },
    SET_HISTORY (state, payload) {
      state.history.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
