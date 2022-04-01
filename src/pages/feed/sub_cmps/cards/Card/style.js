import styled from "styled-components";


export const CardContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    height: 40vh;
    border:1px solid black;
    border-radius: 25px;
    border-bottom: 1px solid black;
    box-shadow: 0px 3px 5px grey;

    `

export const DetailsContainer = styled.div`
    border-radius: 100px;
    box-shadow: -15px 0px 17px -7px rgba(0,0,0,0.25);

`

export const ImagesContainer = styled.div`

    // border: 2px solid red;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 50vw;
    > img{
        width: 5rem;
        height: 5rem;
    }
        
`