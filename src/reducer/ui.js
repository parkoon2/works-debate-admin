import {
  OPEN_SIDER,
  CLOSE_SIDER,
  OPEN_DRAWER,
  CLOSE_DRAWER
} from "../constants/actionTypes";

const INITIAL_STATE = {
  sider: {
    collapsed: false
  },
  drawer: {
    open: false
  }
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_SIDER:
      return {
        ...state,
        sider: {
          collapsed: false
        }
      };

    case CLOSE_SIDER:
      return {
        ...state,
        sider: {
          collapsed: true
        }
      };
    case OPEN_DRAWER:
      return {
        ...state,
        drawer: {
          open: true
        }
      };

    case CLOSE_DRAWER:
      return {
        ...state,
        drawer: {
          open: false
        }
      };

    default:
      return state;
  }
}
