// {type:"",payload:""}
//dispatch({type:"ADD",payload:1})

import { addTodoActionCreator, addUserActionCreator, removeTodoCreator } from "./actionCreator.js";
import store from "./store.js";
console.log(store.getState())

store.dispatch(addTodoActionCreator('buy milk'))
console.log(store.getState().todosState)
store.dispatch(addTodoActionCreator('buy fruit'))
console.log(store.getState().todosState)
store.dispatch(addUserActionCreator("john doe"))


// store.dispatch(addTodoActionCreator('buy curd'))
// store.dispatch(addTodoActionCreator('buy cheese'))
// store.dispatch(removeTodoCreator(store.getState().todos[0].id))
