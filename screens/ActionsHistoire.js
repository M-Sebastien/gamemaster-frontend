import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateStorySuite,
  updateAction,
  updateChoices,
} from "../reducers/game";
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
  // const [choices, setChoices] = useState(new Array(3).fill("En attente..."));
  const context = useSelector((state) => state.game.context);
  const action = useSelector((state) => state.game.story?.action);
  const player = useSelector((state) => state.game.context.players);
  const story = useSelector((state) => state.game.story);
  const choices = useSelector(
    (state) => state.game.story[state.game.story.length - 1].choices
  );
  let generatedChoices = [];

  const [selected, setSelected] = useState();

  const saveChoice = (choixIndex) => {
    setSelected(choixIndex);
    const selectedChoice = choices[choixIndex];
    dispatch(updateAction(selectedChoice));
    console.log("Choix sauvegardé :", selectedChoice);
  };

  const Suivant = async () => {
    const response = await useFetchGpt(
      `Tu génères la suite de l'histoire en fonction de ${context} et du choix : ${action}.`,
      1000,
      `Tu es mon assistant game-master qui connaît sur le bout des doigts l'univers de donjon et dragon. Voici le contexte de l'histoire en cours : ${context}`
    );

    if(response.result) {
      setSelected();
      navigation.navigate("Histoire");
      dispatch(updateStorySuite(response.gptResponse));
      console.log(
        "Réponse de GPT pour la suite de l'histoire :",
        response.gptResponse
      );
    } else {
      console.error("Une erreur s'est produite :", error);
    }
  };
  /*
  const generateChoices = async () => {
    // const updatedChoices = [...choices];

    for (let i = 0; i < 3; i++) {
      try {
        const response = await useFetchGpt(
          `Tu génères un choix d'action pour le joueur ${player} en fonction de ${context} et de la précédente histoire.`,
          500,
          `Tu es mon assistant game-master qui connaît sur le bout des doigts l'univers de donjon et dragon. Voici le contexte de l'histoire en cours : ${context} et la précédente histoire : ${story}`
        );
        generatedChoices.push(response.gptResponse);
        // updatedChoices[i] = response.gptResponse;
        console.log(
          "Réponse de GPT pour le choix",
          i,
          ":",
          response.gptResponse
        );
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
        // updatedChoices[i] = "Erreur lors de la génération du choix";
      }
    }
    dispatch(updateChoices(generatedChoices));

    generatedChoices = [];
    // setChoices(updatedChoices);
  };
 */
  return loading ? (
    <Spinner />
  ) : (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.intro}>Quelle action choisit le joueur?</Text>
      <ScrollView
        style={styles.content}
      >
        <View style={styles.cardContainer}>
          {choices.map((choice, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => saveChoice(index)} style={[styles.card, {opacity: selected === index ? 0.5 : 1}]}>
                <Text style={styles.buttonText}>{`Choix ${
                  index + 1
                }: ${choice}`}</Text>
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity
          style={styles.button}
          onPress={() => Suivant()}
          >
            <Text style={styles.buttonText}>Générer la suite de l'histoire</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  cardContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  content: {
    width: "100%",
  },
  card: {
    fontFamily: "LeagueSpartan_500Medium",
    fontSize: 20,
    backgroundColor: "#efefef",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    width: "90%",
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
    //elevation: "5%",
    shadowColor: "#000",
    shadowOpacity: "3%",
    shadowOffset: { width: 0, height: 2 },
    width: "90%",
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
  },
});
