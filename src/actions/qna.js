import {
  GET_QNA_FAILURE,
  GET_QNA_REQUEST,
  GET_QNA_SUCCESS
} from "../constants/actionTypes";

import { qna } from "../data";

export const fetchQnA = () => dispatch => {
  dispatch({
    type: GET_QNA_REQUEST
  });

  setTimeout(() => {
    dispatch({
      type: GET_QNA_SUCCESS,
      payload: {
        items: qna
      }
    });
  }, 1500);
};
