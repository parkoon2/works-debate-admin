import {
  GET_QNAS_FAILURE,
  GET_QNAS_REQUEST,
  GET_QNAS_SUCCESS,
  GET_QNA_DETAIL_FAILURE,
  GET_QNA_DETAIL_REQUEST,
  GET_QNA_DETAIL_SUCCESS,
  UPDATE_QNA_COMMENT_FAILURE,
  UPDATE_QNA_COMMENT_REQUEST,
  UPDATE_QNA_COMMENT_SUCCESS
} from "../constants/actionTypes";

const INITIAL_STATE = {
  items: [],
  currentPage: 1,
  selectedItem: null,
  error: null,
  loading: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_QNAS_FAILURE:
      return {
        ...state,
        items: [],
        error: action.payload.error,
        loading: false
      };

    case GET_QNAS_REQUEST:
      return {
        ...state,
        loading: true,
        selectedItem: null
      };

    case GET_QNAS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        error: null,
        loading: false
      };

    case GET_QNA_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    case GET_QNA_DETAIL_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_QNA_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedItem: action.payload.item
      };

    case UPDATE_QNA_COMMENT_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case UPDATE_QNA_COMMENT_REQUEST:
      return { ...state, loading: true };
    case UPDATE_QNA_COMMENT_SUCCESS:
      console.log("action.payload.updatedItem", action.payload.updatedItem);

      return {
        ...state,
        loading: false,
        selectedItem: action.payload.updatedItem
      };

    default:
      return state;
  }
}
