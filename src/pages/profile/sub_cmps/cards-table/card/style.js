import styled from "styled-components";

export const Card = styled.div`
    border-radius: 25px 25px 10px 10px;
    min-width: 200px;
    max-width: 200px;
    min-height: 250px;
    max-height: 250px;
    background-color: #DFE0DF;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

`

export const CardTitle = styled.h4`
    text-align: center;
    background: rgba(0,0,0,0.5);
    color: white;
    padding: 24px;
    margin-top: 50%;
    transition: font-size .3s;
    :hover{
        font-size: 2rem;
    }

`