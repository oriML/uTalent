import React from "react"
import { NewCard } from "../../styled-card/new-card"

import { Card } from "../Card/Card"
import { CardsContainer } from "./style"

/**
 * TEMPORARY FILTER!!!
 * THE FILTER MUST COME FROM SERVER!!!
 * 
 */
export const Cards = ({cards, category}) => (
    <CardsContainer className="cards-feed">
        {/* {
            cards?.map((card) => <Card key={card?._id} card={card} /> )
        } */}

        {
            cards?.map( card => <NewCard key={card?._id} card={card} />)
        }
    </CardsContainer>

)


