import styled from "styled-components";


export const ImageWrapper = styled.div`
    border: 1px solid black;
    height: 15em;
    width: 30%;
`

export const Image = styled.img.attrs(p => ({
    src: p.src
}))`

    border: 2px solid black;
    width: 10vw;
    height: 20vh;
    border-radius: 10px;
    opacity: .6;
    :hover{
        cursor: pointer;
        opacity:1;
    }

`

export const profileImage = styled.img.attrs(p => ({
    src: p.src
}))`

    // border: 2px solid black;
    border-radius: 50px;
    width: 30px;
    height: 30px;

`