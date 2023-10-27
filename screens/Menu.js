import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import Logo from "../components/Logo";

const { height } = Dimensions.get("window");

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={[styles.introContainer, { height: (height * 1) / 4 }]}>
        <Text style={styles.intro}>
          Desormais tu es le game master, tes choix vont influer sur les rôles
          de chacuns ainsi que la suite de ton histoire.
        </Text>
      </View>
      <View style={[styles.titreContainer, { height: (height * 1) / 5 }]}>
        <Text style={styles.titre}>Entres dans l'histoire</Text>
      </View>
      <View style={[styles.buttonContainer, { height: (height * 1) / 5 }]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Connexion")}
        >
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Créer un compte</Text>
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
    textAlign: "center", // Centre le texte horizontalement
    lineHeight: 30,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  titre: {
    fontFamily: "LeagueSpartan_900Black",
    fontSize: 36,
    color: "#efefef",
    textAlign: "center", // Centre le texte horizontalement
    lineHeight: 50, // Espacement entre les lignes (ajuste selon ton besoin)
    paddingVertical: 50,
    paddingHorizontal: 5,
    textShadowColor: "#000000", // Couleur du contour (noir)
    textShadowOffset: { width: 1, height: 1 }, // Décalage du contour
    textShadowRadius: 3, // Espacement du contour
  },

  buttonContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 120, // Réduit la marge supérieure pour déplacer les boutons vers le haut
  },
  button: {
    backgroundColor: "#efefef", // Couleur de fond verte
    paddingVertical: 18, // Ajuste l'espacement interne
    paddingHorizontal: 50, // Ajuste l'espacement interne
    borderRadius: 8,
    marginTop: 20,
    elevation: 3, // Ombre pour l'effet de profondeur (Android)
    shadowColor: "#000", // Couleur de l'ombre (iOS)
    shadowOpacity: 0.5, // Opacité de l'ombre (iOS)
    shadowOffset: { width: 0, height: 4 }, // Décalage de l'ombre (iOS)
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",

    fontSize: 16,
    fontWeight: "bold",
  },
});
