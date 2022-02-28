//profile should get a props of user details
import img from '../../utils/user-data/imgs/icons/icons8-finn-48.png'
import { useSelector } from 'react-redux'
import CardsTable from '../../cmps/cards-table/CardsTable';

const userSelector = (state) => {
    return state.user
}

const Profile = () => {

    const user = useSelector(userSelector);

        return(

            <section className="profile">
                    
                    <section className="profile-details">

                        <div className="profile-photo">
                            {
                            user?.profileImg &&
                                <img
                                className="profile-user-image"
                                alt="user-image"
                                src={user.profileImg}
                                width={200}
                                height={200}
                                />

                            }
                        </div>

                        <div className="profile-info">
                            <p className="profile-info-name">{user?.firstName + " " + user?.lastName}</p>
                            <p className="profile-info-age">{user?.age}</p>
                            <p className="profile-info-details">{user?.describe}</p>
                        </div>

                    </section>

                    <section className="profile-board">
                            
                                <CardsTable user={user}/>
                    </section>

            </section>
        )    
}

export default Profile