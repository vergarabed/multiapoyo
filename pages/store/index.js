import { configureStore  } from "@reduxjs/toolkit";

//reducer
import users from './slices/users';
import login from './slices/login';

export default configureStore({
    reducer: {
        users,
        login
    }
});