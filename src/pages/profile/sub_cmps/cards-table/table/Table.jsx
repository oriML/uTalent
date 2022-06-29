import React from 'react'
import { Wrapper } from '../../media_section/style'
import Card from '../card/Card'

import * as S from './style'

function Table({cards}) {
  return (
    // <Wrapper>
    <S.CardsTable>
        { cards?.map( card => <Card card={card} /> ) }
    </S.CardsTable>
    // </Wrapper>
  )
}

export default Table