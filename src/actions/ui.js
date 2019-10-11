import { OPEN_SIDER, CLOSE_SIDER } from "../constants/actionTypes";

export const openSider = () => {
  return {
    type: OPEN_SIDER
  };
};

export const closeSider = () => {
  return {
    type: CLOSE_SIDER
  };
};
