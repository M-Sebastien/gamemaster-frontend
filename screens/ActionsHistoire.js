import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { updateAction } from "../reducers/game";
import ActionsGpt from "../Gpt-components/ActionsGpt";

export default function Histoire({ navigation }) {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const token = useSelector((state) => state.user.value.token)
  const Suivant = () => {

    dispatch(updateAction)
    navigation.navigate("Histoire");
  }

  function saveGame() {
    fetch(`https://gamemaster-backend.vercel.app/stories/saveStory/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        context: {
          title: game.context.title,
          initialStory: game.context.initialStory,
          players: game.context.players,
          onBoardingData: game.context.onBoardingData
        },
        story: game.story
      })
    })
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(data => {
        console.log(data);
      })
  }


  return (
    <View style={styles.container}>
      <Logo />
      <Text>Suite de l'histoire</Text>
      <Text>
        <ActionsGpt />
      </Text>
      <TouchableOpacity
        style={styles.suivantButton}
        onPress={Suivant}
      >
        <Text style={styles.buttonText}>Suivant</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.suivantButton}
        onPress={() => saveGame()}
      >
        <Text style={styles.buttonText}> Enregistrer ma partie</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
});
