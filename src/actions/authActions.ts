import { TEST_DISPATCH } from './types'

export const registerUser = (userData: any) => {
  //给reducer
  return {
    type: TEST_DISPATCH,
    payload: userData
  }
}