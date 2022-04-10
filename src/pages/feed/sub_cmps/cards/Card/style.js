import styled from "styled-components";


export const CardContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    height: 40vh;    
    box-shadow: 0px 3px 5px grey;
    border-radius: 25px 25px 25px 22px;
    background-color: #F08E00;

    `

export const DetailsContainer = styled.div`
    
    background: #00CBBC;
    font-family: Rubik;
    color: #402E32;
    border-radius: 100px 25px 25px 100px;
    box-shadow: -15px 0px 17px -7px rgba(0,0,0,0.25);
    position: relative;
    left: .95px;
    font-size: 1.3rem;
    padding: 1rem;
    // border: 10px solid red;

    .card-title{

        color: #F3FBF4;
        font-style: italic;
        font-size: 2rem;
        opacity: .70;
      
    }

`

export const UserDetailsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .3em;

    width: fit-content;
    padding: .1em .5em ;
    // border: 2px solid black;
    border-radius: 50px;
    background-color: #DFE0DF;
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