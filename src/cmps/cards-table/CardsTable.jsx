import React from 'react'
import Card from '../card/Card'
import * as S from './style'

function CardsTable(user) {
  
  return (
    <S.CardsTable className='cards-table'>
      {
        user?.cards?.length > 0 && <S.NavWrapper >
        <div>נושא</div>
        <div>תיאור</div>
        <div>תגיות</div>
        <div>תמונות</div>
      </S.NavWrapper>
      }
    {
      user?.cards?.map(card => <Card key={card._id} card={card} />)
    }
    </S.CardsTable>
  )
}

export default CardsTable