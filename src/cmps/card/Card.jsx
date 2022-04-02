import React from 'react'

import * as S from './style'

function Card({card}) {
    return (
    <S.CardWrapper>

        <div className="card-title">{card?.title}</div>
        <div className="card-description">{card?.description}</div>
        <div className="card-tags">{card?.tags}</div>

        <div className="card-images" >
            {
                card?.images?.map((image, index) =>
                    <img
                        key={image}
                        src={image}
                        alt={"image " + index}
                    />
                )
            }
        </div>
        {/* <div className="card-video">
            <video src={card?.video} ></video>
            <p>video 1</p>
        </div> */}

    </S.CardWrapper>
    )
}

export default Card