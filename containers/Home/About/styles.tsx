import styled from 'styled-components'
import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;

    @media (min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}) {
        width: 50%;
        padding: 10px;
    }

    & span {
        color: ${FontColor.default};
        width: 40%;
    }

    & span + span {
        color: ${FontColor.primary};
        width: 60%;
        text-align: right;
    }
`
