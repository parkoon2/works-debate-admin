import Cookies from "js-cookie";

export const isAuthenticated = () => {
  // todo token이 유효한지 처리 필요.
  // 임시로 그냥 토큰 반환
  // 로그인 유지 시키기 위해서는, 토큰을 쿠키로 가지고 있겠지?
  return !!Cookies.get("token");
};
