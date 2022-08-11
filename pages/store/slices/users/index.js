import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: []
    },
    reducers: {
        List: (state, action) => {
            state.list = action.payload;
        }
    }
})

export const { List } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {

    axios.get('https://reqres.in/api/users')
    .then(response => {
        dispatch(List(response.data.data));
    })
    .catch((error) => console.log(error))
};