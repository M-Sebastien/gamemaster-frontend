import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../reducers/user";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Logo from "../components/Logo";

export default function Connexion({ navigation }) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = () => {
    // if (!username === "" && !password === "") {
    fetch("https://gamemaster-backend.vercel.app/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.result) {
          dispatch(signin({ username: username, token: data.token }));
          setUsername("");
          setPassword("");
          navigation.navigate("MesParties");
        }
      });
    // } else {
    //   setError(true);
    //   console.log("error");
    // }
  };

  return (
    <ScrollView style={styles.container}>
      <Logo />
      <View style={styles.centerContainer}>
        <Text style={styles.label}>Nom d'utilisateur</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          autoCapitalize="none" // Tells TextInput to automatically capitalize certain characters.
          keyboardType="default" // Determines which keyboard to open, e.g.numeric.
          textContentType="username" // **iOS** Give the keyboard and the system information about the expected semantic meaning for the content that users enter.
          autoComplete="username" // Specifies autocomplete hints for the system, so it can provide autofill.
          onChangeText={(value) => setUsername(value)}
          value={username}
        />

        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          autoCapitalize="none" // Tells TextInput to automatically capitalize certain characters.
          keyboardType="default" // Determines which keyboard to open, e.g.numeric.
          textContentType="password" // **iOS** Give the keyboard and the system information about the expected semantic meaning for the content that users enter.
          autoComplete="current-password" // Specifies autocomplete hints for the system, so it can provide autofill.
          onChangeText={(value) => setPassword(value)}
          value={password}
        />

        {error && (
          <Text style={styles.error}>Merci de renseigner tous les champs</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

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
    textShadowColor: "#efefef",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  input: {
    backgroundColor: "#efefef",
    paddingVertical: "5%",
    paddingHorizontal: "30%",
    borderRadius: 8,
    marginBottom: "4%",
    fontFamily: "LeagueSpartan_500Medium",
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30%",
  },
  button: {
    backgroundColor: "#efefef",
    paddingVertical: "5%",
    paddingHorizontal: "15%",
    borderRadius: 8,
    marginTop: "7%",
    // elevation: "5%",
    shadowColor: "#000",
    shadowOpacity: "3%",
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
