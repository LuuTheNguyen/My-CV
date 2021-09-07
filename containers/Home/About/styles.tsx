import styled from 'styled-components'
import {
    BackgroundColor,
    FontColor,
    GridBreakpoints,
    ResponsiveBetween,
} from 'style/Theme'

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

    & span {
        color: ${FontColor.default};
    }

    & span + span {
        color: ${FontColor.primary};
    }
`
