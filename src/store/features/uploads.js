import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
   
import axios from 'axios'
import { getUser } from "./user";

/**
 * 
 * this slice will be charge on user actions for server
 * the userAuth slice will be charge on user authentications actions
 * such as login logput register etc.
 */
 const url = process.env.REACT_APP_UPLOADS_URL;

 const {
    REACT_APP_UPLOADS_PROFILE,
    REACT_APP_UPLOADS_IMAGE,
    REACT_APP_UPLOADS_VIDEO,
 } = process.env;

    export const uploadProfileImage = createAsyncThunk(
    'uploads/uploadProfileImage',
    async ( file, { dispatch, getState}) => {

        const { userAuth,user } = getState();

        if(userAuth.isAuth)
        {   
        const config = { 
            onUploadProgress: progressEvent => {
                console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.target * 100) + '%')
                },
                headers:{ 
                    'Authorization': 'Bearer ' + userAuth.userFirebaseToken,
                    'Content-Type': 'application/json'
                },
                params: {id: user.user._id},
            }        
            return axios.post( 
                url + REACT_APP_UPLOADS_PROFILE,
                JSON.stringify({data: file}),
                config
            )
        }
        
        }//async function
    
    )// asyncThunk


export const uploadsSlice = createSlice({
    name: "uploads",
    initialState: {

        isLoading: false,
    },
    // reducers:{
    //     uploadProfileImage: (state,action) => {
    //         state.isLoading = false;
    //     },
    // },
    // extraReducers:{

    //     [uploadProfileImage.pending]: (state, action)=>{
    //         console.log("uploadProfileImage-pending");
    //         state.isLoading = true;
    //     },
    //     [uploadProfileImage.fulfilled]: (state, action)=>{

    //         console.log("uploadProfileImage-fulfilled");
    //         state.isLoading = false;
    //         state.isLogged = true;
    //         console.log(action)
    //         state.user = action.payload.data.user[0];
    //         localStorage.setItem('user',JSON.stringify(state))
    //     },
    //     [uploadProfileImage.rejected]: (state, action)=>{
    //         console.log("uploadProfileImage-rejected", action.error.message);
    //         state.isLoading = false;
    //         // state.isLoading = false;
    //     },
    // },
})

// export const { logoutUser } = uploadsSlice.actions;

export default uploadsSlice.reducer;

export const uploadProfileAndRefresh = (file) => async (dispatch, state) =>{
    try {
        await dispatch(uploadProfileImage(file))
        dispatch(getUser({email:state().user.user.email}))

    } catch (error) {
        console.log(error)
    }
}