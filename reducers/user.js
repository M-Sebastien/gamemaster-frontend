import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { token: null, username: null },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signin: (state, action) => {
            state.value.username = action.payload.username;
            state.value.token = action.payload.token;
        },
        signup: (state, action) => {
            state.value.username = action.payload.username;
            state.value.token = action.payload.token;
        }
    },
});

export const { signin, signup } = userSlice.actions;
export default userSlice.reducer;