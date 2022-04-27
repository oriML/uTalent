import React from 'react'
import * as S from './style'

function Card({card}) {
  return (
      <S.Card bg={card?.images[0]} >
      {console.log(card)}
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