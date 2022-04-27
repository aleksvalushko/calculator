<template>
  <div :class="$style.mainFormBlock">
    <div :class="$style.mainForm">
      <div :class="$style.menu">
        Menu
      </div>
      <div :class="$style.resultAndButtonsBlock">
        <Result />
        <Buttons />
      </div>
    </div>
    <div :class="$style.historyAndMemoryBlock">
      <el-tabs
        v-model="memoryName"
        :class="$style.memoryTabs"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="History"
          name="history"
        >
          <history />
        </el-tab-pane>
        <el-tab-pane
          label="Memory"
          name="memory"
        >
          <memory />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Buttons from '../05-components/Buttons'
import Result from '../05-components/Result'
import History from './History'
import Memory from './Memory'
export default {
  name: 'MainForm',
  components: { Memory, History, Buttons, Result },
  data () {
    return {
      memoryName: 'history'
    }
  },
  props: {},
  methods: {
    handleClick (tab, event) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="scss">
.mainFormBlock {
  width: 80%;
  height: 80vh;
  border: 1px solid #1883d7;
  background-color: #ebeef5;
  display: flex;
  justify-content: space-between;
  padding: 5px;

  .mainForm {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70%;

    .menu {
      width: 100%;
      height: 10%;
      display: flex;
      align-items: center;
      justify-content: left;
    }

    .resultAndButtonsBlock {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .historyAndMemoryBlock {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .memoryTabs {
      display: flex;
      flex-direction: column;
    }

    :global(.el-tabs__item) {
      color: #000000;
      font-size: 17px;
    }

    :global(.el-tabs__item:hover) {
      color: #000000;
    }

    :global(.el-tabs__item.is-active) {
      color: #000000;
    }

    :global(.el-tabs__header) {
      margin: 0;
    }
  }
}
</style>
