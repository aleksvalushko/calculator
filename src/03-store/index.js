import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: 0,
    memoryButtons: [
      { value: 'MC', title: 'Clear all memory', isMemoryButton: true, isClearAllMemoryButton: true },
      { value: 'MR', title: 'Memory recall', isMemoryButton: true, isMemoryRecallButton: true },
      { value: 'M+', title: 'Memory add', isMemoryButton: true, isMemoryAddButton: true },
      { value: 'M-', title: 'Memory subtract', isMemoryButton: true, isMemorySubtractButton: true },
      { value: 'MS', title: 'Memory store', isMemoryButton: true, isMemoryStoreButton: true }
    ],
    buttons: [
      { value: '%', title: '', isSignButton: true, isPercentSign: true },
      { value: 'CE', title: '', isSignButton: true, isClearAllSign: true },
      { value: 'C', title: '', isSignButton: true, isClearSign: true },
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
    }
  },
  actions: {
  },
  modules: {
  }
})
