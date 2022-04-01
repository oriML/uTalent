import styled from "styled-components";
import { styled as styledMui } from "@mui/system";

import { 
        AppBar,
        Box,
        Toolbar,
        Button,
        

} from '@mui/material';

import { Link } from "react-router-dom";




export const Mui_Navbar = styledMui(AppBar, {
    name: 'StyledNavBar',
    slot: 'wrapper'
})`
    position: static;
    background-color: #F08E00;
    margin-bottom: 1rem;
`;

export const Mui_Toolbar = styledMui(Toolbar)`
    
    @media(min-width: 0px){
        padding: 0;
    }

`;

export const Mui_Box = styledMui(Box)`

`;

export const Mui_Link = styledMui(Link, {
    name: 'StyledLink',
    slot: 'link'
})`

    & :hover{
        color: #FFF7E9 ;
        background-color: #F08E00;
    }
`;

export const Mui_Button = styledMui(Button, {
    name: 'StyledButton',
    slot: 'button'
})`
    font-size: 1.1rem;
    text-transform: none;
    padding: 1rem 1rem;
    margin: auto .4rem;
    background-color: #F08E00;
    border-radius: 10%;


`;
