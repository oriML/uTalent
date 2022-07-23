import styled from 'styled-components'
// import { styled as styledMui } from "@mui/system";

import { COLORS } from '../../../../utils/constants'

export const MediaCardWrapper = styled.div`

    border: 1px solid blue;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    gap: 10px;
    align-items: center;
    border-radius: 10px;
    // text-indent: 10%;
    // background: rgba(150,150,150,.05);
    // background: ${COLORS.PRIMARY};
    > span{
        text-align: start;
        margin-top: 4px;
        padding: 0;
        text-align: start;
        font-size: 1.8rem;
    }
`

export const Img = styled.img`
    // border-radius: 50%;
    width: 250px;
    height: 250px;
    // border: 1px solid rgba(0,0,0,0.2);
`

export const Wrapper = styled.div`
    background: rgba(150,150,150,.05);
    border-radius: 10px;

`