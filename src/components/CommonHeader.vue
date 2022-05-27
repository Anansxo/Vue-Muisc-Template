<template>
  <div class="header">
    <div class="logo">
      <h1>好听音乐</h1>
    </div>
    <input type="text" name="" id="" placeholder="搜索歌曲..." />
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  .logo {
    display: flex;
    width: 200px;
    justify-content: center;
    h1 {
      color: #fff;
      font-size: 24px;
      font-family: "Courier New", Courier, monospace;
    }
  }
  input {
    border-radius: 5px;
    height: 30px;
    padding-left: 1em;
    border: none;
    background-color: #afafaf;
    font-family: "Courier New", Courier, monospace;
  }
}
</style>