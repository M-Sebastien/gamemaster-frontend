import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useFetchGpt } from '../hooks/useFetchGpt';
import { useSelector } from 'react-redux';

function TitleGpt() {
  const [response, setResponse] = useState("");
  const context = useSelector((state) => state.game.context);
  const numberJoueur = useSelector((state) => state.game.context.players.length);

  useEffect(() => {
    console.log(numberJoueur);
    startFetch();
  }, [context, numberJoueur]);

  async function startFetch() {

    const request = `Générer un titre pour l'histoire : ${context} , ${numberJoueur}.`;

    
    const gptResponse = await useFetchGpt(request, 140, `Tu es le maître du jeu pour Donjons et Dragons. Rappelle-toi du contexte : ${context}`);

    console.log(gptResponse);
    setResponse(gptResponse.gptResponse);
  }

  return (
    <View>
      <Text>{response}</Text>
    </View>
  );
}

export default TitleGpt;