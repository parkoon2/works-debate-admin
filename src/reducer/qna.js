import {
  GET_QNA_FAILURE,
  GET_QNA_REQUEST,
  GET_QNA_SUCCESS
} from "../constants/actionTypes";

const INITIAL_STATE = {
  items: [],
  currentPage: 1,
  selectedItem: null,
  error: null,
  loading: null
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_QNA_FAILURE:
      return {
        ...state,
        items: [],
        error: action.payload.error,
        loading: false
      };

    case GET_QNA_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_QNA_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        error: null,
        loading: false
      };

    default:
      return state;
  }
}
