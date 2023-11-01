import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../reducers/user";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Logo from "../components/Logo";
import Footer from "../components/Footer";

export default function Register({ navigation }) {
    const dispatch = useDispatch();

    const [signUpUsername, setSignUpUsername] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [signUpError, setSignUpError] = useState(false);

    const handleRegister = () => {
        // if (!signUpUsername === "" && !signUpPassword === "") { {
        fetch("https://gamemaster-backend.vercel.app/users/signup", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
        }).then(response => {
            return response.json()
        })
            .then(data => {
                if (data.result) {
                    dispatch(signup({ username: signUpUsername, token: data.token }));
                    setSignUpUsername('');
                    setSignUpPassword('');
                    navigation.navigate("MenuJoueur");
                }
            });
        // } else {
        //   setSignUpError(true);
        //   console.log("error");
        // }
    };

    return (
        // This component will automatically adjust its height, position, or bottom padding based on the keyboard height to remain visible while the virtual keyboard is displayed.
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <View style={styles.container}>
                <Logo />
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Username"
                        autoCapitalize="none" // Tells TextInput to automatically capitalize certain characters.
                        keyboardType="default" // Determines which keyboard to open, e.g.numeric.
                        textContentType="username" // **iOS** Give the keyboard and the system information about the expected semantic meaning for the content that users enter.
                        autoComplete="username" // Specifies autocomplete hints for the system, so it can provide autofill.
                        onChangeText={(value) => setSignUpUsername(value)}
                        value={signUpUsername}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        autoCapitalize="none" // Tells TextInput to automatically capitalize certain characters.
                        keyboardType="default" // Determines which keyboard to open, e.g.numeric.
                        textContentType="password" // **iOS** Give the keyboard and the system information about the expected semantic meaning for the content that users enter.
                        autoComplete="current-password" // Specifies autocomplete hints for the system, so it can provide autofill.
                        onChangeText={(value) => setSignUpPassword(value)}
                        value={signUpPassword}
                        style={styles.input}
                    />

                    {signUpError && <Text style={styles.error}>Merci de renseigner tous les champs</Text>}

                    <TouchableOpacity onPress={() => handleRegister()} style={styles.button} activeOpacity={0.8}>
                        <Text style={styles.textButton}>Créer mon compte</Text>
                    </TouchableOpacity>
                </View>
                <Footer />
            </View>
        </KeyboardAvoidingView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#5D726F",
    },
    inputContainer: {
        width: '85%',
        backgroundColor: "#ffffff",
        padding: 30,
        borderRadius: 1,
    },
    input: {
        width: '100%',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        fontSize: 16,
    },
    button: {
        fontSize: 17,
        fontWeight: "bold",
        backgroundColor: "#e8e8e8",
        color: "#000000",
        paddingVertical: 20,
        paddingHorizontal: 105,
        borderWidth: 2,
        borderColor: "#000000",
        textAlign: "center",
        borderRadius: 12,
        marginTop: 40,
    },
    textButton: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#000000",
    },
    error: {
        marginTop: 10,
        color: 'red',
    },
});
