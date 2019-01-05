import { UPDATE_USER_INFO } from "../actions/types";
import { login } from 'src/api/authentication';
import { updateUserInfo } from 'src/actions/authActions';

type State = {
  userInfo: object;
  isAuthenticated: boolean;
  user: number;
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
    default:
      return state;
  }
}

export function fetchUserInfo(params) {
  return dispatch => {
    return login(params)
      .then(res => {
        const { body } = res
        dispatch(updateUserInfo(body))
      })
  }
}
