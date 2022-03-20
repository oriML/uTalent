import styled from 'styled-components'
import { styled as styledMui } from "@mui/system";


export const MediaCardWrapper = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    // border-bottom: 1px solid black;
    // box-shadow: 0px 3px 5px grey;
    background: #FF9952;
`

export const Img = styled.img.attrs(props => ({
    src: props.img,
    alt: props.altImg
}))`
    border-radius: 50%;
    width: 200px;
    height: 200px;
    // border: 1px solid black;
`