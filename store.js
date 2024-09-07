import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer.js";
import { userReducer } from "./userReducer.js";

const rootReducer=combineReducers({
    todosState:todoReducer,
    usersState:userReducer
})

const store= createStore(rootReducer); // ToDo: add the relevant reducer;

store.subscribe(()=>{
    console.log(store.getState())
})

export default store;