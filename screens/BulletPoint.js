import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../components/Logo";

export default BulletPoint = () => {
  const navigation = useNavigation();
  const players = useSelector((state) => state.game.context.players);

  const entrerDansLhistoire = () => {
    navigation.navigate("PartieDetail");
  };

  return (
    <ScrollView style={styles.container}>
      <Logo />
      <Text style={styles.intro}>Voici vos personnages</Text>
      <View style={styles.cardContainer}>
        {players.map((player, i) => {
          return (
            <View key={i} style={styles.cardPlayer}>
              <Text style={{fontSize: 20}}>{player.name}</Text>
              <View style={styles.card}>
                <Text>{player.character}</Text>
              </View>
          </View>
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={entrerDansLhistoire}>
          <Text style={styles.buttonText}>Entrez dans l'histoire</Text>
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
    textShadowColor: "#efefef",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
  },
  cardPlayer: {
    width: "90%",
    fontFamily: "LeagueSpartan_500Medium",
    color: "black",
  },
  card: {
    backgroundColor: "#efefef",
    padding: "5%",
    borderRadius: 8,
    marginBottom: "5%",
    marginTop: "5%",
    width: "100%",
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
    //elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
