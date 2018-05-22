import {createStore, applyMiddleware} from 'redux'
import api from '../middleware/api'
import ReduxThunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import rootReducer from 'reducers'

export default function configureStore(initialState = {}, history) {
  const middlewares = [ReduxThunk, api, routerMiddleware(history)]
  const enhancer = [applyMiddleware(...middlewares)]
  return createStore(rootReducer, initialState, ...enhancer)
}
