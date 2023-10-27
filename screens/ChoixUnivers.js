import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importez useNavigation depuis React Navigation
import Logo from "../components/Logo";

export default function ChoixUnivers() {
  const navigation = useNavigation(); // Utilisez useNavigation pour accéder à l'objet de navigation

  const handleUniversSelection = (univers) => {
    // Vous pouvez utiliser la valeur 'univers' ici, par exemple, l'envoyer à votre backend ou la stocker dans l'état local
    console.log("Univers sélectionné:", univers);
  };

  const handleSuivant = () => {
    // Naviguer vers la page PartieDetail
    navigation.navigate("PartieDetail");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Choisissez l'univers de votre aventure:</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleUniversSelection("montagne")}
      >
        <Text>Montagne</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleUniversSelection("forêt")}
      >
        <Text>Forêt</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleUniversSelection("ville")}
      >
        <Text>Ville</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.suivantButton} onPress={handleSuivant}>
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
