import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Logo from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { updateAction } from "../reducers/game";
import { useFetchGpt } from "../hooks/useFetchGpt";

export default function Histoire({ navigation }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const context = useSelector((state) => state.game.context);
  const player = useSelector(
    (state) => state.game.story[state.game.story.length - 1].player
  );
  const previousTurn = useSelector(
    (state) => state.game.story[state.game.story.length - 1].story
  );
  const previousStory = useSelector(
    (state) => state.game.story[state.game.story.length - 1].turn
  );

  console.log('story', useSelector(
    (state) => state.game.story[state.game.story.length - 1]
  ));
  const story = useSelector((state) => {
    const stories = state.game.story && state.game.story.story;
    const currentTurn = state.game.story && state.game.story.turn;

    if (stories && stories.length > 0 && currentTurn) {
      const lastTurnStory = stories.filter((story) => story.turn === currentTurn);

      if (lastTurnStory.length > 0) {
        return lastTurnStory.text;
      }
    }

    return null;
  });

  const Suivant = async () => {
    const response = await useFetchGpt(
      `Tu crées 3 actions pour ce personnage ${player.character} de cette ${story}. Je veux que tu me renvois les actions soit sous forme de liste numérique, sans commentaire.`,
      1000,
      `Tu es mon assistant game-master qui connaît sur le bout des doigts l'univers de donjon et dragon, voici le contexte de l'histoire en cours : ${context}`
    );

    if(response.result) {
      const newStory = response.gptResponse;
      const currentTurn = previousTurn + 1;
      dispatch(updateAction({ text: newStory, turn: currentTurn }));
      navigation.navigate("ActionsHistoire");
    } else {
      console.error("Une erreur s'est produite :", error);
    }
  };

  function saveGame() {
    setLoading(true);
    fetch(`http://192.168.1.59:3000/stories/saveStory/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        context: {
          title: game.context.title,
          initialStory: game.context.initialStory,
          players: game.context.players,
          onBoardingData: game.context.onBoardingData,
        },
        story: game.story,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        navigation.navigate("MesParties");
      });
  }

  return loading ? (
    <Spinner />
  ) : (
    <ScrollView style={styles.container}>
      <Logo />
      <Text style={styles.intro}>Découvrez la suite de l'histoire</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text>{previousStory}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => Suivant()}>
          <Text style={styles.buttonText}>Suite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => saveGame()}>
          <Text style={styles.buttonText}>Sauvegarder la partie</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5D726F",
    paddingBottom: 20,
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
    marginBottom: "5%",
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
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
  },
});
