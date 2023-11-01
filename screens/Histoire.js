import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../components/Logo";
import { useDispatch } from "react-redux";
import { updateStory } from "../reducers/game";

export default function Histoire({ navigation }) {
  const dispatch = useDispatch();
  const [story, setStory] = useState(null);

  const Suivant = (story) => {
    setStory(story);
    dispatch(updateStory(story));
    navigation.navigate("ActionsHistoire");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Suite de l'histoire</Text>
      <Text>
       
      </Text>
      <TouchableOpacity
        style={styles.suivantButton}
        onPress={() => Suivant(story)}
      >
        <Text style={styles.buttonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
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
