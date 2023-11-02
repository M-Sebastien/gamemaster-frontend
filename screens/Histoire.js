import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { updateAction } from "../reducers/game";
import { useFetchGpt } from "../hooks/useFetchGpt"; // Assurez-vous d'importer les actions nécessaires

export default function Histoire({ navigation }) {
  const dispatch = useDispatch();
  const [actions, setActions] = useState(null);
  
  const lastStory = useSelector((state) => {
    const stories = state.game.story.story;
    if (stories.length > 0) {
      return stories[stories.length - 1]; // Dernière histoire dans le tableau
    }
    return null; // Retourne null si le tableau est vide
  });

  const context = useSelector((state) => state.game.context); // Récupération du context
  const player = useSelector((state)  => state.game.context.player)

  const Suivant = async () => {
    try {
   
      navigation.navigate("ActionsHistoire");// Vous devez définir la fonction generatePlayersPrompt

      const response = await useFetchGpt(

        `tu crées 3 actions pour chaque personnage. Je veux que tu generes les actions uniquement pour ce personnage : ${player.name}, je veux que tu me le sorte sous forme de liste, sans commentaire.`,
        200,
        `tu es mon assistant game-master qui connais sur le bout des doigts l'univers de donjon et dragon, voici le context de l'histoire en cours : ${context}`
      );
      setActions(actions);
      dispatch(updateAction(actions))

      
      console.log(response);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
      // Gérer l'erreur si nécessaire
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Suite de l'histoire</Text>
      <Text>
        {lastStory ? (
          <p>{lastStory}</p>
        ) : (
          <p>Aucune histoire n'est disponible pour le moment.</p>
        )}
      </Text>
      <TouchableOpacity style={styles.suivantButton} onPress={() => Suivant()}>
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
});
