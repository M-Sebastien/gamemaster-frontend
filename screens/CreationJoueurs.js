import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Logo from "../components/Logo";

const CreationJoueurs = ({ navigation }) => {
  const [players, setPlayers] = useState(["Joueur 1", "Joueur 2"]);

  const handlePlayerNameChange = (text, index) => {
    const newPlayers = [...players];
    newPlayers[index] = text;
    setPlayers(newPlayers);
  };

  const handleSavePlayer = (index) => {
    console.log(`Nom du Joueur ${index + 1} enregistré : ${players[index]}`);
    // Logique pour enregistrer le nom du joueur (index) ici
  };

  const addPlayer = () => {
    if (players.length < 5) {
      const newPlayers = [...players, `Joueur ${players.length + 1}`];
      setPlayers(newPlayers);
    } else {
      alert("Le nombre maximum de joueurs est atteint (5 joueurs).");
    }
  };

  const removePlayer = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  };
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.intro}>Qui sont tes joueurs?</Text>
      <Text style={styles.texte}>Prénoms</Text>
      {players.map((player, index) => (
        <View key={index} style={styles.playerContainer}>
          <TextInput
            style={styles.input}
            placeholder={`Joueur ${index + 1}`}
            value={player}
            onChangeText={(text) => handlePlayerNameChange(text, index)}
          />
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => handleSavePlayer(index)}>
              <Icon
                style={styles.addIcon}
                name="check"
                size={30}
                color="#efefef"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removePlayer(index)}>
              <Icon
                style={styles.removeIcon}
                name="times"
                size={30}
                color="#efefef"
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <TouchableOpacity onPress={addPlayer} style={styles.addButton}>
        <Text style={styles.addButtonText}>Ajoutes un joueur</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ChoixDebut")}
      >
        <Text style={styles.buttonText}>GO!</Text>
      </TouchableOpacity>
    </View>
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
    textAlign: "center", // Centre le texte horizontalement
    lineHeight: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  texte: {
    fontFamily: "LeagueSpartan_500Medium",
    fontSize: 20,
    textAlign: "center", // Centre le texte horizontalement
    lineHeight: 0,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 18,
    marginStart: 40,
  },
  input: {
    flex: 1,
    maxWidth: 200,
    minHeight: 40,
    padding: 10,
    fontFamily: "LeagueSpartan_500Medium",
    fontSize: 17,
    backgroundColor: "#efefef",
    borderRadius: 3,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginEnd: 20,
  },
  addIcon: {
    margin: 10,
  },
  removeIcon: {
    margin: 10,
  },
  addButton: {
    backgroundColor: "#efefef",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "center",
    elevation: 3, // Ombre pour l'effet de profondeur (Android)
    shadowColor: "#000", // Couleur de l'ombre (iOS)
    shadowOpacity: 0.5, // Opacité de l'ombre (iOS)
    shadowOffset: { width: 0, height: 4 }, // Décalage de l'ombre (iOS)
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#efefef",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "center",
    elevation: 3, // Ombre pour l'effet de profondeur (Android)
    shadowColor: "#000", // Couleur de l'ombre (iOS)
    shadowOpacity: 0.5, // Opacité de l'ombre (iOS)
    shadowOffset: { width: 0, height: 4 }, // Décalage de l'ombre (iOS)
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreationJoueurs;
