import { Button, StyleSheet, Text, View } from "react-native";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

export default function MenuJoueur({ navigation }) {

    const username = useSelector((state) => state.user.value.username);

    return (
        <View style={styles.container}>
            <Logo />
            <Text>Bienvenue dans votre menu {username}</Text>
            {/* <Text>Entres dans l'histoire</Text>
      <Button
        title="Générer mon histoire"
        onPress={() => navigation.navigate("TabNavigator")}
      />
      <Button
        title="J'ai déja une histoire"
        onPress={() => navigation.navigate("TabNavigator")}
      /> */}
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5D726F",
    },
});
