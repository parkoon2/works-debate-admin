import { createStore } from "redux";
import rootReducer from "../reducer";

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
