import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
