import styled from 'styled-components'
import { styled as styledMui } from "@mui/system";


export const MediaCardWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 3px 5px grey;
`

export const Img = styled.img.attrs(props => ({
    src: props.img,
    alt: props.altImg
}))`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    // border: 1px solid black;
`