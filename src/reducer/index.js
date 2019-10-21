import { combineReducers } from "redux";
import uiReducer from "./ui";
import authReducer from "./auth";
import userReducer from "./users";
import debateReducer from "./debates";
import qnaReducer from "./qna";
import pageReducer from "./page";
import statisticReducer from "./statistic";

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  users: userReducer,
  debates: debateReducer,
  qna: qnaReducer,
  page: pageReducer,
  statistic: statisticReducer
});

export default rootReducer;
