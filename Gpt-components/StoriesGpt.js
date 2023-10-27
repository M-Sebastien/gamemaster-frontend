import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFetchGpt } from "../hooks/useFetchGpt";
import { useDispatch, useSelector } from "react-redux";

function StoriesGPT() {
  const [response, setResponse] = useState("");
  const dispatch = useDispatch();

  const action = useSelector((state) => state.game.story.action);
  const choices = useSelector((state) => state.game.story.choices);
  const numberJoueur = useSelector(
    (state) => state.game.context.players.length
  );

  useEffect(() => {
    if (action && choices) {
      startFetch();
    }
  }, [action, choices]);

  async function startFetch() {
    const prompt = `Continue la partie en fonction de l'action : "${action}" du joueur : ${numberJoueur}`;
    const maxTokens = 300;
    const messageSysteme = `Tu es le maître du jeu pour Donjons et Dragons. Tu génères le début de l'histoire, puis tu crées 4 actions pour chaque personnage. Actions suggérées : "${choices}".`;

    const gptResponse = await useFetchGpt(prompt, maxTokens, messageSysteme);

    console.log(gptResponse);
    setResponse(gptResponse);

    dispatch(gptResponse);
  }

  return (
    <View>
      <Text>{response}</Text>
    </View>
  );
}

export default StoriesGPT;
