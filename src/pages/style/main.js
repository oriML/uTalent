import { styled as styledMui } from "@mui/system";

import { 
    Paper,
    Box,
} from "@mui/material";

export const StyledPage = styledMui(Paper,{
    name: 'StyledPaper',
    slot: 'paper'
})`
    display: flex;
    margin: 1rem;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    min-height: fit-content;
`