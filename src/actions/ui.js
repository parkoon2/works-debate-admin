import {
  OPEN_SIDER,
  CLOSE_SIDER,
  CLOSE_DRAWER,
  OPEN_DRAWER
} from "../constants/actionTypes";

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

export const openDrawer = () => {
  return {
    type: OPEN_DRAWER
  };
};

export const closeDrawer = () => {
  return {
    type: CLOSE_DRAWER
  };
};
