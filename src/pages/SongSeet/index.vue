<template>
  <div class="wrap">
    <div class="header">
      <img :src="topList.coverImgUrl" class="img" />
      <div class="header-warp">
        <div class="tag">精品歌单</div>
        <div class="title">{{ topList.name }}</div>
      </div>
    </div>
    <div class="nav">
      <!-- tab栏 顶部 -->
      <div class="tab-bar">
        <ul>
          <li
            class="all"
            :class="{ active: tag == '全部' }"
            @click="tag = '全部'"
          >
            全部
          </li>
          <li
            class="item"
            :class="{ active: tag == '欧美' }"
            @click="tag = '欧美'"
          >
            欧美
          </li>
          <li
            class="item"
            :class="{ active: tag == '华语' }"
            @click="tag = '华语'"
          >
            华语
          </li>
          <li
            class="item"
            :class="{ active: tag == '流行' }"
            @click="tag = '流行'"
          >
            流行
          </li>
          <li
            class="item"
            :class="{ active: tag == '说唱' }"
            @click="tag = '说唱'"
          >
            说唱
          </li>
          <li
            class="item"
            :class="{ active: tag == '摇滚' }"
            @click="tag = '摇滚'"
          >
            摇滚
          </li>
          <li
            class="item"
            :class="{ active: tag == '民谣' }"
            @click="tag = '民谣'"
          >
            民谣
          </li>
          <li
            class="item"
            :class="{ active: tag == '电子' }"
            @click="tag = '电子'"
          >
            电子
          </li>
          <li
            class="item"
            :class="{ active: tag == '轻音乐' }"
            @click="tag = '轻音乐'"
          >
            轻音乐
          </li>
          <li
            class="item"
            :class="{ active: tag == '影视原声' }"
            @click="tag = '影视原声'"
          >
            影视原声
          </li>
          <li
            class="item"
            :class="{ active: tag == 'ACG' }"
            @click="tag = 'ACG'"
          >
            ACG
          </li>
          <li
            class="item"
            :class="{ active: tag == '怀旧' }"
            @click="tag = '怀旧'"
          >
            怀旧
          </li>
          <li
            class="item"
            :class="{ active: tag == '治愈' }"
            @click="tag = '治愈'"
          >
            治愈
          </li>
          <li
            class="item"
            :class="{ active: tag == '旅行' }"
            @click="tag = '旅行'"
          >
            旅行
          </li>
        </ul>
      </div>
      <!-- tab的内容区域
      <div class="tab-content">
        <div class="items">
          <div class="item" v-for="(item, index) in list" :key="index">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <li class="num">{{ item.playCount }}</li>
              </div>
              <img :src="item.coverImgUrl" alt="" />
              <li class="iconfont icon-play" @click="toPlaylist(item.id)"></li>
            </div>
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
      </div> -->
    </div>

    <div class="songseet-list-warp">
      <div class="songseet-list" v-for="(item, index) in list" :key="index">
        <img :src="item.coverImgUrl" alt="" srcset="" class="list-item pointer" />
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="footer">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SongSeet",
  data() {
    return {
      // 总条数
      total: 0,
      // 页码
      page: 1,
      // 顶部的推荐歌单
      topList: {},
      // 歌单列表
      list: [],
      // 当前选择的数据
      tag: "全部",
    };
  },
  created() {
    // 顶部的 精品歌单
    this.topData();
    // 歌单列表
    this.listData();
  },
  methods: {
    // 抽取的方法1 顶部的数据
    topData() {
      axios({
        url: "https://autumnfish.cn/top/playlist/highquality",
        method: "get",
        params: {
          limit: 1,
          // 分类数据
          cat: this.tag,
        },
      }).then((res) => {
        // console.log(res)
        this.topList = res.data.playlists[0];
      });
    },
    // 抽取的方法2 列表数据
    listData() {
      axios({
        url: "https://autumnfish.cn/top/playlist/",
        method: "get",
        params: {
          limit: 10,
          // 起始的值 （页码-1）*每页多少条数据
          offset: (this.page - 1) * 10,
          // 分类数据
          cat: this.tag,
        },
      }).then((res) => {
        // console.log(res)
        // 保存总条数
        this.total = res.data.total;
        // 保存数据
        this.list = res.data.playlists;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  color: #fff;
  width: 100%;
  padding: 0 15px;
  height: 180px;
  border-radius: 10px;
  border: 1px solid #fff;
  .img {
    width: 150px;
    height: 150px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
  }
  .header-warp {
    margin-left: 15px;
    .tag {
      width: 100px;
      height: 30px;
      color: #e7aa5a;
      font-size: 14px;
      text-align: center;
      line-height: 30px;
      border: 1px solid #e7aa5a;
      border-radius: 20px;
      margin-bottom: 30px;
    }
  }
}
.nav {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  .all {
    color: rgb(185, 185, 185);
    text-align: center;
    line-height: 30px;
    width: 100px;
    height: 30px;
    border: 1px solid #434343;
    border-radius: 15px;
  }
  .all:hover,
  li:hover {
    cursor: pointer;
    color: #fff;
  }
  li {
    display: inline-block;
    margin: 0 15px;
    color: rgb(185, 185, 185);
  }
}
.songseet-list-warp {
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-evenly;
  width: 100%;
  height: 500px;
  .songseet-list {
    width: 20%;
  }
  .list-item {
    height: 200px;
    margin: 0 10px 5px 10px;
    border-radius: 5px;
    background-color: #4b96d3;
  }
  p {
    margin: 0 0 0 10px;
    font-size: 14px;
    color: rgb(185, 185, 185);
    margin-bottom: 15px;
  }
}
.footer {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
</style>