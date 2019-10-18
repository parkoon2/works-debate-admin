import { SET_CURRENT_PAGE } from "../constants/actionTypes";

const INITIAL_STATE =
  window.localStorage.getItem("currentPage") || "/dashboard";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.payload.page;

    default:
      return state;
  }
}
