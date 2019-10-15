import { SET_CURRENT_PAGE } from "../constants/actionTypes";

const INITIAL_STATE = "대시보드";

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return action.payload.page;

    default:
      return state;
  }
}
