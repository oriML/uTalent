import styled from 'styled-components'
import { styled as styledMui } from "@mui/system";

import {
    Button,

} from '@mui/material'


//////// *** Mui Styled *** ////////


export const Mui_Button = styledMui(Button,{
    name: 'StyledButton',
    slot: 'button'
})`
    font-weight: bold;
    color: #402E32;
    background-color: ${({bcolor}) => bcolor? bcolor: '#F08E00 '};
    padding: .5rem;
`

//////// *** Regular Styled *** ////////


export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 1rem;
    
`