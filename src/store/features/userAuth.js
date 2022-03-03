import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../base";
import { createUserWithEmailAndPassword,
  onAuthStateChanged,
 signOut,
 signInWithEmailAndPassword,
 getIdToken
 } from 'firebase/auth'


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

    LOGIN: (state, { payload }) => {
      state.userFirebaseToken = payload.user.accessToken;
      state.userFirebaseId = payload.user.uid;
      state.isAuth = true;
    },

    CREATE_USER: (state, { payload }) => {
      state.userFirebaseToken = payload.user.accessToken;
      state.isAuth = true;
    },

    LOGOUT: (state, action) => {
      state.userFirebaseToken = null;
    },

    SET_USER_DATA: (state, { payload }) => {
      state.userData = { ...state.userData, ...payload.userData };
    },

  },
    extraReducers:{

    [authFromFirebase.pending]: (state, action) => {

    },
    [authFromFirebase.fulfilled]: (state, action) => {
      state.userFirebaseToken = action.payload.user.accessToken
      state.isAuth = true;
    },
    [authFromFirebase.rejected]: (state, action)=>{
      console.log(action.error.message);
    },

  },
});

export const {
  SET_INITIALIZED,
  LOGIN,
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

// The function below is called a selector and allows us to select a value from
// the state.
export const selectUser = (state) => {
  return state.userAuth.userData;
};

export default userAuthSlice.reducer;
