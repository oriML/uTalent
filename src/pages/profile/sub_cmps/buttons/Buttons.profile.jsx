import React from 'react'

import * as S from './style'


function ProfileButtons({user, handleExtraDetailsToggle}) {
  return (
    <S.ButtonsWrapper>
    
      <S.Mui_Button size="small" onClick={handleExtraDetailsToggle}>לחץ לפרטי התקשרות</S.Mui_Button>
      {/* <S.Mui_Button size="small" onCLick={""}>שינוי תמונת פרופיל</S.Mui_Button> */}
      <S.Mui_Button size="small">ערוך פרופיל</S.Mui_Button>
      <S.Mui_Button size="small" bcolor="#F46156">מחק פרופיל</S.Mui_Button>
    </S.ButtonsWrapper>
  )
}

export default ProfileButtons;