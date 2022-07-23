import React from 'react'
import * as S from '../media_section/style'

// import * as S from'./style'

function ProfileDescription({describe}) {
  return (
    <div style={{
      // backgroundColor: 'rgba(150,150,150,.05)'
    }}>
      
      {/* <S.Mui_Typography variant="h3" fsize="2rem" color="text.primary" gutterBottom>
        {user?.firstName + " " + user?.lastName} 
      </S.Mui_Typography> */}

      {/* <S.Mui_Typography variant="body2" fsize="1rem" gutterBottom > */}
        <S.Wrapper>
          <p style={{
            border: '1px solid transparent',
            padding: '.5rem .8rem'            
            }}>
            {describe}
          </p>
        </S.Wrapper>
      {/* </S.Mui_Typography> */}

      {/* <S.Mui_Typography variant="body2" fSize="1rem" >
          <div>
            <span>מס' כרטיסים: </span>
            {user?.cards?.length}
          </div>
      </S.Mui_Typography> */}

    </div>
  )
}

export default ProfileDescription