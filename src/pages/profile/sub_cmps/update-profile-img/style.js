import styled from 'styled-components'

export const UploadProfileImgComponent = styled.div`
    
    .upload-form-media{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 5px;
        position: absolute;
        left: 15%;
        width: 8vw;
    }

    .up-btn{
        cursor: pointer;
        border: 1px solid grey;
        border-radius: 10px;
        background-color: cyan;

        :hover{
        background-color: indigo;

        }
    }

    input{
        display: none;
    }

`