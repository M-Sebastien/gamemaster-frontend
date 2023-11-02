import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  context: {
    title: "",
    initialStory: "",
    players: [],
    onboardingData: [], // Ajoutez un tableau pour sauvegarder les choix des utilisateurs
  },
  story: [
    {
      turn: 0,
      player: { name: "", character: "" },
      story: "",
      choices: [],
      action: "", // Changez cette clé en un tableau pour stocker plusieurs actions
    },
  ],
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    addCharacters: (state, action) => {
      state.context.players.push(action.payload);
    },

    updatePlayers: (state, action) => {
      state.context.players = action.payload;
    },

    updateStory: (state, action) => {
      state.story[0].story = action.payload;
    },

    updateChoices: (state, action) => {
      state.story[0].choices.push(action.payload);
    },

    updateAction: (state, action) => {
      state.story[0].action = action.payload;
    },

    saveOnboardingData: (state, action) => {
      state.context.onboardingData.push(action.payload);
    },
   
  },
});

export const {
  addCharacters,
  updatePlayers,
  updateStory,
  updateAction,
  saveOnboardingData,
  addStory
} = gameSlice.actions;
export default gameSlice.reducer;
