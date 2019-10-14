import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGOUT
} from "../constants/actionTypes";

const INITIAL_STATE = {
  user: null,
  token: null,
  error: null,
  loading: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        user: action.payload.user,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        token: null,
        user: null,
        error: action.payload.error
      };

    case LOGOUT:
      return {
        user: null,
        token: null,
        error: null,
        loading: false
      };
    default:
      return state;
  }
}
