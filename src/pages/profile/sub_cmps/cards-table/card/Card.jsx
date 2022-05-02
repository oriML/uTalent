import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../../../../../store/features/cards/cards';
import * as S from './style'

function Card({card}) {
  
  const dispatch = useDispatch();

  const handleDelete = e => {
    if(window.confirm('are u sure u want to delete card?')){
      dispatch(deleteCard({userId: card.userId ,cardId: card._id}))
    }
  }

  return (
      <S.Card bg={card?.images[0]} >
      {console.log(card)}
        <span className='delete' onClick={handleDelete}>X</span>
        <div className='image'>
        {/* <img src={card?.images[0]} alt="user main img" /> */}
        
        </div>

        <div className='details'>
        {card?.description}
        </div>
        </S.Card>
  )
}

export default Card