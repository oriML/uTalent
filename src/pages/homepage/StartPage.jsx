
import CategoriesCards from "./sub_cmps/CategoriesCards"

const StartPage = () => {
    
    return(
    <section className="startPage">
        <h2>ברוך הבא!</h2>
        <p>בחר תחום</p> 
        <CategoriesCards />
    </section>
    )
}

export default StartPage