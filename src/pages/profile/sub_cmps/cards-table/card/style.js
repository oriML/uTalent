import styled from "styled-components";

export const Card = styled.div`
    margin: 2rem auto;
    border: 2px solid #B9A89B;
    border-radius: 25px 25px 10px 10px;
    // padding: 1rem;
    display:flex;
    align-items: center;
    justify-content: end;
    flex-flow: wrap column;
    min-width: 200px;
    max-width: 200px;
    min-height: 250px;
    max-height: 450px;
    background-color: #DFE0DF;
    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: 100% 80%;
    cursor: pointer;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    .image{
        
        margin-bottom: 1rem;
        visibility: hidden;
        >img{

            width: 150px;
            height: 150px;
            border-radius: 5px;
            
        }
    }

    .details{
        width: 100%;
        height: 25%;
        border-top: 2px solid #B9A89B;
        color: #AE8A68;
        text-align: center;
        background-color: #FFF7E9;
        border-radius: 0 0 10px 10px;
        font-style: italic;
    }

    .actions{
        position: absolute;
        

        .delete{
            color: black;
            font-size: 2rem;
            // z-index: 10;
            // position: relative;
            // top: -50%;
            // right: -40%;
            :hover{
                color: red;
            }
        }

        .edit{
            color: black;
            font-size: 2rem;
            // z-index: 10;
            // position: relative;
            // top: -50%;
            // right: -40%;
            :hover{
                color: orange;
            }
        }    
}
`