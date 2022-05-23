import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        search: (state, action) => {
            state.user = action.payload;
        },

    }
})

export const { search } = userSlice.actions;

export const searchUser = (state) => state.user.user;

export default userSlice.reducer;