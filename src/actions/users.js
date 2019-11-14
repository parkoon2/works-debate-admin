import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_USERS_FAILURE,
  DELETE_USER_FAILURE
} from "../constants/actionTypes";

import openNotificationWithIcon from "../helpers/notification";

export const deleteUser = id => dispatch => {
  dispatch({
    type: DELETE_USER_REQUEST
  });

  let body = {
    auth: {
      cpId: "DebateONM",
      authKey: "Q29uc3V…"
    },
    userId: id
  };

  dispatch({
    type: DELETE_USER_SUCCESS,
    payload: {
      id
    }
  });

  openNotificationWithIcon({
    type: "success",
    key: Math.random(),
    message: "사용자 삭제",
    description: `사용자(${id})를 삭제하였습니다.`
  });

  window.$axios
    .post("/user/setDeletionUser", body)
    .then(res => {
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: {
          id
        }
      });

      openNotificationWithIcon({
        type: "success",
        key: Math.random(),
        message: "사용자 삭제",
        description: `사용자(${id})를 삭제하였습니다.`
      });
    })
    .catch(err => {
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: {
          error: err.message
        }
      });
    });
};

export const getUsers = option => dispatch => {
  dispatch({
    type: GET_USERS_REQUEST
  });

  let body = {
    auth: {
      cpId: "DebateONM",
      authKey: "Q29uc3V…"
    },
    ...option
  };

  window.$axios
    .post("/user/getUserList", body)
    .then(res => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: {
          users: res.data.result,
          total: res.data.total
        }
      });
    })
    .catch(err => {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: {
          error: err.message
        }
      });
    });
};
