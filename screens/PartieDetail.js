import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../components/Logo";
import { updateAction } from "../reducers/game";
import { useFetchGpt } from "../hooks/useFetchGpt"; // Import de l'action updateAction

const PartieDetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const story = useSelector((state) => state.game.context.story);

  const goToActionsHistoire = async () => {
    try {
      const response = await useFetchGpt(
        `tu crées 3 actions pour chaque personnage. Je veux que tu génères les actions uniquement pour ce personnage : ${player.name}, je veux que tu me les sortes sous forme de liste, sans commentaire.`,
        200,
        `tu es mon assistant game-master qui connaît sur le bout des doigts l'univers de donjon et dragon, voici le context de l'histoire en cours : ${context}`
      );
      
      // Mettre à jour les actions enregistrées
      setActions(response.actions); // Assurez-vous que setActions est une fonction définie pour mettre à jour le state
      dispatch(updateAction(response.actions)); // Mettre à jour l'action dans Redux
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
      
      navigation.navigate("ActionsHistoire");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
    flexGrow: 1,
    backgroundColor: "#5D726F",
    justifyContent: "center",
    alignItems: "center",
  },
  intro: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 20,
    marginVertical: 20,
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


