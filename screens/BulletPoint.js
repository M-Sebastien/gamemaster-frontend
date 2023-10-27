import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Logo from "../components/Logo";

const BulletPoint = ({ route, navigation }) => {
  const { joueurs } = route.params;

  const navigateToPartieDetail = () => {
    // Naviguer vers la page PartieDetail.js
    navigation.navigate("PartieDetail");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Description des joueurs</Text>
      {joueurs.map((joueur, index) => (
        <View key={index} style={styles.joueurContainer}>
          <Text style={styles.joueurName}>{joueur.name}</Text>
          <Text style={styles.joueurDescription}>{joueur.description}</Text>
        </View>
      ))}
      <TouchableOpacity onPress={navigateToPartieDetail} style={styles.button}>
        <Text style={styles.buttonText}>Entrer dans l'histoire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
  title: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 20,
    color: "#efefef",
    marginBottom: 20,
  },
  joueurContainer: {
    width: "100%",
    marginBottom: 20,
  },
  joueurName: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    color: "#efefef",
    marginBottom: 10,
  },
  joueurDescription: {
    fontFamily: "LeagueSpartan_500Medium",
    fontSize: 16,
    color: "#efefef",
  },
  button: {
    backgroundColor: "#efefef",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BulletPoint;
