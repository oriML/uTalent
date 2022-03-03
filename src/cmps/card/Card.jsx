import React from 'react'

function Card(card) {
    return (
    <>

        <div className="card-title">{card?.title}</div>
        <div className="card-description">{card?.description}</div>
        <div className="card-tags">{card?.tags}</div>

        <div className="card-photos">
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
        <div className="card-video">
            {/* <video src={card?.video} ></video> */}
            <p>video 1</p>
        </div>

    </>
    )
}

export default Card