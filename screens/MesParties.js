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
      <Text style={styles.intro}>Retrouvez vos parties en cours</Text>

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
    textShadowRadius: 5,
  },
  partieContainer: {
    textAlign: "center",
    backgroundColor: "#efefef",
    paddingVertical: "5%",
    paddingHorizontal: "15%",
    borderRadius: 8,
    marginBottom: "4%",
    textShadowColor: "#efefef",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  titrePartie: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%", // 20% de la hauteur de l'écran
  },
  button: {
    backgroundColor: "#efefef",
    paddingVertical: "5%",
    paddingHorizontal: "15%",
    borderRadius: 8,
    marginTop: "7%",
    elevation: "5%",
    shadowColor: "#000",
    shadowOpacity: "3%",
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MesParties;
