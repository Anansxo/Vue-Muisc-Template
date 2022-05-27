<template>
  <el-container>
    <el-header>
      <!-- 头部组件 -->
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <!-- 侧边组件 -->
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-main>
          <!-- 主题内容 -->
          <!-- <Main></Main> -->
          <router-view></router-view>
        </el-main>
        <el-footer>
          <!-- 底部播放组件 -->
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../components/CommonHeader.vue";
import Aside from "../components/CommonAside.vue";
// import Main from "../components/CommonMain.vue";
import Footer from "../components/CommonFooter.vue";
export default {
  name: "Home",
  components: {
    Header,
    Aside,
    // Main,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style>
.el-header {
  padding: 0 !important;
  background-color: #222225;
}
.el-aside {
  height: 100vh !important;
  background-color: #2b2b2b;
  padding: 0 20px;
  border-right: 1px solid #444444;
}
.el-main {
  height: 100vh !important;
  background-color: #2b2b2b;
}
.el-footer {
  padding: 0 !important;
  border-top: 1px solid #444444;
  background-color: #222225;
}
</style>