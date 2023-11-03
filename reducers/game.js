import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  context: {
    title: "",
    initialStory: "",
    players: [],
    onboardingData: [],
  },
  story: [],
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
      state.context.initialStory = action.payload;
    },

    updateChoices: (state, action) => {
      if (state.story.length === 0) {
        state.story.push({
          turn: 0,
          player: { name: state.context.players[0].name, character: "" },
          story: "",
          choices: action.payload,
          action: "",
        });
      } else {
        state.story.push({
          turn: state.story.length - 1,
          player: {
            name: state.context.players[
              state.context.players.indexOf(
                state.story[state.story.length - 1].player
              ) + 1
            ].name,
            character: "",
          },
          story: "",
          choices: action.payload,
          action: "",
        });
      }
    },

    updateStorySuite: (state, action) => {
      state.story[state.story.length - 1].story = action.payload; // Remplacez les choix existants par les nouveaux
    },

    updateAction: (state, action) => {
      state.story[state.story.length - 1].action = action.payload; // Remplacez les actions existantes par les nouvelles
    },

    saveOnboardingData: (state, action) => {
      state.context.onboardingData.push(action.payload);
    },

    addStory: (state, action) => {
      state.story.push(action.payload);
    },

    selectedStory: (state, action) => {
      initialState = action.payload;
    },

    selectedStory: (state, action) => {
      initialState.context = action.payload.context;
      initialState.story = action.payload.story;
    },
  },
});

export const {
  addCharacters,
  updatePlayers,
  updateStory,
  updateAction,
  saveOnboardingData,
  addStory,
  updateChoices,
  updateStorySuite,
  selectedStory,
} = gameSlice.actions;

export default gameSlice.reducer;
