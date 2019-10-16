import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST
} from "../constants/actionTypes";

const INITIAL_STATE = {
  users: [],
  currentPage: 1,
  error: null,
  loading: false
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS_FAILURE:
      return {
        ...state,
        users: [],
        error: action.payload.error,
        loading: false
      };

    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        error: null,
        loading: false
      };

    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id),
        loading: false
      };

    case DELETE_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };

    default:
      return state;
  }
}
