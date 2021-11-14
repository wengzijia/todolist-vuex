import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入bootstrap css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

// 导入store状态数据
import store from "@/store/index.js"

Vue.config.productionTip = false

new Vue({
  store, // 挂载到根组件,调用 this.$store
  router,
  render: h => h(App)
}).$mount('#app')
