import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Logo from "../components/Logo";

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Nom d'utilisateur:", username);
    console.log("Mot de passe:", password);

    navigation.navigate("CreationJoueurs");
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.centerContainer}>
        <Text style={styles.label}>Nom d'utilisateur</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre nom d'utilisateur"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez votre mot de passe"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry // Masque le texte pour les mots de passe
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Se connecter</Text>
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
  label: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: "5%",
    marginTop: "5%",
  },
  input: {
    backgroundColor: "#efefef",
    paddingVertical: "5%",
    paddingHorizontal: "15%",
    borderRadius: 8,
    marginBottom: "4%",
    fontFamily: "LeagueSpartan_500Medium",
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
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
  },
});

export default SignUp;
