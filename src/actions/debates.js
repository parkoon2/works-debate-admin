import {
  GET_DEBATES_SUCCESS,
  DELETE_DEBATES_SUCCESS,
  DELETE_DEBATES_REQUEST,
  GET_DEBATES_FAILURE,
  GET_DEBATES_REQUEST
} from "../constants/actionTypes";

import { debates } from "../data";

export const fetchDebates = () => dispatch => {
  dispatch({
    type: GET_DEBATES_REQUEST
  });

  setTimeout(() => {
    dispatch({
      type: GET_DEBATES_SUCCESS,
      payload: {
        items: debates
      }
    });
  }, 1500);
};

export const deleteDebate = id => dispatch => {
  dispatch({
    type: DELETE_DEBATES_REQUEST,
    payload: {
      id
    }
  });

  setTimeout(() => {
    dispatch({
      type: DELETE_DEBATES_SUCCESS
    });
  }, 1500);
};
