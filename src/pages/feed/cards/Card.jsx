import React from "react";

/**
 * Card.jsx is the component of the personal card in the feed
 * renders at Cards.jsx by filter of the usernames.
 */

export const Card = (user) => (

    <div className="card-wrapper">

        <div className="card-header">
            <p className="user-img">
                <img src={user.img}/>
            </p>
            <p className="user-name">
                {user.username}
            </p>

            <p className="user-mobile">
            
            </p>

        </div>{/* card-header */}
        
        <div className="card-content">
            <p>{user.list.description}</p>
            <p>{user.list.details}</p>
        </div>{/* card-content */}
        
        <div className="card-footer">
            {user.mobile}
        </div>

    </div> 
//card-wrapper
)
