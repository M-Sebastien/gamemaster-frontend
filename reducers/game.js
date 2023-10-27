import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  context: {
    title:"",
    initialStory: '',
    players: [], // Supprimez la valeur initiale ici
    onbordingData: [], // Ajoutez un tableau pour sauvegarder les choix des utilisateurs
  },
  story: [
    {
      turn: Number, 
      player: { name: '', character: '' },
      story: '',
      choices: [],
      action: "",
    }
  ]
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // Action pour ajouter un joueur
    addPlayer: (state, action) => {
      state.context.players.push(action.payload);
    },
    
    // Action pour supprimer un joueur du jeu
    removePlayer: (state, action) => {
      state.context.players = state.context.players.filter(player => player !== action.payload);
    },

    // Action pour mettre à jour l'histoire
    updateStory: (state, action) => {
      state.story[0].story = action.payload;
    },
   
    // Action pour ajouter une action
    addAction: (state, action) => {
      state.story[0].action.push(action.payload);
    },

    // Action pour sauvegarder les choix des utilisateurs
    saveOnbordingData: (state, action) => {
      state.context.onbordingData = action.payload;
    },
    
  },
});

export const { addPlayer, removePlayer, updateStory, addAction, saveOnbordingData } = gameSlice.action;
export default gameSlice.reducer;


