import { createSlice, configureStore } from "@reduxjs/toolkit";



const loginReducer =createSlice({
    name: "auth", initialState={ isAuth: false }, reducers: {
        login(state) { state.isAuth=true},
        logOut(state) { state.isAuth=false}
} });

const store = configureStore({reducer:loginReducer.reducer});