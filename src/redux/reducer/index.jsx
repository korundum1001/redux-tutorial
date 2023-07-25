import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";
import { loginReducer } from "./loginReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers(
    {authReducer,
    productReducer,
loginReducer}
)