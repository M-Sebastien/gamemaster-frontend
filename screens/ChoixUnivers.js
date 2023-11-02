import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux"; // Importez useNavigation depuis React Navigation
import Logo from "../components/Logo";
import { saveOnboardingData } from "../reducers/game";

export default function ChoixUnivers() {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Utilisez useNavigation pour accéder à l'objet de navigation

  const [univers, setUnivers] = useState(null);

  const handleUniversSelection = (univers) => {
    setUnivers(univers);
  };

  const Suivant = (univers) => {
    dispatch(saveOnboardingData(univers));
    navigation.navigate("BulletPoint");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.buttonContainer}>
        <Text style={styles.intro}>
          Dans quel univers se passe votre aventure?
        </Text>
        <TouchableOpacity
          style={univers === "montagne" ? styles.buttonFocus : styles.button}
          onPress={() => handleUniversSelection("montagne")}
        >
          <Text>Montagne</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={univers === "forêt" ? styles.buttonFocus : styles.button}
          onPress={() => handleUniversSelection("forêt")}
        >
          <Text>Forêt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={univers === "ville" ? styles.buttonFocus : styles.button}
          onPress={() => handleUniversSelection("ville")}
        >
          <Text>Ville</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.suivantButton}
          onPress={() => Suivant(univers)}
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
