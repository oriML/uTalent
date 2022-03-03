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

        console.log(user);

        if(userAuth.isAuth)
        {   
        console.log("userAuth.isAuth",userAuth.isAuth);
        const config = { 
                user: user,
                headers:{ 'Authorization': 'Bearer ' + userAuth.userFirebaseToken }
                }
            return axios.post( url + REACT_APP_GET_USER_URL, config)
        }
        
        }//async function
    
    )// asyncThunk

    export const signUpUser = createAsyncThunk(
        'user/signUpUser',
        async ({stsTokenManager,userData}, { dispatch, getState}) => {
            {
                const config = { 
                    user: {
                        
                            ...userData,
                            joinDate: Date.now(),
                            tokensHandler: {...stsTokenManager}
                    },
                    headers:{ 'Authorization': 'Bearer ' + stsTokenManager.accessToken }
                    }
                return axios.post( url + REACT_APP_ADD_USER_URL, config)
            }
            
            }
        
        )

    export const updateUser = createAsyncThunk(
        'user/updateUser',
        async(params, {dispatch, getState}) => {
            const config = {
                params:{ id: params.uid}
            }
           await axios.put(url + REACT_APP_DELETE_USER_URL, config)
           .then(res => console.log('success/delete user', res) )
           .catch(err => console.log('failed/delete user',err))
        }
    )


    export const deleteUser = createAsyncThunk(
        'user/deleteUser',
        async({id, uid}, {dispatch, getState}) => {
            console.log(id,uid)
            const config = {
                params:{ id, uid}
            }
           await axios.delete(url + REACT_APP_DELETE_USER_URL, config)
           .then(res => {
               localStorage.removeItem('user');
              console.log('success/delete user', res)
            } )
           .catch(err => console.log('failed/delete user',err))
        }
    )



export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isLogged: false,
        isLoading: false,
    },
    reducers:{
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

            console.log("getUser-fulfilled");
            state.isLoading = false;
            state.isLogged = true;
            console.log(action)
            state.user = action.payload.data.user[0];
            localStorage.setItem('user',JSON.stringify(state))
        },
        [getUser.rejected]: (state, action)=>{
            console.log("getUser-rejected", action.error.message);
            state.isLoading = false;
            // state.isLoading = false;
        },
    },
})

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;