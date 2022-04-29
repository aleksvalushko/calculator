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
        :class="$style.memoryAndHistoryTabs"
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
      <div :class="$style.historyAndMemoryDeleteButtonBlock">
        <el-button
          size="mini"
          :class="$style.historyAndMemoryDeleteButton"
          @click="clearHistory"
        >
          <i
            class="el-icon-delete"
            style="font-size: 25px;"
          ></i>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

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
    },
    clearHistory () {
      this.SET_HISTORY([])
    },
    ...mapMutations(['SET_HISTORY'])
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
    width: 75%;

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
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .memoryAndHistoryTabs {
      height: 92%;
      display: flex;
      flex-direction: column;
    }

    .historyAndMemoryDeleteButtonBlock {
      width: 100%;
      height: 8%;
      display: flex;
      align-items: flex-end;
      justify-content: right;
      margin-top: 5px;

      .historyAndMemoryDeleteButton {
        background: transparent;
        padding: 7px;
      }

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
