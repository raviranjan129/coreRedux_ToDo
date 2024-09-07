// {type:"",payload:""}
//dispatch({type:"ADD",payload:1})

import { addTodoActionCreator, removeTodoCreator } from "./actionCreator.js";
import store from "./store.js";
console.log(store.getState())

store.dispatch(addTodoActionCreator('buy milk'))
store.dispatch(addTodoActionCreator('buy fruit'))
store.dispatch(addTodoActionCreator('buy curd'))
store.dispatch(addTodoActionCreator('buy cheese'))
store.dispatch(removeTodoCreator(store.getState().todos[0].id))
