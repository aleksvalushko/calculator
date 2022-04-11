import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: 0,
    memoryButtons: [
      { value: 'MC', title: 'Clear all memory', isMemoryButton: true },
      { value: 'MR', title: 'Memory recall', isMemoryButton: true },
      { value: 'M+', title: 'Memory add', isMemoryButton: true },
      { value: 'M-', title: 'Memory subtract', isMemoryButton: true },
      { value: 'MS', title: 'Memory store', isMemoryButton: true }
    ],
    buttons: [
      { value: '%', title: '', isSignButton: true },
      { value: 'CE', title: '', isSignButton: true },
      { value: 'C', title: '', isSignButton: true },
      { value: 'BackSpace', title: '', isSignButton: true },
      { value: '1/x', title: '', isSignButton: true },
      { value: 'Square', title: '', isSignButton: true },
      { value: 'Radical', title: '', isSignButton: true },
      { value: 'Divide', title: '', isSignButton: true },
      { value: '7', title: '' },
      { value: '8', title: '' },
      { value: '9', title: '' },
      { value: 'x', title: '', isSignButton: true },
      { value: '4', title: '' },
      { value: '5', title: '' },
      { value: '6', title: '' },
      { value: '-', title: '', isSignButton: true },
      { value: '1', title: '' },
      { value: '2', title: '' },
      { value: '3', title: '' },
      { value: '+', title: '', isSignButton: true },
      { value: '+/-', title: '' },
      { value: '0', title: '' },
      { value: ',', title: '' },
      { value: '=', title: '', isEquallyButton: true }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
