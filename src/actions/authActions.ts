import { UPDATE_USER_INFO, EMPTY_USER_INFO, GET_MENU } from './types'

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

export const getMenu = (menu: any) => {
  return {
    type: GET_MENU,
    payload: menu
  }
}