import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./screens/Menu";
import Register from "./screens/Register";
import CreationJoueurs from "./screens/CreationJoueurs";
import Connexion from "./screens/Connexion";
import MenuJoueur from "./screens/MenuJoueur";
import {
  useFonts,
  LeagueSpartan_900Black,
  LeagueSpartan_500Medium,
  LeagueSpartan_700Bold,
} from "@expo-google-fonts/league-spartan";

// redux imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';

const store = configureStore({
  reducer: { user }
});

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    LeagueSpartan_900Black,
    LeagueSpartan_500Medium,
    LeagueSpartan_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden={false} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="CreationJoueurs" component={CreationJoueurs} />
          <Stack.Screen name="Connexion" component={Connexion} />
          <Stack.Screen name="MenuJoueur" component={MenuJoueur} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
