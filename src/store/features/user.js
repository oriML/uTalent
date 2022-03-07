import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
   
import axios from 'axios'

/**
 * 
 * this slice will be charge on user actions for server
 * the userAuth slice will be charge on user authentications actions
 * such as login logput register etc.
 */
 const url = process.env.REACT_APP_USERS_URL;

    export const getUser = createAsyncThunk(
    'user/getUser',
    async (user, { dispatch, getState}) => {
        const { userAuth } = getState();

        if(userAuth.isAuth)
        {   
            const config = { 
                params: {email: user.email},
                headers:{ 'Authorization': 'Bearer ' + userAuth.userFirebaseToken }
                }
            return axios.get( url, config)
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
                return axios.post( url, config)
            }
            
            }
        
        )

    export const updateUser = createAsyncThunk(
        'user/updateUser',
        async(params, {dispatch, getState}) => {
            const config = {
                params:{ id: params.uid}
            }
           await axios.put(url, config)
           .then(res => console.log('success/delete user', res) )
           .catch(err => console.log('failed/delete user',err))
        }
    )


    export const deleteUser = createAsyncThunk(
        'user/deleteUser',
        async({id, uid}, {dispatch, getState}) => {
            console.log(id,uid)
            localStorage.removeItem('user')

            const config = {
                params:{ id, uid}
            }
           await axios.delete(url, config)
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
        setUser: (state, {payload}) => {
            state.user = {...payload.user};
            state.isLogged = true;
        },
        logoutUser: (state,action) => {
            state.user = null;
            state.isLogged = false;
            localStorage.removeItem('user')
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
            state.user = action.payload.data.user;
            localStorage.setItem('user',JSON.stringify(state))
        },
        [getUser.rejected]: (state, action)=>{
            console.log("getUser-rejected", action.error.message);
            state.isLoading = false;
            // state.isLoading = false;
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