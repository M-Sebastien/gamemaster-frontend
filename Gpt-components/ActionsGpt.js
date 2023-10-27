import { useFetchGpt } from '../hooks/useFetchGpt';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux'; // Importer useSelector pour accéder au state

function ActionsGpt() {

  const [action, setAction] = useState();
  const [response, setResponse] = useState("");
  const numberJoueur = useSelector((state) => state.game.context.players.length);
  const context = useSelector((state) => state.game.context);

  const generatedStory = useSelector((state) => state.game.story);

  useEffect(() => {
    if (generatedStory) {
      startFetch(generatedStory, numberJoueur);
    }
  }, [generatedStory, numberJoueur]);

  async function startFetch() {
    try {
      const response = await useFetchGpt(
        `Générer 3 actions pour l'histoire sous forme de tableaux et en fonction de : "${generatedStory}" et pour le Joueur numéro ${numberJoueur}`,
        300,
        "Actions en fonction de l'histoire"
      );
      console.log(response);

      if (response && response.gptResponse) {
        // Supposons que response.gptResponse est un tableau d'actions générées
        setAction(response.gptResponse);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
        <Text >{response}</Text>
  
    </View>
  );
}

export default ActionsGpt;
