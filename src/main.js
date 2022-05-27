import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"; //路由
import router from './router'  //路由器
import  "./assets/css/index.css"; //初始化css
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
