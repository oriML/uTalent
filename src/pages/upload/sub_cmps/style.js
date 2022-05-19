import styled from "styled-components";

export const UploadPage = styled.section`

    display: flex;
    flex-flow: column wrap;
    // border: 5px solid black;
    border-radius: 10px;
    background-color: ; //#FAF7FF;
    // justify-content: center;
    width: 50%;
    margin: auto;

    h1{
        color: #F08E00;
        text-align: center;
        font-size: 3rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
`

export const FormContainer = styled.form`

        
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        margin-top: 5%;
        width: 50%;
        margin: auto;
        // border-radius: 10px;

        > input {

            margin-top: 10px;
            width: 100%;
            height: 50px;
            // border-radius: 5px;
            // outline: 1px solid black;
            // border: 1px solid black;

            ::placeholder{
                font-size: 1rem;
            }
            
    }

    .upload-file-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 10px;
        border: grey 1px solid;
        background-color: #F08E00;
        color: white;
        padding: auto;
        height: 7vh;
        font-size: 1em;
        border-radius: 10px;
        width: 50%;

        :hover{
        background-color: #FF9952;
        }

        :after{
            content: '+';
            // text-indent: 5px;
            font-size: 1.3em;
            border: 1px solid white;
            padding: 1.25% 5%;
            text-align: center;
            border-radius: 50%;
            margin: 0 5px;
        }
    }

    input[type="file"]{
        display: none;
        height: 2%;
    }

    .error-span{
        color: red;
    }
`