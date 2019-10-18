import Cookies from "js-cookie";
import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT
} from "../constants/actionTypes";
import moment from "moment";

export const logout = () => {
  window.localStorage.clear();
  return {
    type: LOGOUT
  };
};

export const login = user => disptch => {
  const { id, password } = user;

  disptch({
    type: LOGIN_REQUEST
  });

  window.$axios
    .post("/auth/login", {
      auth: {
        cpId: "DebateWeb",
        authKey: "Q29uc3V…"
      },
      userId: id,
      password: password,
      userType: 0
    })
    .then(res => {
      window.localStorage.setItem("token", "token...");

      disptch({
        type: LOGIN_SUCCESS,
        payload: {
          user: {
            name: "관리자",
            loggedAt: moment()
          },
          token: "token..."
        }
      });
    })
    .catch(err => {
      disptch({
        type: LOGIN_FAILURE,
        payload: {
          error: err.response.data.message
        }
      });
    });
};
