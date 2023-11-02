import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";

const MesParties = () => {
  const [parties, setParties] = useState([]);
  const [partieActuelle, setPartieActuelle] = useState(null);
  const navigation = useNavigation();

  const partiesEnregistrees = [
    { id: 1, titre: "Partie 1" },
    { id: 2, titre: "Partie 2" },
    // ... autres parties enregistrées
  ];

  useEffect(() => {
    if (partiesEnregistrees.length > 0) {
      setPartieActuelle(partiesEnregistrees[0]);
      setParties(partiesEnregistrees);
    }
  }, []);

  const commencerPartie = () => {
    console.log("Partie commencée:");
    // Mettez en œuvre le code pour commencer la partie ici, peut-être naviguer vers un écran de jeu
    navigation.navigate("CreationJoueurs");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.centerContainer}>
        {partieActuelle ? (
          <View style={styles.partieContainer}>
            <Text style={styles.titrePartie}>{partieActuelle.titre}</Text>
          </View>
        ) : (
          <Text>Aucune partie enregistrée.</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={commencerPartie}
          disabled={!partieActuelle}
        >
          <Text style={styles.buttonText}>Commencer la partie</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
    alignItems: "center",
    justifyContent: "center",
  },
  partieContainer: {
    backgroundColor: "#efefef",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  titrePartie: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  centerContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#efefef",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MesParties;
