import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importez useNavigation depuis React Navigation
import Logo from "../components/Logo";

const MesParties = () => {
  const [parties, setParties] = useState([]);
  const [partieActuelle, setPartieActuelle] = useState(null);
  const navigation = useNavigation(); // Utilisez useNavigation pour accéder à l'objet de navigation

  // Simulation des données de parties
  const partiesEnregistrees = [
    { id: 1, titre: "Partie 1" },
    { id: 2, titre: "Partie 2" },
    // ... d'autres parties enregistrées
  ];

  useEffect(() => {
    // Au chargement de la page, sélectionnez la première partie
    if (partiesEnregistrees.length > 0) {
      setPartieActuelle(partiesEnregistrees[0]);
      setParties(partiesEnregistrees);
    }
  }, []); // Le tableau vide signifie que cela s'exécutera uniquement une fois, équivalent à componentDidMount

  const commencerPartie = () => {
    // Mettez en œuvre le code pour commencer la partie ici
    // Peut-être naviguer vers un écran de jeu ou effectuer d'autres actions nécessaires
    console.log("Partie commencée:", partieActuelle.titre);
    navigation.navigate("CreationJoueurs"); // Naviguer vers la page ChoixDurée
  };

  return (
    <View style={styles.container}>
      <Logo />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
  partieContainer: {
    backgroundColor: "#efefef",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },
  titrePartie: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#efefef",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MesParties;
