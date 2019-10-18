import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import catchError from "../middlewares/catchError";
import catchPage from "../middlewares/catchPage";
const middlewares = [thunk, catchError, catchPage];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
