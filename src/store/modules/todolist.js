// 子模块  私有
const todolist = {
    namespaced: true,  // 访问通过空间名称todolist  
    // 调用 this.$store.state.todolist(模块名).count 
    state:{
        todolist:[
            {id:'1',name:'打羽毛球',status:false},
            {id:'2',name:'看书',status:false},
            {id:'3',name:'购物',status:true}
        ]
    },
    // 同步修改数据的唯一途径
     mutations: {
         // 添加
        add(state, item) {
            state.todolist.push(item)
        },
        // 删除 
        delTodolist(state,id){
            // 过滤传过来的id,留下其他的id,排除法
            state.todolist = state.todolist.filter(item=>item.id !== id)
        },
        // 编辑
        updateTodolist(state,updateTodolist){
            // findIndex 返回的是下标
            let index = state.todolist.findIndex(item => item.id === updateTodolist.id)
            // 后者覆盖前者   Object.assign 合并
            Object.assign(state.todolist[index],updateTodolist)
        }
     },
     // 对数据进行筛选(相当于计算属性computed)
     getters: {
         getStatusNum(state){
             let result = {done:0,notdone:0};
             state.todolist.forEach(item=>{
                 if(item.status){
                     result.done++
                 }else{
                     result.notdone++
                 }
             })
             return result
         }
    }

}

export default todolist