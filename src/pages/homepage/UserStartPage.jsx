
import CategoriesCards from "./sub_cmps/CategoriesCards"

const UserStartPage = ({user}) => {
    return(
    <section className="userStartPage">
        <h2>ברוך הבא {user.firstName}!</h2>
        <p>בחר תחום</p> 
        <CategoriesCards />
    </section>
    )
}

export default UserStartPage