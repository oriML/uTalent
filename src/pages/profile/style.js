import styled from 'styled-components'
import { styled as styledMui } from "@mui/system";

import {
    Box,
    Button,
    Card,
    CardActions,
    CardMedia,

} from '@mui/material'


//////// *** Mui Styled *** ////////


export const Mui_Box = styledMui(Box, {
    name: 'StyledBox',
    slot: 'wrapper'
})`

`

export const Mui_Card = styledMui(Card, {
    name: 'StyledCard',
    slot: 'wrapper'
})`
    margin: 2%;
    width: 100vw;
    height: fit-content;
    max-width: 100vw;
    // max-height: 100vh;
`

export const Mui_CardActions = styledMui(CardActions, {
    name: 'StyledCardActions',
    slot: 'wrapper'
})`
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 1em;
`

export const Mui_CardMedia = styledMui(CardMedia, {
    name: 'StyledCardMedia',
    slot: 'wrapper'
})`
    display: flex;
    justify-content: space-between;
    align-items: right;
    margin: 1em;
`


//////// *** Regular Styled *** ////////


export const DetailsGrid = styled.div`
    width: 30vh;
    height: 10vh;
    background-color: blue;
`

export const DetailsRow = styled.div`
    
    border: solid 1px black;
    background-color: yellow;
`

