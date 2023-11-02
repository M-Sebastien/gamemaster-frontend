import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateStory, updateChoices } from "../reducers/game";
import { useFetchGpt } from "../hooks/useFetchGpt";

export default function ActionsHistoire({ navigation }) {
  const dispatch = useDispatch();
  const [story, setStory] = useState(null);

  const lastStory = useSelector((state) => {
    const stories = state.game.story;
    if (stories.length > 0) {
      return stories[stories.length - 1]; // Dernière histoire dans le tableau
    }
    return null; // Retourne null si le tableau est vide
  });

  const action = useSelector((state) => state.game.story.choices);
  const context = useSelector((state) => state.game.context);
  const choices = useSelector((state) => state.game.story.choices);

  const Suivant = async () => {
    try {
      setStory(story);
      dispatch(updateStory(story));
      dispatch(updateChoices(choices));

      navigation.navigate("Histoire");

      const response = await useFetchGpt(
        `Tu génères la suite de l'histoire en fonction de ${lastStory} et de l'action choisie par le joueur, ${choices}.`,
        200,
        `Tu es mon assistant game-master qui connaît sur le bout des doigts l'univers de donjon et dragon. Voici le contexte de l'histoire en cours : ${context}`
      );

      dispatch(updateStory(response));
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
      <Text>Actions: {action}</Text>
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
    justifyContent: "center",
    alignItems: "center",
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

