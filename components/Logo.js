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
    height: 100,
  },
  logo: {
    marginTop: 40,
    width: 200, // Ajustez la largeur de votre logo selon vos besoins
    height: 60, // Ajustez la hauteur de votre logo selon vos besoins
  },
});

export default Logo;
