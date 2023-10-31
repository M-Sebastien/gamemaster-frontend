import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "../components/Logo";
import { useDispatch } from "react-redux";
import { updateAction } from "../reducers/game";
import ActionsGpt from "../Gpt-components/ActionsGpt";

export default function Histoire({ navigation }) {
  const dispatch = useDispatch()


  const Suivant = () => {

    dispatch(updateAction)
    navigation.navigate("Histoire");
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Suite de l'histoire</Text>
      <Text>
        <ActionsGpt />
      </Text>
      <TouchableOpacity
        style={styles.suivantButton}
        onPress={Suivant}
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
