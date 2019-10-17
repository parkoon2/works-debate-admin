import {
  GET_QNAS_REQUEST,
  GET_QNAS_SUCCESS,
  GET_QNA_DETAIL_REQUEST,
  GET_QNA_DETAIL_SUCCESS,
  UPDATE_QNA_COMMENT_REQUEST,
  UPDATE_QNA_COMMENT_SUCCESS,
  GET_QNAS_FAILURE,
  GET_QNA_DETAIL_FAILURE,
  UPDATE_QNA_COMMENT_FAILURE,
  DELETE_QNA_COMMENT_REQUEST,
  DELETE_QNA_COMMENT_SUCCESS,
  DELETE_QNA_COMMENT_FAILURE
} from "../constants/actionTypes";

import store from "../store";
import history from "../helpers/history";

export const fetchQnA = option => dispatch => {
  const body = {
    auth: {
      cpId: "DebateWeb",
      authKey: "Q29uc3V…"
    },
    ...option
  };

  dispatch({
    type: GET_QNAS_REQUEST
  });

  window.$axios
    .post("/qna/getQnaList", body)
    .then(r => {
      return dispatch({
        type: GET_QNAS_SUCCESS,
        payload: {
          items: r.data.result,
          total: r.data.total
        }
      });
    })
    .catch(err =>
      dispatch({
        type: GET_QNAS_FAILURE,
        payload: {
          error: err.message
        }
      })
    );
};

export const fetchQnAById = index => dispatch => {
  dispatch({
    type: GET_QNA_DETAIL_REQUEST
  });

  const body = {
    auth: {
      cpId: "DebateWeb",
      authKey: "Q29uc3V…"
    },
    index
  };

  window.$axios
    .post("/qna/getQnaInfo", body)
    .then(r => {
      console.log("r", r.data.result);
      return dispatch({
        type: GET_QNA_DETAIL_SUCCESS,
        payload: {
          item: r.data.result
        }
      });
    })
    .catch(err =>
      dispatch({
        type: GET_QNA_DETAIL_FAILURE,
        payload: {
          error: err.message
        }
      })
    );
};

export const deleteQnAById = index => dispatch => {
  dispatch({
    type: DELETE_QNA_COMMENT_REQUEST
  });

  const body = {
    auth: {
      cpId: "DebateWeb",
      authKey: "Q29uc3V…"
    },
    index,
    userId: store.getState().auth.user ? store.getState().auth.user.id : "test"
  };

  window.$axios
    .post("/qna/setDeletionQna", body)
    .then(r => {
      dispatch({
        type: DELETE_QNA_COMMENT_SUCCESS
      });

      // todo... history back 하고 싶은데...
      window.location.href = "/qna";
    })
    .catch(err =>
      dispatch({
        type: DELETE_QNA_COMMENT_FAILURE,
        payload: {
          error: err.message
        }
      })
    );
};

export const updateComment = (index, comment) => dispatch => {
  dispatch({
    type: UPDATE_QNA_COMMENT_REQUEST
  });

  const body = {
    auth: {
      cpId: "DebateWeb",
      authKey: "Q29uc3V…"
    },
    index,
    comment
  };

  window.$axios
    .post("/qna/setQnaComment", body)
    .then(r => {
      return dispatch({
        type: UPDATE_QNA_COMMENT_SUCCESS,
        payload: {
          comment
        }
      });
    })
    .catch(err =>
      dispatch({
        type: UPDATE_QNA_COMMENT_FAILURE,
        payload: {
          error: err.message
        }
      })
    );
};
