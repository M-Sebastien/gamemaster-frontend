import React, { useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Logo from "../components/Logo";
import { saveOnboardingData } from "../reducers/game";

export default function ChoixPartie({ navigation }) {
  const [niveau, setNiveau] = useState(null);
  const dispatch = useDispatch();
  const handleNiveauSelection = (niveau) => {
    setNiveau(niveau);
  };

  const Suivant = (niveau) => {
    dispatch(saveOnboardingData(niveau));
    navigation.navigate("ChoixStyle");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Combien de temps va durer la partie?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNiveauSelection("super debutant")}
      >
        <Text>Rapide</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNiveauSelection("moyen")}
      >
        <Text>Moyen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNiveauSelection("Chaud")}
      >
        <Text>Longue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.suivantButton}
        onPress={() => Suivant(niveau)}
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

// temps rapide moyen interminable
// niveau superdebutant moyen chaud
// style epique amusante relaxante
