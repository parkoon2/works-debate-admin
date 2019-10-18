import { error } from "../helpers/message";
import { LOGIN_FAILURE } from "../constants/actionTypes";

const catchError = store => next => action => {
  if (action.payload && action.payload.error) {
    console.log("========= LOG START in catchError Middleware =======");
    console.log(store, action);
    console.log("========= LOG END =========");
    switch (action.type) {
      case LOGIN_FAILURE:
        return error(action.payload.error);
    }
  }

  next(action);
};

export default catchError;
