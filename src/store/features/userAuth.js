import axios from 'axios'
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import  app,{ auth } from "../../base";
import { createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  getIdToken,
  
 } from 'firebase/auth'

import firebase from '../../base'
 
/**
 * 
 * this slice will be charge on user actions for server
 * such as login logput register etc.
 * the user slice will be charge on user authentications actions
 */

export const authFromFirebase = createAsyncThunk(
  'authFromFirebase',
   async ({email, password}, {dispatch, getState}) => {

    return signInWithEmailAndPassword(auth, email, password)

  }
)


export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    userFirebaseToken: null,
    userFirebaseId: null,
    isAuth: false,
  },
  reducers: {

    setUserAuthData: (state, { payload: {user} }) => {
      state.userFirebaseToken = user.accessToken;
      state.userFirebaseId = user.uid;
      state.isAuth = true;
    },

    CREATE_USER: (state, { payload: {user} }) => {
      state.userFirebaseToken = user.accessToken;
      state.isAuth = true;
    },

    LOGOUT: (state, action) => {
      state.userFirebaseToken = null;
      state.userFirebaseId = null;
      state.isAuth = false;
    },
    
    SET_USER_DATA: (state, {payload: {user}}) => {
      console.log(user)
      state.userFirebaseToken = user.accessToken;
      state.userFirebaseId = user.uid;
      state.isAuth = true;
    },

  },
    extraReducers:{

    [authFromFirebase.pending]: (state, action) => {

    },
    [authFromFirebase.fulfilled]: (state, {payload: {user}}) => {
      state.userFirebaseToken = user.accessToken
      state.isAuth = true;
    },
    [authFromFirebase.rejected]: (state, action)=>{
      console.log(action.error.message);
    },

  },
});

export const {
  setUserAuthData,
  LOGOUT,
  SET_USER_DATA,
  CREATE_USER,
} = userAuthSlice.actions;

  
/**
 *
 */
export const createUser = ({ email, password }) => async (dispatch, state) => {
  // create auth user
  console.log(email, password)
  const res = await createUserWithEmailAndPassword( auth, email, password );

  dispatch(CREATE_USER({ user: res }));
  const userData = {
    ...res.user,
    id: res.user.uid,
    email: res.user.email,
    //tokens?
  };
  dispatch(SET_USER_DATA({ userData }));
};

export const setUserAuth = () => async (dispatch, state) => {
  onAuthStateChanged(auth, user => {

    if(user) {
    dispatch(SET_USER_DATA({user}))
   }
   
  })

}

// The function below is called a selector and allows us to select a value from
// the state.
export const selectUser = (state) => {
  return state.userAuth.userData;
};

export default userAuthSlice.reducer;
