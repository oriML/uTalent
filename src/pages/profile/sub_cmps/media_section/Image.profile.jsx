import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import useUser from '../../../../hooks/useUser'

import * as S from './style'

function ProfileImage({user}) {

  const dispatch = useDispatch();
  const { updateUserInClient } = useUser();

  return (
    <S.MediaCardWrapper>

            <S.Img
              key={user?.profileImg + new Date()}
              src={user?.profileImg}
              alt={user?.firstName + " profile"}
            />
     
    </S.MediaCardWrapper>
  )
}

export default ProfileImage;