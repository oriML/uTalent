import React from "react"
import { Card } from "."
import { users } from "../../../cmps/media/users"

/**
 * TEMPORARY FILTER!!!
 * THE FILTER MUST COME FROM SERVER!!!
 * 
 */
export const Cards = ({category}) => (
    <section className="cards-feed">
        {
            category>0?
    users.reduce((prev, { username, img, mobile, list, _id }) => (
            category === list.tags[0]
            ?
            [ ...prev,
                
                <Card
                    key={_id}
                    username={username}
                    img={img}
                    mobile={mobile}
                    list={list}
                />
            ]
                :
                [...prev]
        ), [])
        : 
        users.map(({ username, img, mobile, list, _id })=>
                    <Card
                    key={_id}
                    username={username}
                    img={img}
                    mobile={mobile}
                    list={list}
                    />
        )
}

    </section>

)


