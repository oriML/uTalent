import React from "react";
import { useSelector } from "react-redux";

import StartPage from "./StartPage";
import UserStartPage from "./UserStartPage";

const userSelector = (state) => {
    return state.user
}

const Homepage = () => {

    const { user } = useSelector(userSelector)

    return(
            <section className="home-page">
                {
                    !!user?
                    <UserStartPage user={user} />
                    :
                    <StartPage />
                }

            </section>
        )
}

export default Homepage