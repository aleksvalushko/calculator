<template>
  <div :class="$style.mainFormBlock">
    <div :class="$style.headerBlock">
      <div :class="$style.menu">Menu</div>
      <el-tabs
        v-model="memoryName"
        :class="$style.memoryTabs"
        @tab-click="handleClick"
      >
        <el-tab-pane label="History" name="history"/>
        <el-tab-pane label="Memory" name="memory"/>
      </el-tabs>
    </div>
    <div :class="$style.mainForm">
      <div :class="$style.resultAndButtonsBlock">
        <Result/>
        <Buttons/>
      </div>
      <MemoryAndHistory/>
    </div>
  </div>
</template>

<script>
import MemoryAndHistory from '@/05-components/MemoryAndHistory'
import Buttons from '@/05-components/Buttons'
import Result from '@/05-components/Result'
export default {
  name: 'MainForm',
  components: { MemoryAndHistory, Buttons, Result },
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
  background-color: #e8e9e9;
  display: flex;
  flex-direction: column;
  padding: 5px;

  .headerBlock {
    height: 10%;
    display: flex;
    justify-content: space-between;
    font-size: 17px;

    .menu {
      width: 70%;
      display: flex;
      align-items: center;
    }

    .memoryTabs {
      width: 29%;
      display: flex;
      align-self: flex-end;
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

  .mainForm {
    height: 90%;
    display: flex;
    justify-content: space-between;
  }

  .resultAndButtonsBlock {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
