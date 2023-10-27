import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Logo from "../components/Logo";

export default function ChoixDuree({ navigation }) {
  const handleDureeSelection = (duree) => {
    // Vous pouvez utiliser la valeur 'duree' ici, par exemple, l'envoyer à votre backend ou la stocker dans l'état local
    console.log("Durée sélectionnée:", duree);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Combien de temps va durer la partie?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDureeSelection("rapide")}
      >
        <Text>Rapide</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDureeSelection("moyen")}
      >
        <Text>Moyen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDureeSelection("longue")}
      >
        <Text>Longue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.suivantButton}
        onPress={() => navigation.navigate("ChoixStyle")}
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
