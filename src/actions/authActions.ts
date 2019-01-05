import { UPDATE_USER_INFO } from './types'

export const updateUserInfo = (userData: any) => {
  //给reducer
  return {
    type: UPDATE_USER_INFO,
    payload: userData
  }
}