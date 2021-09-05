import styled, { keyframes } from 'styled-components'
import {
    BackGroundColor,
    FontColor,
    GridBreakpoints,
    FontSize,
    ResponsiveBetween,
} from 'style/Theme'
import { ProcessRing } from './ProcessRing'
import { ProcessRingProp } from '.'
import { utilProcessCircle } from './util'

export const StyledLanguage = styled.div`
    justify-content: space-evenly;
    color: ${FontColor.default};
    display: flex;

    ${ResponsiveBetween('sm', 'lg')} {
        padding: 10px;
    }
`

const animateProcessCirlce = (props: ProcessRingProp) => {
    const { circumference, offset } = utilProcessCircle(props)

    return keyframes`
    0%{
        stroke-dasharray: 100 100;
        stroke-dashoffset: 100;
    }

    100%{
        stroke-dasharray: ${circumference} ${circumference};
        stroke-dashoffset: ${offset};
    }
`
}

export const StyledProcessRing = styled(ProcessRing)`
    text {
        text-anchor: middle;
    }
    circle {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
    circle.processCircle {
        animation: ${(props) => animateProcessCirlce(props)} 1s linear 1;
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
