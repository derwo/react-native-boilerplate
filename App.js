import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store/configureStore'
import { Provider } from 'react-redux'
import Navigator from './src/navigator'

export default function App () {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  )
}
