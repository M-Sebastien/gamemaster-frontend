import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Logo from "../components/Logo";

const Connexion = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Nom d'utilisateur:", username);
    console.log("Mot de passe:", password);
    navigation.navigate("MesParties");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.label}>Nom d'utilisateur:</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre nom d'utilisateur"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Text style={styles.label}>Mot de passe:</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre mot de passe"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry // Masque le texte pour les mots de passe
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5D726F",
  },
  label: {
    color: "#efefef",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#efefef",
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
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

export default Connexion;
