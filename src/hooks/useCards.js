import React from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from '../store/features/cards'
import { refreshLocalUser } from '../store/features/user/user';

function useCards() {

    const dispatch = useDispatch();

    const addCard = async (card) => {
        try{
            await dispatch(addCard(card)) //to server
            dispatch(refreshLocalUser())
            
        }catch(err){
            console.log(err)
        }
    }

  return { addCard }
}

export default useCards