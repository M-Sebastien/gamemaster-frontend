import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./screens/Menu";
import Connexion from "./screens/Connexion";
import SignUp from "./screens/SignUp";
import CreationJoueurs from "./screens/CreationJoueurs";
import ChoixDuree from "./screens/ChoixContexte";
import ChoixStyle from "./screens/ChoixStyle";
import ChoixUnivers from "./screens/ChoixUnivers";
import BulletPoint from "./screens/BulletPoint";
import PartieDetail from "./screens/PartieDetail";
import ChoixPartie from "./screens/ChoixPartie";
import Histoire from "./screens/Histoire";

import {
  useFonts,
  LeagueSpartan_900Black,
  LeagueSpartan_500Medium,
  LeagueSpartan_700Bold,
} from "@expo-google-fonts/league-spartan";
import BulletPoint from "./screens/BulletPoint";

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
    <NavigationContainer>
      <StatusBar hidden={false} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="CreationJoueurs" component={CreationJoueurs} />
        <Stack.Screen name="ChoixDuree" component={ChoixDuree} />
        <Stack.Screen name="ChoixStyle" component={ChoixStyle} />
        <Stack.Screen name="ChoixUnivers" component={ChoixUnivers} />
        <Stack.Screen name="BulletPoint" component={BulletPoint} />
        <Stack.Screen name="PartieDetail" component={PartieDetail} />
        <Stack.Screen name="ChoixPartie" component={ChoixPartie} />
        <Stack.Screen name="Histoire" component={Histoire} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
