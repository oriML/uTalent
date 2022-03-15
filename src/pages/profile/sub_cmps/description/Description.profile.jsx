import React from 'react'
import { Card } from '@mui/material'

import * as S from'./style'

function ProfileDescription({user}) {
  return (
    <S.DetailsWrapper>

      <S.Mui_Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
      {user?.firstName + " " + user?.lastName}
      </S.Mui_Typography>

      <S.Mui_Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user?.age}
      </S.Mui_Typography>

      <S.Mui_Typography variant="body2">
          {user?.describe}
      </S.Mui_Typography>

    </S.DetailsWrapper>
  )
}

export default ProfileDescription