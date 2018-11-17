import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk]

const initialState = {}

const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    composeWithDevTools(applyMiddleware(...middleware))
  ),
)  //reducer  initialState  middleware(中间件)

export default store