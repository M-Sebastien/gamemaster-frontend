import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Logo = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/logogm.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efefef",
    width: "100%",
    maxHeight: "15%", // Utilisation d'une unité relative pour la hauteur maximale
  },
  logo: {
    marginTop: "8%", // Utilisation d'une unité relative pour l'espacement en haut
    maxWidth: "70%", // Utilisation d'une unité relative pour la largeur maximale
    maxHeight: "40%", // Utilisation d'une unité relative pour la hauteur maximale
  },
});

export default Logo;
