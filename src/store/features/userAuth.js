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
    const { user } = getState();

    return signInWithEmailAndPassword(auth, email, password)

    //user.user.userFirebaseData = 
    // dispatch(LOGIN({ user: user }));
  }
)



export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    userFirebaseToken: null,
    isAuth: false,
  },
  reducers: {
    SET_INITIALIZED: (state, { payload }) => {
      state.initialized = payload;
    },
    LOGIN: (state, { payload }) => {
      state.userFirebaseToken = payload.user.accessToken;
      state.isAuth = true;
    },
    CREATE_USER: (state, { payload }) => {
      state.userFirebaseData = payload.user;
    },
    LOGOUT: (state, action) => {
      state.userFirebaseData = null;
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

// The function(s) below is called a thunk and allows us to perform async logic.

const url = process.env.REACT_APP_USERS_URL;

const {
  REACT_APP_GET_USER_URL,
  REACT_APP_ADD_USER_URL,
  REACT_APP_UPDATE_USER_URL,
  REACT_APP_DELETE_USER_URL
} = process.env;

// export const setAuthListener = () => (dispatch, state) => {
//   onAuthStateChanged((auth,user) => {
//     if (user && !state().userAuth.initialized) {
//       dispatch(LOGIN({ user: auth.currentUser.toJSON() }));
//       dispatch(getUser());
//     }

//     !state().userAuth.initialized && dispatch(SET_INITIALIZED(true));
//   });
// };

// export const login = (user) => async (dispatch, state) => {
//   try{

//     const result = await signInWithEmailAndPassword(auth, user);
//     dispatch(LOGIN({ user: result.user }));

//   }catch(err){
//     console.log(err)
//   }

//   return state().userAuth.userData;
// };

/**
 *
 */
export const logOut = () => async (dispatch, state) => {
  await signOut(auth);//server
  dispatch(LOGOUT());// local
};

/**
 *
 */
// export const getUser = (user) => async (dispatch, state) => {
//   // mdb data fetch of user data
  
//   try{
//     const config = { 
//       user: {
//         ...user
//       },
//       headers:{
//          'Authorization': 'Bearer ' + user.stsTokenManager.accessToken 
//         }
//       }
//     const result = await axios.post(
//       url + REACT_APP_GET_USER_URL,
//       config
//       )
//       if(result.data.error)
//         {
//           if(result.data.error.code === 'auth/id-token-expired')
//           dispatch(refreshAccessToken())
          
//         } 
//         else user.mdb_details = result.data.user[0]

//      console.log(user)// set user *full details* to redux
//      // also from db
//     } catch(err){
//       console.log(err)
//     }

// };

// const refreshAccessToken =  ()=> async (dispatch, state) => {
//   console.log("in refresh token");
//   try{

//     await auth.currentUser.getIdToken( true )
//     .then(res => {
//       dispatch(getUser(auth.currentUser))
//     }
//     )
//     .catch( err => console.log(err))
    
//   }catch(err){
//     console.log(err)
//   }
// }
  
/**
 *
 */
export const createUser = ({ email, password }) => async (dispatch, state) => {
  // create auth user
  console.log(email, password)
  const res = await createUserWithEmailAndPassword( auth, email, password );

    //mdb add user to collection
  console.log(res)

  // add user to users collection
  // const uid = auth().currentUser.uid;
  // await firebase.firestore().collection("users").doc(uid).set({
  //   id: uid,
  //   email: resp.user.email,
  // });

  // update store
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
