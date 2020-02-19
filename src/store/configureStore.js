import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import authenticationReducer from './Authentication/reducer'

// This is the root collection of combined reducers

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  Auth: authenticationReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  return createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
}
const store = configureStore()
const persistor = persistStore(store)

export {
  store,
  persistor
}
