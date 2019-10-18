import { SET_CURRENT_PAGE } from "../constants/actionTypes";

// 새로고침해도 마지막에 있던 페이지가 어디인지 기억하기 위해서
// 페이지 변경이 있을 때 이곳에서 캐치하고
// 로컬스토리지에 저장시킨다.
const catchPage = store => next => action => {
  if (action.type === SET_CURRENT_PAGE) {
    window.localStorage.setItem("currentPage", action.payload.page);
  }
  next(action);
};

export default catchPage;
