<template>
  <div class="wrap">
    <div class="tag">
      <ul>
        <li v-for="(item, index) in tagName" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="list-wrap">
      <div
        class="list"
        v-for="(item, index) in lists"
        :key="index"
        style="overflow: auto"
      >
        <div class="index">{{ index + 1 }}</div>

        <img :src="item.album.picUrl" alt="" class="img pointer" />
        <div class="song-title ">{{ item.name }}</div>
        <div class="singer pointer">{{ item.album.artists["0"].name }}</div>
        <div class="album pointer">{{ item.album.name }}</div>
        <div class="song-time">{{ item.duration }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewMusic",
  data() {
    return {
      tagName: ["全部", "华语", "欧美", "日本", "韩国"],
      lists: [],
    };
  },
  watch: {
    tag() {
      this.getList();
    },
  },
  created() {
    this.getList();
  },
  methods: {
    // 获取列表数据
    getList() {
      // 获取 最新音乐数据
      axios({
        url: "https://autumnfish.cn/top/song",
        method: "get",
        params: {
          // 传递 设置的数据
          type: this.tag,
        },
      }).then((res) => {
        // console.log(res)
        this.lists = res.data.data;
        // 处理时长 毫秒 转为 分秒
        for (let i = 0; i < this.lists.length; i++) {
          // 获取 总毫秒数
          let duration = this.lists[i].duration;
          // 假定 	350750 毫秒
          // 秒 350750/1000  350秒
          // 分 350 /60
          // 秒 350 % 60
          let min = parseInt(duration / 1000 / 60);
          if (min < 10) {
            min = "0" + min;
          }
          let sec = parseInt((duration / 1000) % 60);
          if (sec < 10) {
            sec = "0" + sec;
          }
          // console.log(min + '|' + sec)
          this.lists[i].duration = `${min}:${sec}`;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.tag {
  display: flex;
  width: 100%;
  li:first-child {
    color: rgb(185, 185, 185);
    text-align: center;
    line-height: 30px;
    width: 80px;
    height: 30px;
    border: 1px solid #bb3636;
    border-radius: 15px;
  }
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
.list-wrap {
  width: 100%;
  .list {
    display: flex;
    align-items: center;
    width: 100%;
    height: 90px;
    color: rgba(204, 204, 204, 0.829);
    .img {
      width: 80px;
      height: 70px;
      line-height: 50px;
      border-radius: 5px;
      margin-left: 10px;
      background-color: rgb(138, 31, 54);
    }
    .song-title {
      width: 30%;
      margin-left: 10px;
      color: rgb(240, 240, 240);
    }
    .singer {
      width: 30%;
      font-size: 14px;
    }
    .album:hover,
    .singer:hover {
      color: #eee;
      cursor: pointer;
    }
    .album {
      width: 30%;
      font-size: 14px;
    }
    .song-time {
      width: 10%;
      font-size: 14px;
    }
  }
  /* 奇数行 */
  .list:nth-child(odd) {
    background-color: #2e2e2e;
  }
  /* 偶数行 */
  .list:nth-child(even) {
    background-color: #2b2b2b;
  }
  .list:hover {
    background-color: #373737;
  }
  .index {
    padding: 0 20px;
  }
}
</style>