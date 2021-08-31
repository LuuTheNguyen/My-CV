import styled from 'styled-components'
import {
    FontColor,
    GridBreakpoints,
    ResponsiveMax,
    FontSize,
} from 'style/Theme'

export const StyledEducationItem = styled.span`
    font-size: ${FontSize.md};
    color: ${FontColor.default};
`

export const StyledEducations = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    margin-bottom: 30px;

    ${ResponsiveMax('md')} {
        grid-template-columns: auto auto;
    }

    ${ResponsiveMax('sm')} {
        grid-template-columns: auto;
    }
`
