import { EMPTY_USER_INFO, GET_MENU } from "./../actions/types";
import { UPDATE_USER_INFO } from "../actions/types";
import { login, logout } from "src/api/authentication";
import { sysMenu } from "src/api/common";
import { getMenu } from "src/actions/authActions";

export type State = {
  menu: any[];
};

export type Store = {
  auth: State;
};

const initialState = {
  menu: []
} as State;

export default function(state = initialState, action: any) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    case EMPTY_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    case GET_MENU:
      return {
        ...state,
        menu: action.payload
      };
    default:
      return state;
  }
}

export function fetchUserInfo(params) {
  return dispatch => {
    return login(params).then(res => {
      const { body } = res;
      localStorage.setItem("userName", body.userName);
    });
  };
}

export function logoutUser() {
  return dispatch => {
    return logout().then(() => {
      localStorage.removeItem("userName");
    });
  };
}

export function fetchSysMenu() {
  return dispatch => {
    return sysMenu().then(res => {
      dispatch(getMenu);
    });
  };
}
