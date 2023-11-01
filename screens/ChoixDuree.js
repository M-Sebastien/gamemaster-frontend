import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addCharacters, saveOnboardingData } from "../reducers/game";
import Logo from "../components/Logo";
import { useFetchGpt } from "../hooks/useFetchGpt";

export default function ChoixDuree({ navigation }) {
  const [duree, setDuree] = useState(null);
  const dispatch = useDispatch();
  const players = useSelector(state => state.game.context.players);

  const handleDureeSelection = duree => {
    setDuree(duree);
    console.log("Durée sélectionnée :", duree);
  };

  const generatePlayersPrompt = () => {
    const playerDetails = players.map(player => `Le joueur "${player.name}" joue le personnage "${player.character}"`).join(", ");
    return playerDetails;
  };

  const Suivant = async () => {
    try {
      console.log("Joueurs sélectionnés :", players);
      navigation.navigate("ChoixPartie");

      const playerDetails = generatePlayersPrompt();


      const response = await useFetchGpt(
        `Connecte ces joueurs avec = ${playerDetails} , les personnages sont aleatoires mais une seule phrases de description par personnage, apres la creation des personnages, tu t'arretes`,
        200,
        "tu es mon assistant game-master qui connais sur le bout des doigts l'univers de donjon et dragon"
      );

      // const characters = response.gptResponse.split('\"').filter((e, i) =>  i%2 !== 0).filter((e, i) =>  i%2 !== 0));

      dispatch(saveOnboardingData(duree));
      console.log("Données sauvegardées :", duree);

      dispatch(addCharacters(response));
      console.log(response.characters)
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
      // Gérer l'erreur si nécessaire
    }
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
      <TouchableOpacity style={styles.suivantButton} onPress={Suivant}>
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

