import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import Logo from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { updateStorySuite, updateAction } from "../reducers/game";
import { useFetchGpt } from "../hooks/useFetchGpt";

export default function ActionsHistoire({ navigation }) {
  const dispatch = useDispatch();
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
        // Gérer l'erreur si nécessaire
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
      // Gérer l'erreur si nécessaire
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
      // Gérer l'erreur si nécessaire
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Suite de l'histoire</Text>
      <Text>Actions:</Text>
      {choices.map((choice, index) => (
        <ScrollView key={index} style={[styles.button, styles.largeButton]} contentContainerStyle={styles.scrollViewContent}>
          <TouchableOpacity onPress={() => saveChoice(index)}>
            <Text style={styles.buttonText}>{`Choix ${index + 1}: ${choice}`}</Text>
          </TouchableOpacity>
        </ScrollView>
      ))}
      <TouchableOpacity style={[styles.suivantButton, styles.largeButton]} onPress={Suivant}>
        <Text style={styles.buttonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
    justifyContent: "center",
    alignItems: "center",
  },
  suivantButton: {
    backgroundColor: "#2E7D32",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  largeButton: {
    width: 200,
    height: 60,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 16,
  },
  scrollViewContent: {
    justifyContent: "center",
    alignItems: "center",
  },
});






