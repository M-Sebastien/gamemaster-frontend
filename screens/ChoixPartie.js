import { Button, StyleSheet, Text, View } from "react-native";
import Logo from "../components/Logo";

export default function ChoixPartie({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Et maintenant que fais tu?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
});
// temps rapide moyen interminable
// niveau superdebutant moyen chaud
// style epique amusante relaxante
