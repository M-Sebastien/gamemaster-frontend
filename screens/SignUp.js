import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../reducers/user";

import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Logo from "../components/Logo";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);


  const handleSignUp = () => {
    // if (!signUpUsername === "" && !signUpPassword === "") { {
    fetch("https://gamemaster-backend.vercel.app/users/signup", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        if (data.result) {
          dispatch(signup({ username: username, token: data.token }));
          setUsername('');
          setPassword('');
          navigation.navigate("CreationJoueurs");
        }
      });
    // } else {
    //   setSignUpError(true);
    //   console.log("error");
    // }
  };

  return (
    // Modifier le style de KeyboardAvoidingView si besoin
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.label}>Nom d'utilisateur:</Text>
        <TextInput
          placeholder="Username"
          autoCapitalize="none" // Tells TextInput to automatically capitalize certain characters.
          keyboardType="default" // Determines which keyboard to open, e.g.numeric.
          textContentType="username" // **iOS** Give the keyboard and the system information about the expected semantic meaning for the content that users enter.
          autoComplete="username" // Specifies autocomplete hints for the system, so it can provide autofill.
          onChangeText={(value) => setUsername(value)}
          value={username}
          style={styles.input}
        />

        <Text style={styles.label}>Mot de passe:</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none" // Tells TextInput to automatically capitalize certain characters.
          keyboardType="default" // Determines which keyboard to open, e.g.numeric.
          textContentType="password" // **iOS** Give the keyboard and the system information about the expected semantic meaning for the content that users enter.
          autoComplete="current-password" // Specifies autocomplete hints for the system, so it can provide autofill.
          onChangeText={(value) => setPassword(value)}
          value={password}
          style={styles.input}
        />

        {error && <Text style={styles.error}>Merci de renseigner tous les champs</Text>}

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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

export default SignUp;
