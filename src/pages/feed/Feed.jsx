import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCards } from "../../store/features/cards/cards";

import { Cards } from "./sub_cmps/cards";
import FeedNavbar from "../../cmps/feed-navbar/FeedNavbar";
import { useSelector } from "react-redux";
import { StyledFeed } from "./style";

const cardsSelector = state => {

    const cards = JSON.parse(localStorage.getItem('cards'));
    
    return cards? cards : state.cards;

    };


const Feed = () => {
    
    const { cards } = useSelector(cardsSelector)

    const applyTags = () => {

        const tags = cards.map( card => card.tags[0]+ " " )

        return tags.reduce( (prev, current) =>  [ ...prev, ...current.split(' ')] , [])
    }

    const { _category } = useParams();

    return(
            <section className="feed">
                    <FeedNavbar tags={ applyTags().filter((value, index, self) => self.indexOf(value) === index ) } />

                {/* <div className="feed-navbar"> */}
                {/* </div> */}

                {/* <div className="feed-cards"> */}
                <StyledFeed className="cards">
                    <Cards cards={cards} category={_category} />
                </StyledFeed>
                {/* </div> */}

            </section>
    )

}

export default Feed