import { Button, StyleSheet, Text, View } from "react-native";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default function Connexion({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Connectes toi</Text>
      {/* <Text>Entres dans l'histoire</Text>
      <Button
        title="Générer mon histoire"
        onPress={() => navigation.navigate("TabNavigator")}
      />
      <Button
        title="J'ai déja une histoire"
        onPress={() => navigation.navigate("TabNavigator")}
      /> */}
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
