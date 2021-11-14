<template>
  <div class="bigBox">
    <h1>To do list</h1>
    <div class="header">
      <input
        type="text"
        class="form-control"
        placeholder="请输入您的待办事项"
        @keyup.enter="submit"
        v-model="name"
      />
      <button type="button" class="btn btn-primary" @click="submit">
        提交
      </button>
    </div>
    <table class="table">
      <thead>
        <tr class="table-info">
          <th scope="col">勾选框</th>
          <th scope="col">序号</th>
          <th scope="col">名称</th>
          <th scope="col">状态</th>
          <th scope="col">编辑</th>
          <th scope="col">删除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in todolist" :key="item.id">
          <th scope="row">
            <input class="form-check-input mt-0" type="checkbox"  @click="status(item)" v-model="item.status"/>
          </th>
          <th scope="row">{{ index + 1 }}</th>
          <th :class="{'finish':item.status}" scope="row">{{ item.name }}</th>
          <th scope="row">{{ item.status ? "完成" : "未完成" }}</th>
          <th scope="row">
            <button class="btn btn-light" @click="edit(item.id)">编辑</button>
          </th>
          <th scope="row">
            <button class="btn btn-danger" @click="rm(item.id)">删除</button>
          </th>
        </tr>
      </tbody>
    </table>
    <h1>已完成:{{getStatusNum.done}}   未完成:{{getStatusNum.notdone}}</h1>
  </div>
</template>

<script>
// 辅助函数
import { mapState, mapMutations, mapGetters } from "vuex";
// 随机产生全球唯一的id
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      name: "",
      updateTodo:null // 记录当前正在编辑的任务 {}
    };
  },
  computed: {
    ...mapState("todolist", ["todolist"]),
    ...mapGetters('todolist',['getStatusNum'])
  },
  methods: {
    // 展开运算符  模块名   模块下的数据  调用 this.add
    ...mapMutations("todolist", ["add", "delTodolist", "updateTodolist"]),
    // 提交
    submit() {
      if (this.updateTodo) {
        // 编辑
        this.updateTodo.name = this.name;
        this.updateTodolist(this.updateTodo);
      } else {
        // 添加
        let item = { id: nanoid(), name: this.name, status: false };
        this.add(item);
      }
      this.updateTodo = null
      this.name = "";
    },
    // 删除
    rm(id) {
      if (!confirm("是否删除?")) {
        return;
      }
      this.delTodolist(id);
    },
    // 编辑
    edit(id) {
      //找到点击的id整条数据   find返回的是整条数据
      let updateTodolist = this.todolist.find(item => item.id === id);
      this.updateTodo = updateTodolist;
      let { name } = updateTodolist;
      this.name = name;
    },
    // 完成
    status(item){
      item.status = !item.status;
      this.updateTodolist(item)
    }
  },
};
</script>

<style lang="scss" scoped>
.bigBox {
  width: 600px;
  margin: 0 auto;
  .header {
    display: flex;
    button {
      width: 80px;
    }
  }
  .table {
    margin-top: 30px;
    .finish{
      text-decoration: line-through;
      color: blue;
    }
  }
}
</style>