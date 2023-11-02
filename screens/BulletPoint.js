import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import Logo from "../components/Logo";
import { saveOnboardingData } from "../reducers/game";

const joueurs = [
  { id: 1, name: "Joueur 1", description: "Description du joueur 1" },
  { id: 2, name: "Joueur 2", description: "Description du joueur 2" },
  // Ajoute autant de joueurs que nécessaire
];

export default function BulletPoint() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const entrerDansLhistoire = (joueur) => {
    dispatch(saveOnboardingData(joueur));
    navigation.navigate("PartieDetail");
  };

  return (
    <ScrollView style={styles.container}>
      <Logo />
      <Text style={styles.intro}>Voici vos personnages</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text>Nom du perso</Text>
          <Text>Description</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PartieDetail")}
        >
          <Text style={styles.buttonText}>Entrez dans l'histoire</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  cardContainer: {
    width: "100%",
    alignItems: "center",
  },
  card: {
    fontFamily: "LeagueSpartan_500Medium",
    fontSize: 20,
    backgroundColor: "#efefef",
    padding: "5%",
    borderRadius: 8,
    marginBottom: "5%",
    width: "90%", // ou toute autre largeur souhaitée
  },
  button: {
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
