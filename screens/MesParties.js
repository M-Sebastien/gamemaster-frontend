import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectedStory } from "../reducers/game";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../components/Logo";

const MesParties = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.value.token);
  const navigation = useNavigation();

  const [storiesData, setStoriesData] = useState([]);

  useEffect(() => {
    fetch(
      `http://192.168.1.59:3000/stories/getStoriesByToken/${token}`
    )
      .then((response) => response.json())
      .then((data) => {
        setStoriesData(data.stories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleValidation = () => {
    navigation.navigate("CreationJoueurs");
  };

  const handleStorySelection = (title) => {
    const story = storiesData.find(e => e.context.title === title)
    dispatch(selectedStory(story));
    navigation.navigate("Histoire");
  };

  const renderStoryButtons = () => {
    return storiesData.map((story, index) => (
      <TouchableOpacity
        key={index}
        style={styles.partieContainer}
        onPress={() => handleStorySelection(story.context.title)}
      >
        <Text style={styles.buttonText}>{story.context.title}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.centerContainer}>
        <Text style={styles.intro}>Retrouvez ici vos parties en cours</Text>

        {storiesData.length > 0 ? (
          <View>{renderStoryButtons()}</View>
        ) : (
          <Text style={styles.intro}>Aucune partie enregistrée</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleValidation}>
          <Text style={styles.buttonText}>Nouvelle partie</Text>
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
  intro: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 25,
    justifyContent: "center",
    paddingHorizontal: "10%",
    paddingVertical: "15%",
    marginTop: "0%",
    textShadowColor: "#efefef",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  partieContainer: {
    textAlign: "center",
    backgroundColor: "#efefef",
    paddingVertical: "5%",
    paddingHorizontal: "15%",
    borderRadius: 8,
    marginBottom: "9%",
    textShadowColor: "#efefef",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  titrePartie: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#efefef",
    paddingVertical: "5%",
    paddingHorizontal: "15%",
    borderRadius: 8,
    marginTop: "7%",
    //elevation: "5%",
    shadowColor: "#000",
    shadowOpacity: "3%",
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontFamily: "LeagueSpartan_700Bold",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MesParties;