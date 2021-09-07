import styled, { keyframes } from 'styled-components'
import {
    BackgroundColor,
    FontColor,
    GridBreakpoints,
    ResponsiveBetween,
} from 'style/Theme'
import { ProcessBar } from './ProcessBar'

export const StyledSkill = styled.div`
    ${ResponsiveBetween('sm', 'lg')} {
        padding: 10px;
    }
`

const animateWidthProcess = keyframes`
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
`

export const StyledProcessBar = styled(ProcessBar)`
    margin-bottom: 10px;
    .label {
        display: flex;
        justify-content: space-between;
        span {
            color: ${FontColor.default};
        }
        span + span {
            color: ${FontColor.primary};
        }
    }
    .progress {
        height: ${(props) => `${props.height}px`};
    }
    .progress-bar {
        background-color: ${BackgroundColor.third};
        width: ${(props) => `${props.percent}%`};
        max-width: ${(props) => `${props.percent}%`};
        animation: ${animateWidthProcess} 1s linear 1;
    }
`
