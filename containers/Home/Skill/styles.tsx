import styled, { keyframes } from 'styled-components'
import { ResponsiveBetween } from 'style/Theme'
import { ProcessBar } from './ProcessBar'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'

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

export const StyledProcessBar = CreateStyledComponent(styled(ProcessBar)`
    margin-bottom: 10px;
    .label {
        display: flex;
        justify-content: space-between;
        span {
            color: ${dynamicTheme((theme) => theme.fontColor.default)};
        }
        span + span {
            color: ${dynamicTheme((theme) => theme.fontColor.primary)};
        }
    }
    .progress {
        height: ${(props) => `${props.height}px`};
        background-color: ${dynamicTheme((theme) => theme.fontColor.tertiary)};
    }
    .progress-bar {
        background-color: ${dynamicTheme((theme) => theme.color.tertiary)};
        width: ${(props) => `${props.percent}%`};
        max-width: ${(props) => `${props.percent}%`};
        animation: ${animateWidthProcess} 1s linear 1;
    }
`)
