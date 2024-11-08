import { combineReducers } from "redux";
import {authReducer, registerReducer} from "./authReducers";

const rootReducer = combineReducers({ auth: authReducer, register: registerReducer});

export default rootReducer;