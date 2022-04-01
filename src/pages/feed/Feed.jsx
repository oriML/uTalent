import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCards } from "../../store/features/cards/cards";

import { Cards } from "./sub_cmps/cards";
import FeedNavbar from "../../cmps/feed-navbar/FeedNavbar";
import { useSelector } from "react-redux";

const cardsSelector = state => {

    const cards = JSON.parse(localStorage.getItem('cards'));
    
    return cards? cards : state.cards;

    };


const Feed = () => {
    
    const { cards } = useSelector(cardsSelector)

    const { _category } = useParams();

    return(
            <section className="feed">
                
                <div className="feed-navbar">
                    <FeedNavbar />
                </div>

                <div className="feed-cards">
                    <Cards cards={cards} category={_category} />
                </div>

            </section>
    )

}

export default Feed