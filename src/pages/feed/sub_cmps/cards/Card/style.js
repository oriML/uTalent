import styled from "styled-components";


export const CardContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    height: 40vh;

    // border:1px solid grey;
    
    box-shadow: 0px 3px 5px grey;
    border-radius: 25px 25px 25px 22px;
    // border-bottom: 1px solid grey;
    background-color: #F08E00;

    // outline: 5px solid #9CB0A4;
    // outline-offset: -.5px;

    `

export const DetailsContainer = styled.div`
    
    background: #00CBBC;
    font-family: Rubik;
    color: #402E32;
    border-radius: 100px 25px 25px 100px;
    box-shadow: -15px 0px 17px -7px rgba(0,0,0,0.25);
    position: relative;
    left: .95px;


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