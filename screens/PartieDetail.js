import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Logo from "../components/Logo";

const PartieDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.card}>
        <Text style={styles.text}>
          Premier tour
          {"\n\n"}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ChoixPartie")}
      >
        <Text style={styles.buttonText}>Suite</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
  card: {
    backgroundColor: "#efefef", // Couleur de la carte
    borderRadius: 8,
    padding: 20,
    width: "100%",
    flex: 2 / 3,
    marginBottom: 20,
    marginTop: 50,
  },
  text: {
    color: "#394240", // Couleur du texte à l'intérieur de la carte
    fontSize: 16,
  },
  button: {
    backgroundColor: "#efefef", // Couleur du bouton
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#394240", // Couleur du texte du bouton
    fontWeight: "bold",
  },
});

export default PartieDetail;
