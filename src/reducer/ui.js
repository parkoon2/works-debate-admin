import { OPEN_SIDER, CLOSE_SIDER } from "../constants/actionTypes";

const INITIAL_STATE = {
  sider: {
    collapsed: false
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

    default:
      return state;
  }
}
