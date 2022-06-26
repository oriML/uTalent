import styled from 'styled-components'

export const StyledFeed = styled.section`
    border:3px dotted red;
    display: flex;
    flex-flow: column nowrap

    > *{
        flex-shrink: 0;
        flex-grow: 1;
    }
`