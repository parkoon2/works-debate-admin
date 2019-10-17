import {
  GET_DEBATES_SUCCESS,
  DELETE_DEBATES_SUCCESS,
  DELETE_DEBATES_REQUEST,
  // GET_DEBATES_FAILURE,
  GET_DEBATES_REQUEST,
  GET_DEBATES_FAILURE
} from "../constants/actionTypes";

import { debates } from "../data";

export const fetchDebates = option => dispatch => {
  dispatch({
    type: GET_DEBATES_REQUEST
  });

  const body = {
    auth: {
      cpId: "DebateWeb",
      authKey: "Q29uc3V…"
    },
    ...option
  };

  window.$axios
    .post("/room/getRoomList", body)
    .then(r => {
      dispatch({
        type: GET_DEBATES_SUCCESS,
        payload: {
          items: r.data.result,
          total: r.data.total
        }
      });
    })
    .catch(err =>
      dispatch({
        type: GET_DEBATES_FAILURE,
        payload: {
          error: err.message
        }
      })
    );
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
