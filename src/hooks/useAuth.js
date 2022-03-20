import { 
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
}
from 'firebase/auth';

import { 
    LOGIN,
    LOGOUT,
    CREATE_USER
}
from '../store/features/userAuth'

import { auth } from '../base'
import { getUser, signUpUser,deleteUser,logoutUser } from '../store/features/user';

export const useAuth = () => {

const login = ({email, password}) => async (dispatch, state) => {
        try{
      
          const { user } = await signInWithEmailAndPassword(auth, email, password);
        
          await dispatch(LOGIN({ user: user }));
          await dispatch(getUser({accessToken:user.accessToken,email: user.email}))
      
        }catch(err){
          console.log(err)
        }
      };

    
const logOut = () => async (dispatch, state) => {
        await signOut(auth);//server
        await dispatch(LOGOUT());// local
        await dispatch(logoutUser())
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