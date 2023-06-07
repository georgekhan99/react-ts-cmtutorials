import { combineReducers } from "redux";
import registerReducer, { registerState }  from "./register.reducer";


export default combineReducers({
    registerReducer
})

export interface RootReducers {
    registerReducer: registerState;
}