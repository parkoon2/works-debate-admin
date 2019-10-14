import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";
const middlewares = [thunk];

const configureStore = () => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};

export default configureStore;
