import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Logo from "../components/Logo";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.introContainer}>
        <Text style={styles.intro}>
          Désormais tu es le game master, vos choix vont influer sur les rôles
          de chacun ainsi que la suite de votre histoire.
        </Text>
      </View>
      <View style={styles.titreContainer}>
        <Text style={styles.titre}>Entrez dans l'histoire</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Connexion")}
        >
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Créer un compte</Text>
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
    paddingVertical: "15%",
    marginTop: "10%",
    textShadowColor: "#efefef",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  titre: {
    fontFamily: "LeagueSpartan_900Black",
    fontSize: 35,
    color: "#efefef",
    textAlign: "center",
    paddingVertical: "15%",
    textShadowColor: "#000000",
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
    // elevation: "5%",
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