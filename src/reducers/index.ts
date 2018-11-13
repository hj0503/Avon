//combineReducers 多个reducer合成一个reducer
import { combineReducers } from 'redux'
import authReducer from './authReducer'

export default combineReducers({
  auth: authReducer
})