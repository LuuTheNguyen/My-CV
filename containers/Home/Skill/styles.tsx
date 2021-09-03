import styled from 'styled-components'
import {
    BackGroundColor,
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

export const StyledProcessBar = styled(ProcessBar)`
    margin-bottom: 10px;
    .label {
        display: flex;
        justify-content: space-between;
    }
    .progress {
        height: ${(props) => `${props.height}px`};
    }
    .progress-bar {
        background-color: ${BackGroundColor.third};
        width: ${(props) => `${props.percent}%`};
    }
`
