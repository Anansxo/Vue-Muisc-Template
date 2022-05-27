<template>
  <div class="player">
    <audio src="mp3/Bob Acri - Sleep Away [Solo Piano].mp3"  controls loop class="audio"></audio>
  </div>
</template>

<script>
export default {
  name: "CommonFooter",
};
</script>

<style lang="less" scoped>
.player {
    background: #f1f3f4;
    height: 60px;
    position: fixed;
    bottom: 0;
		left: 0;
    width: 100%;
  .audio {
    width: 100%;
    height: 100%;
  }
}
</style>