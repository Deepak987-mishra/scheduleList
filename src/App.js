import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import RootStack from './routing/RootStack';
import { Provider } from 'react-redux'
import { store, persistor } from './store/ConfigureStore'
import { PersistGate } from 'redux-persist/integration/react'
import { MenuProvider } from 'react-native-popup-menu';


const App = () => {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
      <MenuProvider>

        <RootStack />
</MenuProvider>
      </PersistGate>
    </Provider>
  )
}

export default App;