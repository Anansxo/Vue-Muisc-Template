<template>
  <div>
    <ul>
      <!-- <li><a href="#">发现音乐</a></li> -->
      <!-- <li><a href="#">歌单</a></li> -->
      <li>
        <router-link :to="{name:'main'}">首页</router-link>
      </li>
      <li>
        <router-link :to="{name: 'songseet'}">歌单</router-link>
      </li>
      <!-- <li><a href="#">排行榜</a></li> -->
      <li>
        <router-link :to="{name: 'newMuisic'}">最新音乐</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CommonAsise",
};
</script>

<style lang="less" scoped>
ul {
	padding-left: 0;
  li {
		height: 50px;
		width: 100%;
		line-height: 50px;
		text-align: center;
    a {
      color: #afafaf;
      font-size: 20px;
    }
		a:hover {
			color: #fff;
		}
  }
}
</style>