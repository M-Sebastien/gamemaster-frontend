import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { saveOnboardingData } from "../reducers/game";
import Logo from "../components/Logo";

export default function ChoixStyle({ navigation }) {
  const [style, setStyle] = useState(null);
  const dispatch = useDispatch();

  const handleStyleSelection = (selectedStyle) => {
    setStyle(selectedStyle);
    console.log("Style sélectionné :", selectedStyle);
  };

  const Suivant = () => {
    if (!style) {
      console.error("Veuillez sélectionner un style de jeu !");
      return; // Arrêter la fonction si aucun style n'est sélectionné
    }

    dispatch(saveOnboardingData(style));
    console.log("Données sauvegardées :", style);
    navigation.navigate("ChoixUnivers");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.buttonContainer}>
        <Text style={styles.intro}>Quel style de jeu préférez-vous?</Text>
        <TouchableOpacity

          style={style === "classique" ? styles.buttonFocus : styles.button}
          onPress={() => handleStyleSelection("classique")}
        >
          <Text>Classique</Text>
        </TouchableOpacity>
        <TouchableOpacity


          style={style === "intrigue" ? styles.buttonFocus : styles.button}
          onPress={() => handleStyleSelection("intrigue")}
        >
          <Text>Intrigue</Text>
        </TouchableOpacity>
        <TouchableOpacity

          style={style === "exploration" ? styles.buttonFocus : styles.button}
          onPress={() => handleStyleSelection("exploration")}
        >
          <Text>Exploration</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.suivantButton} onPress={Suivant}>
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
    elevation: 5,
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

