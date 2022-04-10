import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        loading: false,
        /* userRegister:{
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',
        } */ 
    },
    reducers:{
        setUserRegister(state, action){
            state.userRegister.name = action.payload.user.name;
            state.userRegister.surname = action.payload.user.surname;
            state.userRegister.email = action.payload.user.email;
            state.userRegister.password = action.payload.user.password;
            state.userRegister.confirmPassword = action.payload.user.confirmPassword
        },
        setAuthLoading(state, action){
            state.loading = action.payload
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;