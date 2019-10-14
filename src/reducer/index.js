import { combineReducers } from "redux";
import uiReducer from "./ui";
import authReducer from "./auth";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer
});

export default rootReducer;
