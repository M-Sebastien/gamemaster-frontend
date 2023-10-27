import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import game from './reducers/game'; // Assurez-vous d'importer correctement votre reducer
import ActionsGpt from './Gpt-components/ActionsGpt';

const store = configureStore({
  reducer: {
    game, // Ajoutez votre reducer au magasin
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActionsGpt />
      </View>
    </Provider>
  );
}


