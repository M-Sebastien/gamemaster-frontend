import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  context: {
    title: "",
    initialStory: "",
    players: [], // Supprimez la valeur initiale ici
    onboardingData: [], // Ajoutez un tableau pour sauvegarder les choix des utilisateurs
  },
  story: [
    {
      turn: 0, // Valeur initiale du tour
      player: { name: "", character: "" },
      story: "",
      choices: [],
      action: "",
    },
  ],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // Action pour ajouter un joueur
    addPlayer: (state, action) => {
      if (state.context.players.length < 5) {
        state.context.players.push({
          name: `Joueur ${state.context.players.length + 1}`,
          description: "",
        });
      }
    },
    removePlayer: (state, action) => {
      state.context.players.splice(action.payload, 1);
    },

    // Action pour mettre à jour l'histoire
    updateStory: (state, action) => {
      state.story[0].story = action.payload;
    },

    // Action pour ajouter une action
    updateAction: (state, action) => {
      state.story[0].action.push(action.payload);
    },

    updatePlayers: (state, action) => {
      state.context.players = action.payload;
    },

    // Action pour sauvegarder les choix des utilisateurs
    saveOnboardingData: (state, action) => {
      state.story[0].choices.push(action.payload);
    },
  },
});

export const {
  addPlayer,
  removePlayer,
  updateStory,
  addAction,
  saveOnboardingData,
  updatePlayers,
} = gameSlice.actions;
export default gameSlice.reducer;
