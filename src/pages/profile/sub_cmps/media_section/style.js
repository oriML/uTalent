import styled from 'styled-components'
// import { styled as styledMui } from "@mui/system";

import { COLORS } from '../../../../utils/constants'

export const MediaCardWrapper = styled.section`
    display: flex;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    background: #FF9952;
    // background: ${COLORS.PRIMARY};
`

export const Img = styled.img.attrs(props => ({
    src: props.src,
    key: props.key,
    alt: props.alt
}))`
    border-radius: 50%;
    width: 200px;
    height: 200px;
    // border: 1px solid black;
`

export const bgImg = styled.div`
    background-image: url('${props => props.img}');
`