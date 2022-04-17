import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth', 
    initialState:{
         token: false,
         expires: null,
         idUser: null,
         name: null,
         email: null
    },
    reducers:{
        login(state, action){
            state.token = action.payload.token
            state.expires = action.payload.expires
            state.name = action.payload.name
            state.idUser = action.payload.idUser
            state.email = action.payload.email
        },
        logout(state){
            state.token = false
            state.expires =null
            state.name = null
            state.idUser = null
            state.email = null
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;