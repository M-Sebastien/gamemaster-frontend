import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { saveOnboardingData } from "../reducers/game";
import Logo from "../components/Logo";

export default function ChoixDuree({ navigation }) {
  const [duree, setDuree] = useState(null);

  const dispatch = useDispatch();
  const handleDureeSelection = (duree) => {
    setDuree(duree);
  };

  const Suivant = (duree) => {
    dispatch(saveOnboardingData(duree));
    navigation.navigate("ChoixPartie");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.buttonContainer}>
        <Text style={styles.intro}>Combien de temps va durer la partie?</Text>
        <TouchableOpacity
          style={duree === "rapide" ? styles.buttonFocus : styles.button}
          onPress={() => handleDureeSelection("rapide")}
        >
          <Text>Rapide</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={duree === "moyen" ? styles.buttonFocus : styles.button}
          onPress={() => handleDureeSelection("moyen")}
        >
          <Text>Moyen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={duree === "longue" ? styles.buttonFocus : styles.button}
          onPress={() => handleDureeSelection("longue")}
        >
          <Text>Longue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.suivantButton}
          onPress={() => Suivant(duree)}
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
    textShadowColor: "#efefef",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
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
  buttonFocus: {
    backgroundColor: "#859393",
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
