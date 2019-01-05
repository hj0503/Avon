import { EMPTY_USER_INFO } from "./../actions/types";
import { UPDATE_USER_INFO } from "../actions/types";
import { login, logout } from "src/api/authentication";
import { updateUserInfo, emptyUserInfo } from "src/actions/authActions";

export type UserInfo = {
  userName: string;
};

export type State = {
  userInfo: UserInfo;
  isAuthenticated: boolean;
  user: number;
};

export type Store = {
  auth: State;
};

const initialState = {
  isAuthenticated: false,
  user: 1,
  userInfo: {}
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
    default:
      return state;
  }
}

export function fetchUserInfo(params) {
  return dispatch => {
    return login(params).then(res => {
      const { body } = res;
      localStorage.setItem("userName", body.userName);
      dispatch(updateUserInfo({ userName: body.userName }));
    });
  };
}

export function logoutUser() {
  return dispatch => {
    return logout().then(() => {
      localStorage.removeItem("userName")
      dispatch(emptyUserInfo());
    });
  };
}
