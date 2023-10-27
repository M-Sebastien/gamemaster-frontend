import { Button, StyleSheet, Text, View } from "react-native";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default function Connexion({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Crées ton compte</Text>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
});
