import React, { useState} from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { saveOnboardingData } from "../reducers/game";
import Logo from "../components/Logo";

export default function ChoixDuree({ navigation }) {
  const [duree, setDuree] = useState(null);
  const dispatch = useDispatch()
  const handleDureeSelection = (duree) => {
    
    setDuree(duree);
  };

  const Suivant = (duree) => {

    dispatch(saveOnboardingData(duree))
    navigation.navigate("ChoixPartie");
  }

  return (
    <View style={styles.container}>
      <Logo />
      <Text>Combien de temps va durer la partie?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDureeSelection("rapide")}
      >
        <Text>Rapide</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDureeSelection("moyen")}
      >
        <Text>Moyen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleDureeSelection("longue")}
      >
        <Text>Longue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.suivantButton}
        onPress={ () => Suivant(duree)}
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
  button: {
    backgroundColor: "#efefef",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: 200,
    alignItems: "center",
  },
  suivantButton: {
    backgroundColor: "#efefef",
    padding: 15,
    borderRadius: 8,
    marginTop: 40,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 16,
    fontWeight: "bold",
  },
});
