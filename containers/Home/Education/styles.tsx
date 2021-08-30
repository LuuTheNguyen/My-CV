import styled from 'styled-components'
import { FontColor, GridBreakpoints, Responsive, FontSize } from 'style/Theme'

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

    @media (max-width: ${GridBreakpoints.md}) {
        grid-template-columns: auto auto;
    }

    @media (max-width: ${GridBreakpoints.sm}) {
        grid-template-columns: auto;
    }
`
