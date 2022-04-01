
import { useState } from 'react';
import { useSelector } from 'react-redux'

import {
    CardContent,
} 
    from '@mui/material';

import CardsTable from '../../cmps/cards-table/CardsTable';

import ProfileImage from './sub_cmps/media_section/Image.profile';
import ProfileDescription from './sub_cmps/description/Description.profile';
import ProfileButtons from './sub_cmps/buttons/Buttons.profile';

import * as S from './style';
import { StyledPage } from '../style/main';
import ProfileDetails from './sub_cmps/details/Details.profile';

const userSelector = (state) => {
    // const userFromLocal = JSON.parse(localStorage.getItem('user'))

    // if(userFromLocal)
    //     return userFromLocal
    return state.user?  state.user : {user:null}
}


const Profile = () => {
    
    const {user} = useSelector(userSelector);

    const [toggleExtraDetailsDisplay, setToggleExtraDetailsDisplay ] = useState(false)

    const handleExtraDetailsToggle = () => {
        setToggleExtraDetailsDisplay(p => !p)
    }
        return(

    <StyledPage className="profile">
                    <S.Mui_Card>

                        <S.Mui_CardMedia>
                            <ProfileImage img={user?.profileImg} firstName={user?.firstName} />
                        </S.Mui_CardMedia>
                        
                      <CardContent>
                        <ProfileDescription user={user} />                        
                      </CardContent>

                      <S.Mui_CardActions>

                        <ProfileButtons user={user} handleExtraDetailsToggle={handleExtraDetailsToggle}/>
                        
                      </S.Mui_CardActions>
                    {
                        !!toggleExtraDetailsDisplay && 
                            <ProfileDetails
                                mobile={user?.mobile}
                                email={user?.email}
                            />

                    }                            
                            <CardsTable cards={user?.cards}/>

                    </S.Mui_Card>
            </StyledPage>
        )    
}

export default Profile