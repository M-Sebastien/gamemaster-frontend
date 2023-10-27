import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Logo from "../components/Logo";

export default function ChoixStyle({ navigation }) {
  const handleStyleSelection = (style) => {
    // Vous pouvez utiliser la valeur 'style' ici, par exemple, l'envoyer à votre backend ou la stocker dans l'état local
    console.log("Style sélectionné:", style);
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
        onPress={() => navigation.navigate("ChoixUnivers")}
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
