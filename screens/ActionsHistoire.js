import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { updateAction } from "../reducers/game";
import ActionsGpt from "../Gpt-components/ActionsGpt";

export default function ActionsHistoire({ navigation }) {
  const dispatch = useDispatch();

  const Suivant = () => {
    dispatch(updateAction);
    navigation.navigate("Histoire");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.intro}>Quelle action choisit le joueur 1?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleChoixSelection("Choix1")}
        >
          <Text>Ici c'est le Choix 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleChoixSelection("Choix2")}
        >
          <Text>Ici c'est le Choix 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleChoixSelection("Choix3")}
        >
          <Text>Ici c'est le Choix 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Histoire")}
        >
          <Text style={styles.buttonText}>Générer la suite de l'histoire</Text>
        </TouchableOpacity>
      </View>
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
    textShadowRadius: 5,
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
