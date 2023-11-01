import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useFetchGpt } from "../hooks/useFetchGpt";
import { useSelector } from "react-redux";

function BulletGpt() {
  const [response, setResponse] = useState("");
  const context = useSelector((state) => state.game.context);

  useEffect(() => {
    if (!context) {
      return; // Ne fait rien si les données d'onboarding ou l'histoire sont absentes
    }

    const request = `Générer des key-points en fonction des données : "${context}"`;

    const fetchGptData = async () => {
      const gptResponse = await useFetchGpt(
        request,
        300,
        "Tu es le maître du jeu pour Donjons et Dragons. Tu génères le début de l'histoire"
      );
      console.log(gptResponse);
      setResponse(gptResponse.gptResponse);
    };

    fetchGptData();
  }, [context]);

  return (
    <View>
      <Text>{response}</Text>
    </View>
  );
}

export default BulletGpt;
