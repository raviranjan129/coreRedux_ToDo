import { createStore } from "redux";
import todoReducer from "./todoReducer.js";

const store= createStore(todoReducer); // ToDo: add the relevant reducer;

store.subscribe(()=>{
    console.log(store.getState())
})

export default store;