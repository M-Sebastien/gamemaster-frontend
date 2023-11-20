import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addCharacters, saveOnboardingData } from "../reducers/game";
import Logo from "../components/Logo";
import { useFetchGpt } from "../hooks/useFetchGpt";

export default function ChoixDuree({ navigation }) {
  const [duree, setDuree] = useState(null);

  const players = useSelector((state) => state.game.context.players);
  const dispatch = useDispatch();

  const handleDureeSelection = (duree) => {
    setDuree(duree);
  };

  /*const generatePlayersPrompt = () => {
    const playerDetails = players
      .map(
        (player) =>
          `Le joueur "${player.name}" joue le personnage "${player.character}"`
      )
      .join(", ");
    return playerDetails;
  };
  */

  const Suivant = async () => {
    if (!duree) {
      console.error("Veuillez sélectionner une durée pour la partie !");
      return;
    }
    /*const playerDetails = generatePlayersPrompt();
    const response = await useFetchGpt(
      `Connecte ces joueurs avec = ${playerDetails}, les personnages sont aléatoires, mais une seule phrase de description par personnage. Après la création des personnages, arrête-toi.`,
      200,
      "Tu es mon assistant game-master qui connaît sur le bout des doigts l'univers de donjon et dragon"
    );*/
    dispatch(saveOnboardingData(duree));
    navigation.navigate("ChoixPartie");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.buttonContainer}>
        <Text style={styles.intro}>Combien de temps va durer la partie?</Text>
        <TouchableOpacity
          style={duree === "rapide" ? styles.buttonFocus : styles.button}
          onPress={() => handleDureeSelection("rapide")}
        >
          <Text>Rapide</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={duree === "moyen" ? styles.buttonFocus : styles.button}
          onPress={() => handleDureeSelection("moyen")}
        >
          <Text>Moyen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={duree === "longue" ? styles.buttonFocus : styles.button}
          onPress={() => handleDureeSelection("longue")}
        >
          <Text>Longue</Text>
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
    //elevation: 5,
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
