import styled from 'styled-components'
import { MediaPrint, ResponsiveBetween } from 'style/Theme'

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;

    ${ResponsiveBetween('sm', 'lg')} {
        padding: 10px;
    }

    & div {
        display: flex;
        justify-content: space-between;
    }

    .StyledContent1 {
        display: inline;
        margin: 0;
    }

    .StyledContent5 {
        display: inline;
        margin: 0;
    }

    ${MediaPrint} {
        flex-direction: row;
        justify-content: space-between;

        .StyledContent1 {
            margin: 0 10px 0 0;
        }
    }
`
