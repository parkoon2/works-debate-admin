import { SET_CURRENT_PAGE } from "../constants/actionTypes";

export const setPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: {
    page
  }
});
