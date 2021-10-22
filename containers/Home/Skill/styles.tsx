import styled, { keyframes } from 'styled-components'
import { MediaPrint, ResponsiveBetween } from 'style/Theme'
import { ProcessBar } from './ProcessBar'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { TransitionEnum } from '@enum'

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
            color: ${dynamicTheme((dataTheme) => dataTheme.fontColor.default)};
            transition: ${TransitionEnum.DURATION};
        }
        span + span {
            color: ${dynamicTheme((dataTheme) => dataTheme.fontColor.primary)};
            transition: ${TransitionEnum.DURATION};
        }
    }
    .progressBar {
        height: ${(props) => `${props.height}px`};
        background-color: ${dynamicTheme((dataTheme) => dataTheme.fontColor.tertiary)};
        transition: ${TransitionEnum.DURATION};
        position: relative;
    }
    .progressBar::before {
        content: "";
        position: absolute;
        background-color: ${dynamicTheme((dataTheme) => dataTheme.color.tertiary)};
        width: ${(props) => `${props.percent}%`};
        max-width: ${(props) => `${props.percent}%`};
        height: 100%;
        animation: ${animateWidthProcess} 1s linear 1;
        transition: ${TransitionEnum.DURATION};
    }
`)
