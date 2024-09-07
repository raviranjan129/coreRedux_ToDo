import { ADD_USER } from "./constants.js"

const initialState = {
    user:[]
}

export function userReducer(state=initialState,action){
    if(action.type===ADD_USER){
        return {
            ...state,
            users:[
                ...state.user,
                action.payload
            ]
        }
    }else{
        return state;
    }
}
