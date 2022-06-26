import React from 'react'
import Card from '../card/Card'

import * as S from './style'

function Table({cards}) {
  return (
    <S.CardsTable>
        { cards?.map( card => <Card card={card} /> ) }
    </S.CardsTable>
  )
}

export default Table