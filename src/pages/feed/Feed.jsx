import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCards } from "../../store/features/cards";

import { Cards } from "./cards";
import FeedNavbar from "../../cmps/feed-navbar/FeedNavbar";
import { useSelector } from "react-redux";

const cardsSelector = state => state.cards;


const Feed = () => {
    
    const dispatch = useDispatch();

    const { cards } = useSelector(cardsSelector)

    const { _category } = useParams();

    return(
            <section className="feed">
                
                <div className="feed-navbar">
                    <FeedNavbar />
                </div>

                <div className="feed-cards">

                    <Cards category={_category} />

                </div>

            </section>
    )

}

export default Feed