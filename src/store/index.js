import Vue from "vue"

// 导入Vuex
import Vuex from "vuex"

// 该插件默认将数据存储到localStorage中
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex); // 安装Vuex

// 导入子模块
import todolist from "@/store/modules/todolist.js"

// 创建Vuex.Store仓库实例
const store = new Vuex.Store({
    // 注册子模块
    modules: {
        todolist    // 模块空间名:对象   一样可以简写成一个
    },
    // 永久存储
    plugins: [createPersistedState({
        key: 'myvuex'  // 改名字
      })]
})

export default store   // 暴露对象