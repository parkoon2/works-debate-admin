export const isAuthenticated = () => {
  return !!window.localStorage.getItem("token");
};
