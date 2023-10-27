import { Button, StyleSheet, Text, View } from "react-native";
import Logo from "../components/Logo";

export default function BulletPoint({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Description des personnages/ joueurs</Text>
      <Text>
        <h1>Joueur 1 </h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Text>
      <Text>
        <h1>Joueur 2 </h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Text>
      <Text>
        <h1>Joueur 3 </h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Text>
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
// niveau superdebutant moyen interminable
// style epique amusante relaxante
