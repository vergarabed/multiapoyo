import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        error: '',
        token: ''
    },
    reducers: {
        setLoginError: (state, action) => {
            state.error = action.payload;
        },
        setLoginToken: (state, action) => {
            state.token = action.payload;
        }
    }
})

export const { setLoginError, setLoginToken } = loginSlice.actions;

export default loginSlice.reducer;

export const fetchAlllogin = (data) => (dispatch) => {
    axios.post('https://reqres.in/api/login', data)
    .then(response => {
        dispatch(setLoginError(''));
        dispatch(setLoginToken(response.data.token));
    })
    .catch((error) => {
        dispatch(setLoginToken(''));
        dispatch(setLoginError('Email incorrecto'));
        console.log(error)
    })

};