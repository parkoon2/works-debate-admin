import {
  GET_DEBATES_FAILURE,
  GET_DEBATES_REQUEST,
  GET_DEBATES_SUCCESS,
  DELETE_DEBATES_FAILURE,
  DELETE_DEBATES_REQUEST,
  DELETE_DEBATES_SUCCESS
} from "../constants/actionTypes";

const INITIAL_STATE = {
  items: [],
  currentPage: 1,
  error: null,
  loading: false,
  total: null
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DEBATES_FAILURE:
      return {
        ...state,
        items: [],
        error: action.payload.error,
        loading: false
      };

    case GET_DEBATES_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_DEBATES_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        total: action.payload.total,
        error: null,
        loading: false
      };

    case DELETE_DEBATES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case DELETE_DEBATES_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case DELETE_DEBATES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };

    default:
      return state;
  }
}
