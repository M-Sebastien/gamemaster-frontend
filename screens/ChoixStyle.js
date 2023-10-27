import { Button, StyleSheet, Text, View } from "react-native";
import Logo from "../components/Logo";

export default function ChoixStyle({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>Combien de temps va durer la partie?</Text>
      <Button>Classique</Button>
      <Button>Intrigue</Button>
      <Button>Exploration</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
});

//  temps rapide moyen interminable

// 2. Choisissez le type de campagne :
// a) Classique (aventure épique avec des quêtes et des donjons)
// b) Intrigue (mystère et enquête)
// c) Exploration (découverte de nouvelles terres et rencontres avec des créatures exotiques)

// Univers: Montagne Ville Foret
