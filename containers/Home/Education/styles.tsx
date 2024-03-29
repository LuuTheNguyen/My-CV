import styled from 'styled-components'
import { MediaPrint, ResponsiveMax } from 'style/Theme'

export const StyledEducations = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    margin-bottom: 30px;

    .StyledContent1 {
        margin: 0;
    }

    ${ResponsiveMax('md')} {
        grid-template-columns: auto auto;
    }

    ${ResponsiveMax('sm')} {
        grid-template-columns: auto;
        grid-row-gap: 10px;
    }

    ${MediaPrint} {
        grid-template-columns: auto auto auto;
        grid-column-gap: 10px;
        margin-bottom: 10px;
    }
`
