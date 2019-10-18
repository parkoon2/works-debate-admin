import { error } from "../helpers/message";
import { LOGIN_FAILURE } from "../constants/actionTypes";

const catchError = store => next => action => {
  console.log("========= LOG START in catchError Middleware =======");
  console.log(store, action);
  console.log("========= LOG END =========");

  if (action.payload && action.payload.error) {
    switch (action.type) {
      case LOGIN_FAILURE:
        return error(action.payload.error);
    }
  }

  next(action);
};

export default catchError;
