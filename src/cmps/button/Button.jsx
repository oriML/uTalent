import React from 'react'

import * as S from './style'

function Button({bgColor, text ,onClick}) {

console.log(bgColor)

  return (
    <S.Mui_Button size="small" bcolor={bgColor} onClick={onClick}>
        {text}
    </S.Mui_Button>

  )
}

export default Button