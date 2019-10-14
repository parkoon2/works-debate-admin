import { combineReducers } from "redux";
import uiReducer from "./ui";
import authReducer from "./auth";
import userReducer from "./users";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  users: userReducer
});

export default rootReducer;
