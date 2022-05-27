<template>
  <div class="wrap">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <!-- <h3 class="medium">{{ item }}</h3> -->
        <img :src="item.imageUrl" class="banners" />
      </el-carousel-item>
    </el-carousel>
    <div class="song-list">
      <span class="w-title">推荐歌单 ></span>
      <div class="list-box">
        <div
          v-for="(item, index) in recommendedSongList"
          :key="index"
          class="list"
        >
          <img :src="item.picUrl" alt="" class="list-item pointer" />
          <p class="list-p">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <span class="w-title">最新音乐 </span>
    <div class="new-music-warp">
      <div class="new-music-box " v-for="(item, index) in newSongs" :key="index">
        <img :src="item.picUrl" alt="" srcset="" class="img pointer" />
        <div class="singer-info">
          <div class="song">{{ item.name }}</div>
          <div class="singer pointer">{{ item.song.artists[0].name }}</div>
        </div>
      </div>
    </div>
    <span class="w-title">推荐MV ></span>
    <div class="mv-warp">
      <div v-for="(item, index) in newMvs" :key="index">
        <img :src="item.picUrl" alt="" srcset="" class="mv-item pointer" />
        <p class="mv-p">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CommonTopNav",
  data() {
    return {
      banners: [], //轮播广告栏
      recommendedSongList: [], //推荐歌单
      newSongs: [], //最新音乐
      newMvs: [], //最新mv
    };
  },
  created() {
    // 轮播广告栏
    axios({
      url: "https://autumnfish.cn/banner",
      method: "get",
    }).then((res) => {
      // console.log(res)
      this.banners = res.data.banners.slice(0, 4);
    });

    // 推荐歌单
    axios({
      url: "https://autumnfish.cn/personalized",
      method: "get",
      params: {
        // 获取的数据量
        limit: 8,
      },
    }).then((res) => {
      // console.log(res)
      this.recommendedSongList = res.data.result;
    });
    // 最新音乐
    axios({
      url: "https://autumnfish.cn/personalized/newsong",
      method: "get",
    }).then((res) => {
      // console.log(res)
      this.newSongs = res.data.result;
    });
    // 最新mv
    axios({
      url: "https://autumnfish.cn/personalized/mv",
      method: "get",
    }).then((res) => {
      // console.log(res)
      this.newMvs = res.data.result;
    });
  },
};
</script>

<style lang="less" scoped>
.banners {
  width: 100%;
}

.w-title {
  display: inline-block;
  font-size: 20px;
  color: #d0d0d0;
  margin: 20px 0 10px 0;
  font-weight: bold;
}
.w-title:hover {
  cursor: pointer;
  color: #fff;
}
// 推荐歌单
.song-list {
  .list-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    // background-color: yellowgreen;
    .list {
      margin-top: 10px;
      // background-color: #99a9bf;
      .list-item {
        width: 250px;
        height: 240px;
        border-radius: 5px;
      }
      .list-p {
        padding: 5px 0;
        width: 250px;
        margin: 0;
        font-size: 14px;
        color: rgb(199, 199, 199);
      }
    }
  }
}
// 最新音乐
.new-music-warp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 450px;
  .new-music-box {
    width: 519px;
    height: 80px;
    margin-top: 10px;
    .img {
      float: left;
      width: 80px;
      height: 80px;
      border-radius: 5px;
      background-color: rgb(92, 137, 233);
    }
    //   // 歌手歌曲信息
    .singer-info {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 84%;
      height: 100%;
      padding-left: 10px;
      margin-left: 80px;
      .song {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        font-size: 17px;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        color: #d0d0d0;
      }
      .singer {
        width: 100%;
        color: #727272;
      }
    }
  }
}
// 推荐MV
.mv-warp {
  display: flex;
  justify-content: space-evenly;
  height: 150px;
  width: 100%;
  .mv-item {
    width: 250px;
    height: 100%;
    border-radius: 5px;
  }
  .mv-p {
    margin: 0;
    font-size: 14px;
    color: rgb(199, 199, 199);
  }
}
</style>