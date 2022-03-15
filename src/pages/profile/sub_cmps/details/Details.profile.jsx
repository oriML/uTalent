import React from 'react'

import * as S from './style'

function ProfileDetails({ mobile, email }) {
  return (
    <div>
      
      <S.Paragraph>
          {mobile}
      </S.Paragraph>

      <S.Paragraph>
          {email}
      </S.Paragraph>

    </div>
  )
}

export default ProfileDetails