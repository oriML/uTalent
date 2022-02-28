import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
   
import axios from 'axios'

/**
 * 
 * this slice will be charge on user actions for server
 * the userAuth slice will be charge on user authentications actions
 * such as login logput register etc.
 */
 const url = process.env.REACT_APP_USERS_URL;

 const {
   REACT_APP_GET_USER_URL,
   REACT_APP_ADD_USER_URL,
   REACT_APP_UPDATE_USER_URL,
   REACT_APP_DELETE_USER_URL
 } = process.env;

export const getUser = createAsyncThunk(
    'user/getUser',
    async (user, { dispatch, getState}) => {
        const { userAuth } = getState();
        
        if(userAuth.isAuth)
        {
            const config = { 
                user: { ...user},
                headers:{ 'Authorization': 'Bearer ' + userAuth.userFirebaseToken }
                }
            return axios.post( url + REACT_APP_GET_USER_URL, config)
        }
        
        }//async function
    
    )// asyncThunk

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLogged: false,
        isLoading: false,
    },
    reducers: {
        // authUser: (state,action) => {
            
        // },
        addUser: (state, action) => {
            // axios.post('add-user-url').then(res=> res.status(200).json()).catch(err => res.status(500))
            // state.value.push(action.payload) --> how to work with the reducer
            state.details.email = action.payload.email
            state.details.password = action.payload.password
            console.log("addUser reducer", "state:", state, "action:", action)
        },
        updateUser: (state, action) => {
            // axios.post('set-user-url').then(res=> res.status(200).json()).catch(err => res.status(500))
            // state.value.push(action.payload) --> how to work with the reducer
            console.log("setUser reducer", "state:", state, "action:", action)
        },
        deleteUser: (state, action) => {
            // axios.post('remove-user-url').then(res=> res.status(200).json()).catch(err => res.status(500))
            // state.value.push(action.payload) --> how to work with the reducer
            console.log("deleteUser reducer", "state:", state, "action:", action)
        },
    },
    extraReducers:{

        [getUser.pending]: ()=>{
            console.log("getUser-pending");
            // state.isLoading = true;
            // const response = axios.get('get-user-url').then(res=> res.status(200).json()).catch(err => res.status(500))
            // state.isLoading = false
            // if( response.status === 200 ) state.isLogged = true
            // state.value = action.payload;
            // console.log("getUser reducer", "state:", state, "action:", action)
        },
        [getUser.fulfilled]: (state, action)=>{

            state.isLoading = false;
            state.isLogged = true;
            state.user = action.payload.data.user[0];
            console.log("getUser-fulfilled");

            // state.isLoading = false
        },
        [getUser.rejected]: (state, action)=>{
            console.log("getUser-rejected", action.error.message);
            // state.isLoading = false;
        },
    },
})

export const { addUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer;