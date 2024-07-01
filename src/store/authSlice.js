import { createSlice } from "@reduxjs/toolkit";

// For user authentication -->
const initialState = {
	status: false,
	userData: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.status = true;
			state.userData = action.payload.userData;
		},
		logout: (state) => {
			state.status = false;
			state.userData = null;
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
/* Store -->

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const store = configureStore({
    reducer:{
        auth: authSlice,
    }
    
})

export default store;


*/
