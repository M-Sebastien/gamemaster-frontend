import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Logo from "../components/Logo";
import { useDispatch } from "react-redux";
import { updatePlayers } from "../reducers/game";

const CreationJoueurs = ({ navigation }) => {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState([
    { name: "Joueur 1", character: "" },
    { name: "Joueur 2", character: "" },
  ]);

  const handleChange = (index, value) => {
    setPlayers(
      players.map((player, i) =>
        i === index ? { name: value, character: "" } : player
      )
    );
  };

  const addNewPlayer = () => {
    if (players.length < 5) {
      const newPlayers = [
        ...players,
        { name: `Joueur ${players.length + 1}`, character: "" },
      ];
      setPlayers(newPlayers);
    } else {
      alert("Le nombre maximum de joueurs est atteint (5 joueurs).");
    }
  };

  const handleRemovePlayer = () => {
    if (players.length > 2) {
      // Vérifie qu'il y a plus de 2 joueurs avant de supprimer
      const newPlayers = [...players];
      newPlayers.pop(); // Supprime le dernier joueur du tableau
      setPlayers(newPlayers);
    } else {
      alert("Vous ne pouvez pas supprimer le dernier joueur.");
    }
  };
  const handleGoButton = () => {
    dispatch(updatePlayers(players));

    navigation.navigate("ChoixDuree", { joueurs: players });
  };

  return (
    <ScrollView style={styles.container}>
      <Logo />
      <Text style={styles.intro}>Quels sont les prénoms de tes joueurs?</Text>

      {players.map((player, index) => (
        <View key={index} style={styles.playerContainer}>
          <TextInput
            style={styles.input}
            placeholder={`Joueur ${index + 1}`}
            value={player.description}
            onChangeText={() => handleChange()}
          />
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => handleRemovePlayer(index)}>
              <Icon
                style={styles.removeIcon}
                name="times"
                size={35}
                color="#000000"
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={addNewPlayer} style={styles.addButton}>
          <Text style={styles.addButtonText}>Ajouter un joueur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleGoButton}>
          <Text style={styles.buttonText}>GO!</Text>
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
  },

  playerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: "5%",
  },
  input: {
    flex: 1,
    minWidth: "70%",
    minHeight: "5%",
    padding: "5%",
    fontFamily: "LeagueSpartan_500Medium",
    fontSize: 16,
    backgroundColor: "#efefef",
    borderRadius: 8,
  },
  iconsContainer: {
    padding: "5%",
  },
  addButton: {
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
  addButtonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
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

export default CreationJoueurs;
