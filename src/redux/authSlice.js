import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice(

    {
        name: 'auth',
        initialState: {
            user: null,
            token: null,
            isAuthenticated: false,
            userRoute:null
            
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.userRoute = action.payload.userRoute;
        }
        }   

    }

)

export const {login} = authSlice.actions;

export default authSlice.reducer;