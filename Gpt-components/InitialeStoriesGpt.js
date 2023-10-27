import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // Assurez-vous d'importer setGeneratedStory depuis votre reducer
import { useFetchGpt } from '../hooks/useFetchGpt';

function InitialStoriesGpt() {
  const [response, setResponse] = useState("");
  const numberJoueur = useSelector((state) => state.game.context.players.length);
  const onboarding = useSelector((state) => state.game.context.onboarding);
  const context = useSelector((state) => state.game.context);
  const dispatch = useDispatch();

  async function startFetch() {
    console.log(onboarding, numberJoueur);
    const gptResponse = await useFetchGpt(
      `Commence la partie ! Il y a ${numberJoueur} - Choix des paramètres de la partie par les utilisateurs : ${onboarding}`,
      300,
      `Tu es le maître du jeu pour Donjons et Dragons. Tu génères le début de l'histoire, voici le context de l'histoire : ${context}`
    );

    console.log(gptResponse);
    setResponse(gptResponse);

    dispatch(gptResponse); // Utilisation de l'action du reducer
  }

  return (
    <View>
      <TouchableOpacity onPress={startFetch}>
        <Text>Appuyez pour commencer la partie</Text>
      </TouchableOpacity>
      <Text>{response}</Text>
    </View>
  );
}

export default InitialStoriesGpt;





