import styled from 'styled-components'
import { styled as styledMui } from "@mui/system";

import { Typography } from '@mui/material';


//////// *** Mui Styled *** ////////


export const Mui_Typography = styledMui(Typography,{
        name: "StyeldTypography",
        slot: "wrapper",
})`
    font-style: italic;
    font-size: ${({fsize}) => fsize? fsize : '1.5rem'} ;
    // color: #524438;
    border: 1px #B9A89B dotted;
    border-radius: 10px;
    // background-color: #D2732D ;
    margin-right: 15px;
    margin-top: 50px;
`

//////// *** Regular Styled *** ////////


// export const DetailsWrapper = styled.div`
//     & > *{
//         // font-size: 1.5rem;
//     }
// `