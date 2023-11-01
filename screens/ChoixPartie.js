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
      <View style={styles.buttonContainer}>
        <Text style={styles.intro}>Quel niveau pour cette partie?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNiveauSelection("super debutant")}
        >
          <Text>Super Débutant</Text>
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
          <Text>Chaud</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.suivantButton}
          onPress={() => Suivant(niveau)}
        >
          <Text style={styles.buttonText}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
  intro: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 25,
    justifyContent: "center",
    paddingHorizontal: "10%",
    paddingVertical: "5%",
    marginTop: "4%",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  button: {
    backgroundColor: "#efefef",
    paddingVertical: "5%",
    paddingHorizontal: "15%",
    borderRadius: 8,
    marginTop: "7%",
    width: 300,
    alignItems: "center",
  },
  suivantButton: {
    backgroundColor: "#efefef",
    paddingVertical: "5%",
    paddingHorizontal: "15%",
    borderRadius: 8,
    marginTop: "7%",
    elevation: "5%",
    shadowColor: "#000",
    shadowOpacity: "3%",
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
  },
});
