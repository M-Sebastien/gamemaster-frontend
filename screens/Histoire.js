import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Logo from '../components/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { updateAction } from '../reducers/game';
import { useFetchGpt } from '../hooks/useFetchGpt';

export default function Histoire({ navigation }) {
  const dispatch = useDispatch();
  const context = useSelector((state) => state.game.context);
  const player = useSelector((state) => state.game.story[state.game.story.length -1].player);
  const previousStory = useSelector((state) => state.game.story[state.game.story.length -1].story);
   useEffect(() => {
    console.log("store--------------------", previousStory)
   },[])
  const story = useSelector((state) => {
    const stories = state.game.story && state.game.story.story; // Vérifiez que state.game.story est défini
    const currentTurn = state.game.story && state.game.story.turn;
  
    if (stories && stories.length > 0 && currentTurn) {
      const lastTurnStory = stories.find(story => story.turn === currentTurn);
  
      if (lastTurnStory) {
        return lastTurnStory.text;
      }
    }
  
    return null;
  });

  const Suivant = async () => {
    try {
      navigation.navigate("ActionsHistoire");

      // Supposons que useFetchGpt effectue un appel asynchrone à une API pour obtenir des données
      const response = await useFetchGpt(
        `Tu crées 3 actions pour chaque personnage de cette ${story}. Je veux que tu génères les actions uniquement pour ce personnage : ${player}, en une phrase, sans commentaire et sans details`,
        500,
        `Tu es mon assistant game-master qui connaît sur le bout des doigts l'univers de donjon et dragon, voici le contexte de l'histoire en cours : ${context}`
      );

      const newStory = response.gptResponse;
      const currentTurn = 1; // Remplacez 1 par le numéro de tour actuel récupéré depuis votre state Redux

      dispatch(updateAction({ text: newStory, turn: currentTurn }));
      navigation.navigate("ActionsHistoire");
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  useEffect(() => {
    // Vous pouvez ajouter ici une logique pour charger l'histoire pour le tour actuel au chargement du composant, si nécessaire
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Logo />
        <Text>Suite de l'histoire</Text>
        <Text>{previousStory}</Text>
        <TouchableOpacity style={styles.suivantButton} onPress={() => Suivant()}>
          <Text style={styles.buttonText}>Suivant</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  container: {
    backgroundColor: "#5D726F",
    paddingBottom: 20,
  },
  suivantButton: {
    backgroundColor: "#2E7D32",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  storyText: {
    color: "black", // Couleur du texte provenant du store Redux
  },
  newGptResponse: {
    color: "red", // Couleur du texte provenant de la réponse la plus récente de GPT
  },
});


