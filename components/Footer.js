import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Footer = ({ onPreviousPress, onNextPress }) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={onPreviousPress} style={styles.iconContainer}>
        <Icon name="chevron-left" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNextPress} style={styles.iconContainer}>
        <Icon name="chevron-right" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 60,
    backgroundColor: "#f0f0f0",
    width: "100%",
  },
  iconContainer: {
    padding: 10,
  },
});

export default Footer;
