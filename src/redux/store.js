import { createStore } from "redux";
import { authReducer } from "./reducer/authReducer";
import { reducers } from "./reducer/index.jsx";



const store = createStore(reducers)

export default store