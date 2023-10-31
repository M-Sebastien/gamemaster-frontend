import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Logo from "../components/Logo";
import { saveOnboardingData } from "../reducers/game";

export default function ChoixStyle({ navigation }) {
  const [style, setStyle] = useState(null);
  const dispatch = useDispatch();
  const handleStyleSelection = (style) => {
    setStyle(style);
  };

  const Suivant = (style) => {
    dispatch(saveOnboardingData(style));
    navigation.navigate("ChoixUnivers");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Quel style de jeu préférez-vous?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleStyleSelection("classique")}
      >
        <Text>Classique</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleStyleSelection("intrigue")}
      >
        <Text>Intrigue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleStyleSelection("exploration")}
      >
        <Text>Exploration</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.suivantButton}
        onPress={() => Suivant(style)}
      >
        <Text style={styles.buttonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
  button: {
    backgroundColor: "#efefef",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: 200,
    alignItems: "center",
  },
  suivantButton: {
    backgroundColor: "#efefef",
    padding: 15,
    borderRadius: 8,
    marginTop: 40,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 16,
    fontWeight: "bold",
  },
});
