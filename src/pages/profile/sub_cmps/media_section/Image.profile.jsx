import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import useUser from '../../../../hooks/useUser'
import UpdateProfileImg from '../update-profile-img/UpdateProfileImg'
import * as S from './style'

function ProfileImage({img, firstName}) {

  const dispatch = useDispatch();
  const { updateUserInClient } = useUser();

  return (
    <S.MediaCardWrapper>
            <S.Img
              key={img + new Date()}
              src={img}
              alt={firstName + " profile"}
            />
      <UpdateProfileImg />
    </S.MediaCardWrapper>
  )
}

export default ProfileImage;