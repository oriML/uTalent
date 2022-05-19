import styled from "styled-components";
import { styled as styledMui } from "@mui/system";
import {
        AppBar,
        Button,
 } from '@mui/material'

export const SearchBarsWrapper = styled.div`

    display: grid;
    grid-template-rows: .5fr .5fr;
    grid-template-columns: 1.2fr .2fr;
    grid-template-areas: "searchBar searchButton";

    // justify-content: center;
    align-items: center;

    background-color: #FDEDE9;
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 2rem;

`

export const Mui_CheckBoxNavBar = 
styledMui(AppBar,{
    name: 'StyledNavBar',
    slot: 'wrapper'
})
`
    grid-area: checkboxs;
    position: static;
    background-color: ${props => props.bgColor };
    opacity: 80%;
    margin-bottom: 1rem;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    width: 100%;
    min-width: 150px;
    height: 20vh;
    min-height: 100px;
    border-radius: .8rem;
    padding-right: 1rem;
    
    > label{
        direction: ltr;
    }

`
export const SearchNavBar = styled.div`
    position: static;
    background-color: ${props => props.bgColor };
    // opacity: 80%;
    margin: .5rem auto;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 65%;
    height: 25%;
    min-height: 35px;
    border-radius: 50px;
    grid-area: searchBar;

    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

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
        // padding: 0 1rem;
        width: 95%;
        color: white;
        font-size: 1rem;
        text-indent: 5px;
        margin-bottom: 0;

    }

`

export const Mui_Button = styledMui(Button)`
    width: 45px;
    height: 45px;
    color: #402E32;
    background-color: #62BAAC;
    // border-radius: 10% 10% 50% 20%;
    border-radius: 1.5rem;
    color: #DFE0DF;
    // outline: 1px solid #006E5F;
    // outline-style: outset;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

    &:hover{
        background-color: #62CAAA;
        color: white;
    }
    :after{
        content: ">>";
        font-size: 2rem;
    }
    grid-area: searchButton;
`