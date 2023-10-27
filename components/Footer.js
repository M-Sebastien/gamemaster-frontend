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

// CustomNavigator.js
// import React from "react";
// import { TouchableOpacity, StyleSheet } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { useNavigation } from "@react-navigation/native";

// const CustomNavigator = () => {
//   const navigation = useNavigation();

//   const handlePrevious = () => {
//     // Naviguer vers la page précédente
//     navigation.goBack();
//   };

//   const handleNext = () => {
//     // Naviguer vers la page suivante
//     // Ici, tu peux automatiser la logique pour naviguer vers la page suivante
//     // sans avoir à spécifier son nom à chaque fois.
//     // Par exemple, tu peux avoir un tableau de noms de pages et
//     // naviguer vers la suivante dans le tableau.
//     // Remplacez le tableau par votre propre logique de navigation.
//     const pages = ["Page1", "Page2", "Page3"]; // Remplacez par les noms de vos pages
//     const currentPageIndex = pages.indexOf(navigation.getCurrentRoute().name);
//     const nextPage = pages[currentPageIndex + 1];
//     if (nextPage) {
//       navigation.navigate(nextPage);
//     }
//   };

//   return (
//     <TouchableOpacity style={styles.iconContainer} onPress={handleNext}>
//       <Icon name="chevron-right" size={25} color="black" />
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   iconContainer: {
//     padding: 10,
//   },
// });

// export default CustomNavigator;
