import styled from "styled-components";
import { styled as styledMui } from "@mui/system";


import {
        AppBar,
        Box,
        Toolbar,
        Button,
 } from '@mui/material'

 import { Link } from "react-router-dom";

export const SearchBarsWrapper = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;


`

export const Mui_CheckBoxNavBar = 
styledMui(AppBar,{
    name: 'StyledNavBar',
    slot: 'wrapper'
})
`
    position: static;
    background-color: ${props => props.bgColor };
    opacity: 80%;
    margin-bottom: 1rem;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    width: 100%;
    height: 6vh;
    border-radius: 50px;
    padding-left: 15px;
    
    > label{
        direction: ltr;
    }

`
export const Mui_SearchNavBar = styledMui(AppBar,{
    name: 'StyledNavBar',
    slot: 'wrapper'
})`
    position: static;
    background-color: ${props => props.bgColor };
    opacity: 80%;
    margin-bottom: 1rem;
    display:flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 6vh;
    border-radius: 50px;
   

    > input[type="search"]{
        
        ::placeholder{
            color: white;
            font-size: 1rem;
            text-indent: 5px;
            opacity: .9;
        }

        :focus{
            outline: none;
        }

        border-color: transparent;
        // border: 2px solid red;
        background-color: transparent;
        padding: 0 1.5rem;
        width: 50vw;
        color: white;
        font-size: 1rem;
        text-indent: 5px;
        margin-bottom: 0;

    }

`