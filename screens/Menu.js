import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

const { height } = Dimensions.get("window");

export default function Menu({ navigation }) {
  const handlePrevious = () => {
    console.log("Naviguer vers l'écran précédent");
  };

  const handleNext = () => {
    console.log("Naviguer vers l'écran suivant");
  };
  return (
    <View style={styles.container}>
      <Logo />

      <View style={[styles.introContainer, { height: (height * 1) / 4 }]}>
        <Text style={styles.intro}>
          Tu es le game master, tes choix et les textes que tu écris vont
          influer sur la suite de l’histoire et les rôles de chacun.
        </Text>
      </View>
      <View style={[styles.titreContainer, { height: (height * 1) / 4 }]}>
        <Text style={styles.titre}>Entres dans l'histoire</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreationJoueurs")}
      >
        <Text style={styles.buttonText}>Générer mon histoire</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Connexion")}
      >
        <Text style={styles.buttonText}>J'ai déjà une histoire</Text>
      </TouchableOpacity>
      <Footer onPreviousPress={handlePrevious} onNextPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
  intro: {
    fontFamily: "LeagueSpartan_500Medium",
    fontSize: 20,
  },
  introContainer: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  titre: {
    fontFamily: "LeagueSpartan_900Black",
    fontSize: 40,
  },

  button: {
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "#e8e8e8",
    color: "#000000",
    paddingVertical: 20,
    paddingHorizontal: 105,
    borderWidth: 2,
    borderColor: "#000000",
    textAlign: "center",
    borderRadius: 12,
    marginTop: 40, // Ajoutez un espace en haut du bouton si nécessaire
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000000",
  },
});
