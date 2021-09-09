import styled, { keyframes } from 'styled-components'
import { ResponsiveBetween } from 'style/Theme'
import { ProcessRing } from './ProcessRing'
import { ProcessRingProp } from './interface'
import { utilProcessCircle } from './util'
import { CreateStyledComponent, dynamicTheme, setTheme } from 'style/ultis'
import { TransitionEnum } from '@enum'

export const StyledLanguage = CreateStyledComponent(styled.div`
    justify-content: space-evenly;
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    display: flex;
    transition: color ${TransitionEnum.THEME};

    ${ResponsiveBetween('sm', 'lg')} {
        padding: 10px;
    }
`)

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

export const StyledProcessRing = CreateStyledComponent(styled(ProcessRing)`
    text {
        text-anchor: middle;
        font-size: ${dynamicTheme((theme) => theme.fontColor.default)};
    }
    circle {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
    circle.processCircle {
        animation: ${(props) => animateProcessCirlce(props)} 1s linear 1;
    }
`)

export const StyledWrapperProcessRing = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledTitleProcessRing = CreateStyledComponent(styled.div`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    margin: auto auto;
    font-size: ${dynamicTheme((theme) => theme.fontSize.xs)};
    transition: color ${TransitionEnum.THEME};
`)
