import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./screens/Menu";
import Connexion from "./screens/Connexion";
import SignUp from "./screens/SignUp";
import MesParties from "./screens/MesParties";
import CreationJoueurs from "./screens/CreationJoueurs";
import ChoixDuree from "./screens/ChoixDuree";
import ChoixStyle from "./screens/ChoixStyle";
import ChoixUnivers from "./screens/ChoixUnivers";
import BulletPoint from "./screens/BulletPoint";
import PartieDetail from "./screens/PartieDetail";
import ChoixPartie from "./screens/ChoixPartie";
import Histoire from "./screens/Histoire";
import ActionsHistoire from "./screens/ActionsHistoire";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import game from "./reducers/game";
import user from './reducers/user';

import {
  useFonts,
  LeagueSpartan_900Black,
  LeagueSpartan_500Medium,
  LeagueSpartan_700Bold,
} from "@expo-google-fonts/league-spartan";

const store = configureStore({
  reducer: { user, game }
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
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Connexion" component={Connexion} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="MesParties" component={MesParties} />
          <Stack.Screen name="CreationJoueurs" component={CreationJoueurs} />
          <Stack.Screen name="ChoixDuree" component={ChoixDuree} />
          <Stack.Screen name="ChoixPartie" component={ChoixPartie} />
          <Stack.Screen name="ChoixStyle" component={ChoixStyle} />
          <Stack.Screen name="ChoixUnivers" component={ChoixUnivers} />
          <Stack.Screen name="BulletPoint" component={BulletPoint} />
          <Stack.Screen name="PartieDetail" component={PartieDetail} />
          <Stack.Screen name="Histoire" component={Histoire} />
          <Stack.Screen name="ActionsHistoire" component={ActionsHistoire} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
