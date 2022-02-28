// import categories list from data
// sets the categories cards 
import { Link } from "react-router-dom"
import tags from "../../../utils/tags"

const CategoriesCards = () => {

        return(
            <div className="categories_cards">
                { 
                    tags.map(({category, tags})=>{
                        return(

                        <Link to={`/feed/${category}`} key={category}>

                             <div className="category_card">

                                 <h3>{category}</h3>

                                 <p className="tags_description">
                                     { tags.map( tag => <span key={tag}>{tag}</span>) }
                                 </p>
                                 
                             </div>

                        </Link>
                        )
                    })
                }
            </div>   
        )
}

export default CategoriesCards