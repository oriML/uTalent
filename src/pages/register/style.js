import styled from 'styled-components'
import {
    Paper
} from "@mui/material";

export const RegisterTitle = styled.h1`
    font-size: 2rem;
    margin: 5px;
    margin-bottom: 6.5%;

    & :nth-last-child(1){
        color: #F07300;
    }
`

export const RegisterPageContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RightComponent = styled(Paper, {
    name: 'StyledPaper',
    slot: 'paper'
}).attrs({
    elevation: 3
})`
    display: flex;
    flex-direction: column;
    text-align:center;
    box-shadow: 0px 0px 75px rgba(0, 0, 0, 0.06);
    border-radius: 25px;
    margin-bottom: 10%;
    padding: 1rem;
    padding-bottom: 10%;
    > * {
        width: 100%;
        height: 100%;
    }

`
export const LeftComponent = styled.div`
    > * {
        width: 100%;
        height: 100%;
    }
`


export const Pane = styled.div`
    flex: 1;
`


export const FormContainer = styled.div`
    // border: 1px solid black;
    // padding: 14px 14px 0 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

`

export const StyledInput = styled.input`
    background: #FFFFFF;
    border: 1px solid #C9C9C9;
    border-radius: 15px;
    height: 50px;
    width: 280px;
    max-width: 350px;
    padding-right: 10px;

    :: placeholder{
        font-family: Rubik;
        font-weight: 400;
        font-size: 1.3em;
        // text-indent: 10px;
    }
    : focus{
        outline: none;
    }

`

export const StyledUploadInput = styled.label`

    border: 1px solid black;
    outline: 1px solid gray;
    border-radius: 40px;
    font-size: .8em;
    width: 100px;
    height: 50px;

    input{
        display: none;
    }

`


export const StyledRegisterButton = styled.button`
    border: none;
    background: #F07300;
    border-radius: 15px;
    width: 125px;
    min-width: 100px;
    height: 50px;
    font-weight: 800;
    font-size: 20px;
    font-family: Rubik;
    text-align: center;
    cursor: pointer;

    : hover{
        color: #eeeee4;
        opacity: .8;
    }
`

export const StyledInputWrapper = styled.div`
    position: relative;
`

export const IconWithPosition = styled.span`
    position: absolute;
    top: 10px;
    left: 10px;
`