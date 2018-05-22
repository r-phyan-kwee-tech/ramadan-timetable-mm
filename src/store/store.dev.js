import {createStore, applyMiddleware} from 'redux'
import api from '../middleware/api'
import ReduxThunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from 'reducers'

export default function configureStore(initialState = {}, history) {

  const middlewares = [ReduxThunk, api, routerMiddleware(history), createLogger()]

  const enhancers = [
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ]
  const composeEnhancers = composeWithDevTools({

    // other compose enhancers if any Specify here other options if needed
  })
  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers))
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module
      .hot
      .accept('../reducers', () => {
        /* eslint-disable global-require */
        const nextReducer = require('../reducers').default
        store.replaceReducer(nextReducer)
      })
  }

  return store
}
