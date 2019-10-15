import { combineReducers } from "redux";
import uiReducer from "./ui";
import authReducer from "./auth";
import userReducer from "./users";
import debateReducer from "./debates";
import qnaReducer from "./qna";
import pageReducer from "./page";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  users: userReducer,
  debates: debateReducer,
  qna: qnaReducer,
  page: pageReducer
});

export default rootReducer;
