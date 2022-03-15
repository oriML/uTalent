import { IconButton } from '@mui/material'
import React from 'react'
import * as S from './style'

function ProfileImage({user}) {;

  return (
    <S.MediaCardWrapper>
      
      <S.Img
        img={user.profileImg} 
        altImg={user.firstName + " profile"}
      />

    <div>
        <IconButton>
            Edit
        </IconButton>
            <IconButton>
            Add
        </IconButton>
    </div>

    </S.MediaCardWrapper>
  )
}

export default ProfileImage;