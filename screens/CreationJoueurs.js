import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Logo from "../components/Logo";
import { useDispatch } from "react-redux";
import { updatePlayers } from "../reducers/game";


const CreationJoueurs = ({ navigation }) => {
  const dispatch = useDispatch();

  const [players, setPlayers] = useState([
    { name: "", character: "" },
    { name: "", character: "" },
  ]);

  const handleChange = (index, value) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = { name: value, character: '' };
    setPlayers(updatedPlayers);
  };

  const addNewPlayer = () => {
    if (players.length < 5) {
      setPlayers([...players, { name: `Joueur ${players.length + 1}`, character: "" }]);
    } else {
      alert("Le nombre maximum de joueurs est atteint (5 joueurs).");
    }
  };

  const handleRemovePlayer = () => {
    if (players.length > 2) {
      const updatedPlayers = [...players];
      updatedPlayers.pop();
      setPlayers(updatedPlayers);
    } else {
      alert("Vous ne pouvez pas supprimer le dernier joueur.");
    }
  };


 

  const handleGoButton = async () => {
    try {
      
      dispatch(updatePlayers(players));
      navigation.navigate("ChoixDuree");
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
      // Gérer l'erreur si nécessaire
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.intro}>Qui sont tes joueurs ?</Text>
      <Text style={styles.texte}>Prénoms</Text>
      {players.map((player, index) => (
        <View key={index} style={styles.playerContainer}>
          <TextInput
            style={styles.input}
            placeholder={`Joueur ${index + 1}`}
            value={player.name}
            onChangeText={(text) => handleChange(index, text)}
          />
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => handleRemovePlayer(index)}>
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
      <TouchableOpacity onPress={addNewPlayer} style={styles.addButton}>
        <Text style={styles.addButtonText}>Ajouter un joueur</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleGoButton}>
        <Text style={styles.buttonText}>GO !</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
    alignItems: "center",
    padding: 20,
  },
  intro: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 20,
    color: "#efefef",
    marginBottom: 20,
  },
  texte: {
    fontFamily: "LeagueSpartan_500Medium",
    fontSize: 18,
    color: "#efefef",
    marginBottom: 10,
  },
  playerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    width: "100%",
  },
  input: {
    flex: 1,
    minWidth: "70%",
    minHeight: 40,
    padding: 10,
    fontFamily: "LeagueSpartan_500Medium",
    fontSize: 16,
    backgroundColor: "#efefef",
    borderRadius: 3,
  },
  addButton: {
    backgroundColor: "#efefef",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
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
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreationJoueurs;

