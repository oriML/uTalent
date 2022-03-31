import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { asyncUserFunctions } from './functions'

/**
 * 
 * this slice will be charge on user actions for server
 * the userAuth slice will be charge on user authentications actions
 * such as login logput register etc.
 */

export const getUser = createAsyncThunk('user/getUser', asyncUserFunctions.getUserFromServer)

export const signUpUser = createAsyncThunk('user/signUpUser', asyncUserFunctions.signUpUserAtServer)

export const updateUser = createAsyncThunk('user/updateUser', asyncUserFunctions.updateUserAtServer)

export const deleteUser = createAsyncThunk('user/deleteUser', asyncUserFunctions.deleteUserAtServer)

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLogged: false,
        isLoading: false,
    },
    reducers:{

        setUser: (state, { payload }) => {
            
            state.user = {...payload.user};
            state.isLogged = true;
        },
        logoutUser: (state,action) => {
            state.user = null;
            state.isLogged = false;
        },
    },
    extraReducers:{

        [getUser.pending]: (state, action)=>{
            console.log("getUser-pending");
            state.isLoading = true;
        },
        [getUser.fulfilled]: (state, action)=>{

            state.isLoading = false;
            state.isLogged = true;
            state.user = action.payload.data.user;
        },
        [getUser.rejected]: (state, action)=>{
            console.log("getUser-rejected", action.error.message);
            state.isLoading = false;
        },
    },
})

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

export const refreshLocalUser = () => (dispatch, state) => {
    try {
        dispatch(getUser({email: state().user.user.email}))
    } catch (error) {
        console.log(error)
    }
}