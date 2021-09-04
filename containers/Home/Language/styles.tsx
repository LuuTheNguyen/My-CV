import styled, { keyframes } from 'styled-components'
import {
    BackGroundColor,
    FontColor,
    GridBreakpoints,
    FontSize,
    ResponsiveBetween,
} from 'style/Theme'
import { ProcessRing } from './ProcessRing'

export const StyledLanguage = styled.div`
    justify-content: space-evenly;
    color: ${FontColor.default};
    display: flex;

    ${ResponsiveBetween('sm', 'lg')} {
        padding: 10px;
    }
`

const animateProcessCirlce = keyframes`
    0%{
        stroke-dasharray: 0% 0%;
        stroke-dashoffset: 0%;
    }

    100%{
        stroke-dasharray: 100% 100%;
        stroke-dashoffset: 100%;
    }
`

export const StyledProcessRing = styled(ProcessRing)`
    text {
        text-anchor: middle;
    }
    circle {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
    circle.processCircle{
        animation: ${animateProcessCirlce} 0.6s linear 1;
    }
`

export const StyledWrapperProcessRing = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledTitleProcessRing = styled.div`
    color: ${FontColor.default};
    margin: auto auto;
    font-size: ${FontSize.xs};
`
