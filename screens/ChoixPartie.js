import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import Logo from "../components/Logo";
import { saveOnboardingData } from "../reducers/game";

export default function ChoixPartie({ navigation }) {
  const [niveau, setNiveau] = useState(null);

  const dispatch = useDispatch();
  
  const handleNiveauSelection = (selectedNiveau) => {
    setNiveau(selectedNiveau);
    console.log("Niveau sélectionné :", selectedNiveau);
  };

  const Suivant = () => {
    if (!niveau) {
      console.error("Veuillez sélectionner un niveau pour cette partie !");
      return; // Arrêter la fonction si aucun niveau n'est sélectionné
    }

    dispatch(saveOnboardingData(niveau));
    navigation.navigate("ChoixStyle");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.buttonContainer}>
        <Text style={styles.intro}>Quel niveau pour cette partie?</Text>
        <TouchableOpacity
          style={
            niveau === "super debutant" ? styles.buttonFocus : styles.button
          }
          onPress={() => handleNiveauSelection("super debutant")}
        >
          <Text>Super Débutant</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={niveau === "moyen" ? styles.buttonFocus : styles.button}
          onPress={() => handleNiveauSelection("moyen")}
        >
          <Text>Moyen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={niveau === "chaud" ? styles.buttonFocus : styles.button}
          onPress={() => handleNiveauSelection("chaud")}
        >
          <Text>Chaud</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.suivantButton}
          onPress={Suivant}
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
    textShadowRadius: 10,
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
    //elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
  },
});
