import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS
} from "../constants/actionTypes";
import { users } from "../data";
import openNotificationWithIcon from "../helpers/notification";

export const deleteUser = id => dispatch => {
  dispatch({
    type: DELETE_USER_REQUEST
  });

  setTimeout(() => {
    dispatch({
      type: DELETE_USER_SUCCESS
    });

    openNotificationWithIcon({
      type: "success",
      key: Math.random(),
      message: "사용자 삭제",
      description: "사용자를 성공적으로 지웠습니다."
    });

    // 삭제 성공했으면 사용자 다시 불러오기
  }, 2000);
};

export const getUsers = () => dispatch => {
  dispatch({
    type: GET_USERS_REQUEST
  });

  setTimeout(() => {
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: {
        users
      }
    });
  }, 2000);

  // dispatch({
  //     type:
  //     payload: {
  //         error: err.message
  //     }
  // })
};
