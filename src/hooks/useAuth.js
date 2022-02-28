import { 
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';

import { 
    LOGIN,
    LOGOUT
} from '../store/features/userAuth'
import { auth } from '../base'
import { getUser } from '../store/features/user';

export const useAuth = () => {

const login = ({email, password}) => async (dispatch, state) => {
        try{
      
          const { user } = await signInWithEmailAndPassword(auth, email, password);
          dispatch(LOGIN({ user: user }));
          dispatch(getUser(user.accessToken))
      
        }catch(err){
          console.log(err)
        }
      };
    
const logOut = () => async (dispatch, state) => {
        await signOut(auth);//server
        dispatch(LOGOUT());// local
      };
    
return { login, logOut }
}