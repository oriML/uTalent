
import { useState } from 'react';
import { useSelector } from 'react-redux'
// import { BiUpload } from 'react-icons/bi'
// import {
//     CardContent,
// } 
//     from '@mui/material';

// import CardsTable from '../../cmps/cards-table/CardsTable';

import ProfileImage from './sub_cmps/media_section/Image.profile';
import ProfileDescription from './sub_cmps/description/Description.profile';
import ProfileButtons from './sub_cmps/buttons/Buttons.profile';

import * as S from './style';
// import { StyledPage } from '../style/main';
import ProfileDetails from './sub_cmps/details/Details.profile';
import Table from './sub_cmps/cards-table/table/Table';
// import { FileUpload } from '../../cmps/file-upload/file-upload';
import Header from '../../cmps/header/Header';

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
            <section>
                <Header 
                type='profile'
                // title={`${user?.firstName} ${user?.lastName}`}
                title={'הפרופיל שלי'}
                content="פרופיל מתוחזק מושך יותר"
                />
                <S.ProfileDetailsSection>
                    <ProfileImage
                    img={user?.profileImg}
                    firstName={user?.firstName}
                    lastName={user?.lastName}
                    />
                    <ProfileDescription describe={user?.describe} />                        
                </S.ProfileDetailsSection>

                {/* <ProfileButtons user={user} handleExtraDetailsToggle={handleExtraDetailsToggle}/> */}
                {
                    !!toggleExtraDetailsDisplay && 
                    <ProfileDetails
                    mobile={user?.mobile}
                    email={user?.email}
                    />
                }                            
                {/* <Table cards={user?.cards}/>    */}
            </section>
        )    
}

export default Profile