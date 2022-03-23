import styled from 'styled-components'

export const CardsTable = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    border: red solid 1px;
    height: fit-content;

`

export const NavWrapper = styled.div`
    border: 1px solid black;
    display: grid;
    grid-template-rows: 1fr ;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    img{
        width:50px;
        height: 50px;
    }

`