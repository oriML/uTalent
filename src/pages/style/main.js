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
    margin-bottom: 10%;
    padding: 1rem;
    padding-bottom: 10%;
    > * {
        width: 100%;
        // box-sizing: content-box;
    }
`