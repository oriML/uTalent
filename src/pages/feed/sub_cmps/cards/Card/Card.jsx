import React from "react";

import * as S from "./style";

/**
 * Card.jsx is the component of the personal card in the feed
 * renders at Cards.jsx by filter of the cardnames.
 */

export const Card = ({card}) => { 

    
    return(

    <S.CardContainer className="card-wrapper" key={card.images[0].url}>
        
        <S.DetailsContainer className="card-details">

            <p className="card-title">
               {card?.title}
            </p>

            <p className="card-description">
                {card?.description}
            </p>

        <S.UserDetailsContainer>
        
                <img src={card?.profileImg} />

            <span> {card?.username} </span>

        </S.UserDetailsContainer>
        
        </S.DetailsContainer>


        <S.ImagesContainer>
            
            {
                card?.images?.map(
                    url => <img key={url} src={url}/>
            )
            }
            {
                card?.images?.map(
                    url => <img key={url} src={url}/>
            )
            }
            

        </S.ImagesContainer>
        
        {/* <div className="card-footer">
            {card.mobile}
        </div> */}

    </S.CardContainer> 
//card-wrapper
)
    }