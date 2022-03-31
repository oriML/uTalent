import { 
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
}
from 'firebase/auth';

import { 
    setUserAuthData,
    LOGOUT,
    CREATE_USER
}
from '../store/features/userAuth'


import { getUser, signUpUser,deleteUser,logoutUser } from '../store/features/user/user';

import { auth } from '../base'
import useLocalStorage from './useLocalStorage';

export const useAuth = () => {

  const { saveUserInLS, removeUserfromLS } = useLocalStorage();

const login = ({email, password}) => async (dispatch, state) => {
        try{
          
          // check auth of user in firebase users db
          const { user } = await signInWithEmailAndPassword(auth, email, password);
        
          // set in state user auth details
          // fb tokens
          // fb id
          await dispatch(setUserAuthData({user}))

          // fetching user details from server and db
          await dispatch(getUser({email: user.email}))

          // save user in local storage
          dispatch(saveUserInLS())
      
        }catch(err){
          //dispatch(SET_ERROR)
          console.log(err)
        }
      };

    
const logOut = () => async (dispatch, state) => {
        await signOut(auth);// fb server
        await dispatch(LOGOUT());// auth details
        await dispatch(logoutUser()); // user details
        
        removeUserfromLS();
      };


const signUp = (userData) => async (dispatch, state) => {

  const { email, password } = userData;

        try{
          const res = await createUserWithEmailAndPassword( auth, email, password );

          if(res.user){
            await dispatch(signUpUser({stsTokenManager: res.user.stsTokenManager,userData}))
          }

        }catch(err){
          console.log(err)
        }

      };

const removeUser = (user) => async (dispatch, state) => {
  console.log(state().userAuth.userFirebaseId)
  try{

    const res = await dispatch(deleteUser({ id:state().user.user._id, uid: state().userAuth.userFirebaseId}))//try only from NodeJS

  }catch(err){
    console.log(err);
  }
}
    
return { login, logOut, signUp, removeUser }
}

/**
 * user wants to login. Event: login button pressed after details
 * -> go to auth service: Login function in firebase(useAuth hook(fb services)) to check auth
 * --> true:
 * -> go to user service: Login function in Node.js server(user reducer(async action)) to bring user details
 * --> details fetched (saved in user state):
 * -> go to localStorage reducer and save user
 */