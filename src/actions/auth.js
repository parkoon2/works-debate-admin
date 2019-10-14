import axios from "axios";
import Cookies from "js-cookie";
import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT
} from "../constants/actionTypes";

export const logout = () => {
  Cookies.remove("token");
  return {
    type: LOGOUT
  };
};

export const login = user => disptch => {
  const { id, password } = user;

  disptch({
    type: LOGIN_REQUEST
  });

  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => {
      Cookies.set("token", "token", { expires: 7 });
      disptch({
        type: LOGIN_SUCCESS,
        payload: {
          user: res.data,
          token: "token"
        }
      });
    })
    .catch(err =>
      disptch({
        type: LOGIN_FAILURE,
        payload: {
          error: err.message
        }
      })
    );
};
