import { styled as styledMui } from "@mui/system";
import styled from 'styled-components'

import { 
    Paper,
    Box,
} from "@mui/material";

export const StyledPage = styled(Paper,{
    name: 'StyledPaper',
    slot: 'paper'
}).attrs({
    elevation: 3
})`
    display: flex;
    // margin-top: 1rem;
    // flex-flow: column nowrap;
    // width: 100%;
    height: 100%;
    position: relative;
    // max-height: 100vh;
    min-height: 100vh;
    padding: 1rem;
    > * {
        width: 100%;
        box-sizing: content-box;
    }
`