import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../components/Logo";
import { updateChoices } from "../reducers/game";
import { useFetchGpt } from "../hooks/useFetchGpt"; // Import de l'action updateAction

const PartieDetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const story = useSelector((state) => state.game.context.initialStory);
  const context = useSelector((state) => state.game.context);
  const store = useSelector((state) => state.game);
  const player = useSelector((state) => state.game.context.players[0]);
console.log("store ------------------", store)
  const goToActionsHistoire = async () => {
    try {
      const response = await useFetchGpt(
        `Tu crées 3 actions pour chaque personnage de cette ${story}. Je veux que tu génères les actions uniquement pour ce personnage : ${player.name}, je veux que tu me les sortes sous forme de liste, sans commentaire.`,
        200,
        `Tu es mon assistant game-master qui connaît sur le bout des doigts l'univers de donjon et dragon, voici le contexte de l'histoire en cours : ${context}`
      );
      
      // Mettre à jour les actions enregistrées
      const actions = response.gptResponse.split(/[0-9]./).slice(1, -1); // Obtention des actions
      dispatch(updateChoices(actions)); // Mettre à jour l'action dans Redux
      navigation.navigate("ActionsHistoire");
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  return (
    <ScrollView style={styles.container}>

      <Logo />
      <Text style={styles.intro}>Voici le début de votre histoire</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.text}>
            {story}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => goToActionsHistoire()}
        >
          <Text style={styles.buttonText}>Suite</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
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
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    width: "90%",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#efefef",
    padding: 15,
    borderRadius: 8,
    elevation: 5,
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontFamily: "LeagueSpartan_500Medium",
    fontSize: 16,
    textAlign: "left",
  },
});

export default PartieDetail;



