import styled from 'styled-components'

export const StyledContact = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;

    span {
        font-weight: 600;
    }
    span + span {
        margin-left: 10px;
        font-weight: normal;
    }
`
