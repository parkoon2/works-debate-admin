import {
  GET_DAILY_STATISTIC_FAILURE,
  GET_DAILY_STATISTIC_REQUEST,
  GET_DAILY_STATISTIC_SUCCESS
} from "../constants/actionTypes";

const INITIAL_STATE = {
  items: [],
  error: null,
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DAILY_STATISTIC_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_DAILY_STATISTIC_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items
      };
    case GET_DAILY_STATISTIC_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
