import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUser, setUser } from '../store/features/user/user'
import useLocalStorage from './useLocalStorage'

const getUserFromLocal = (state) =>{

    return state.user
}

function useUser() {
    
    const localUser = useSelector(getUserFromLocal)

    const dispatch = useDispatch();
    const { saveUserInLS } = useLocalStorage();
  
    const updateUserInClient = async () => {

        dispatch(getUser(localUser.user));
        dispatch(setUser(localUser));
        saveUserInLS();

    }
    

    return {
        updateUserInClient,
    }
}

export default useUser