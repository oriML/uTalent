import styled from 'styled-components'
import { styled as styledMui } from "@mui/system";

import { Typography } from '@mui/material';


//////// *** Mui Styled *** ////////


export const Mui_Typography = styledMui(Typography,{
    name: "StyeldTypography",
    slot: "wrapper"
})`
    font-style: italic;
    font-size: ${({fSize}) => fSize? fSize : '1.5rem'} !important;
    color: #524438;
    // border: 1px #B9A89B solid;
    border-radius: 10px;
    // background-color: #D2732D ;
    padding-right: 5px;
`

//////// *** Regular Styled *** ////////


export const DetailsWrapper = styled.div`
    & > *{
        font-size: 1.5rem;
    }
`