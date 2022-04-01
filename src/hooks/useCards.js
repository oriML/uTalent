import React from 'react'
import { useDispatch } from 'react-redux'
import { addCard, getFilteredCards } from '../store/features/cards/cards'
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

    const callFilteredCards = async () => {
        try{
            await dispatch(getFilteredCards());

        }catch(err){
            console.log(err);
        }
    }

  return { addCard, callFilteredCards }
}

export default useCards