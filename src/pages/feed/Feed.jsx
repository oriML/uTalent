import { useParams } from "react-router-dom";
import {Cards} from "./cards";
import FeedNavbar from "../../cmps/feed-navbar/FeedNavbar";

const Feed = () => {
    
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