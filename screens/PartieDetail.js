import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Logo from "../components/Logo";

const PartieDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.card}>
        <Text style={styles.text}>
          Premi
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("partieDetail")}
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
