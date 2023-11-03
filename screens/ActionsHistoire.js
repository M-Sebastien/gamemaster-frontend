import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStorySuite, updateAction } from "../reducers/game";
import { useFetchGpt } from "../hooks/useFetchGpt";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Logo from "../components/Logo";
import Spinner from "../components/Spinner";

export default function ActionsHistoire({ navigation }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [choices, setChoices] = useState(new Array(3).fill("En attente..."));
  const context = useSelector((state) => state.game.context);
  const action = useSelector((state) => state.game.story?.action);
  const player = useSelector((state) => state.game.context.player);
  const story = useSelector((state) => state.game.story);

  const generateChoices = async () => {
    const updatedChoices = [...choices];

    for (let i = 0; i < 3; i++) {
      try {
        const response = await useFetchGpt(
          `Tu génères un choix d'action pour le joueur ${player} en fonction de ${context} et de la précédente histoire.`,
          20,
          `Tu es mon assistant game-master qui connaît sur le bout des doigts l'univers de donjon et dragon. Voici le contexte de l'histoire en cours : ${context} et la précédente histoire : ${story}`
        );
        updatedChoices[i] = response.gptResponse;
        console.log("Réponse de GPT pour le choix", i, ":", response.gptResponse);
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
        updatedChoices[i] = "Erreur lors de la génération du choix";
      }
    }

    setChoices(updatedChoices);
  };

  useEffect(() => {
    generateChoices();
  }, [story]); // Exécuté lorsque la "story" change dans le store

  const saveChoice = (choixIndex) => {
    try {
      const selectedChoice = choices[choixIndex];
      dispatch(updateAction(selectedChoice));
      console.log("Choix sauvegardé :", selectedChoice);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde du choix :", error);
    }
  };

  const Suivant = async () => {
    try {
      navigation.navigate("Histoire");

      const response = await useFetchGpt(
        `Tu génères la suite de l'histoire en fonction de ${context} et du choix : ${action}.`,
        200,
        `Tu es mon assistant game-master qui connaît sur le bout des doigts l'univers de donjon et dragon. Voici le contexte de l'histoire en cours : ${context}`
      );

      dispatch(updateStorySuite(response.gptResponse));
      console.log("Réponse de GPT pour la suite de l'histoire :", response.gptResponse);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };



  return loading ? (
    <Spinner />
  ) : (
    <View style={styles.container}>
      <Text style={styles.intro}>Quelle action choisit le joueur 1?</Text>

      <View style={styles.buttonContainer}>
        <Text>
          {choices.map((choice, index) => (
            <ScrollView key={index} style={styles.card} contentContainerStyle={styles.scrollViewContent}>
              <TouchableOpacity onPress={() => saveChoice(index)}>
                <Text style={styles.buttonText}>{`Choix ${index + 1}: ${choice}`}</Text>
              </TouchableOpacity>
            </ScrollView>
          ))}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Histoire")}
        >
          <Text style={styles.buttonText}>Générer la suite de l'histoire</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};


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
    marginBottom: "8%",
    maxWidth: "80%",
    maxHeight: "40%",
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






