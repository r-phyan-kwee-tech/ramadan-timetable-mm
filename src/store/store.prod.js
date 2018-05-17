import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import rootReducer from 'reducers'

export default function configureStore(initialState = {}, history) {
  const middlewares = [ReduxThunk, routerMiddleware(history)]
  const enhancer = [applyMiddleware(...middlewares)]
  return createStore(rootReducer, initialState, ...enhancer)
}
