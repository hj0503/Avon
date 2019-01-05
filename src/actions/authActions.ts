import { UPDATE_USER_INFO, EMPTY_USER_INFO } from './types'

export const updateUserInfo = (userData: any) => {
  //给reducer
  return {
    type: UPDATE_USER_INFO,
    payload: userData
  }
}

export const emptyUserInfo = () => {
  return {
    type: EMPTY_USER_INFO,
    payload: {}
  }
}