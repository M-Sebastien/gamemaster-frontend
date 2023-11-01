import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../components/Logo";
import { useDispatch } from "react-redux";

import { useState } from "react";

export default function ActionsHistoire({ navigation }) {
  const dispatch = useDispatch();
  const [actions, setActions] = useState(null);

  const Suivant = (actions) => {
    setActions(actions);
    dispatch(updateAction(actions));
    navigation.navigate("Histoire");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Suite de l'histoire</Text>
      <Text>
      </Text>
      <TouchableOpacity
        style={styles.suivantButton}
        onPress={() => Suivant(actions)}
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
});
