import { error } from "../helpers/message";
import { LOGIN_FAILURE } from "../constants/actionTypes";

const catchError = store => next => action => {
  if (action.payload && action.payload.error) {
    switch (action.type) {
      case LOGIN_FAILURE:
        return error(action.payload.error);

      default:
        break;
    }
  }

  next(action);
};

export default catchError;
