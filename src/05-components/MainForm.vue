<template>
  <div :class="$style.mainFormBlock">
    <div :class="$style.menu">Menu</div>
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
  props: {}
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

  .menu {
    height: 10%;
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
