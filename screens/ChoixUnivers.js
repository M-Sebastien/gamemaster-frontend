import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../components/Logo";
import { saveOnboardingData, updateStory, updateStorySuite } from "../reducers/game";
import { useFetchGpt } from "../hooks/useFetchGpt";



export default function ChoixUnivers() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const context = useSelector((state) => state.game.context);
  const players = useSelector((state) => state.game.context.players);
  const onboardingData = useSelector((state) => state.game.context.onboardingData);

  const [univers, setUnivers] = useState(null);

  const handleUniversSelection = (univers) => {
    setUnivers(univers);
    console.log("Univers sélectionné :", univers);
  };

  const Suivant = async () => {
    try {
      if (!univers) {
        console.error("Veuillez sélectionner un univers !");
        return;
      }

      console.log("Navigation vers BulletPoint...");
      navigation.navigate("BulletPoint");

      const response = await useFetchGpt(
        `Créer une histoire dans l'univers ${univers}. Il y a ${players.length} joueurs. 
        Contexte : ${onboardingData}. Soyez inventif !`,
        200,
        `Tu es mon assistant game-master qui connaît sur le bout des doigts l'univers de donjon et dragon. 
        Voici le contexte de l'histoire en cours : ${context}`
      );

      dispatch(saveOnboardingData(univers));
      console.log("Données sauvegardées :", univers);

      dispatch(updateStory(response.gptResponse));
      // dispatch(updateStorySuite(response.gptResponse))
      console.log("Histoire générée :", response.gptResponse);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };



  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.buttonContainer}>
        <Text style={styles.intro}>
          Dans quel univers se passe votre aventure?
        </Text>
        <TouchableOpacity
          style={univers === "montagne" ? styles.buttonFocus : styles.button}
          onPress={() => handleUniversSelection("montagne")}
        >
          <Text>Montagne</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={univers === "forêt" ? styles.buttonFocus : styles.button}
          onPress={() => handleUniversSelection("forêt")}
        >
          <Text>Forêt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={univers === "ville" ? styles.buttonFocus : styles.button}
          onPress={() => handleUniversSelection("ville")}
        >
          <Text>Ville</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.suivantButton} onPress={() => Suivant()}>
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
    elevation: 5,
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
