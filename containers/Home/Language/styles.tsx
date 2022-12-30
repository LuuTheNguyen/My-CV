import styled, { css, keyframes } from 'styled-components'
import { ResponsiveBetween, ResponsiveMax } from 'style/Theme'
import { ProcessRing } from './ProcessRing'
import { ProcessRingProps } from './interface'
import { utilProcessCircle } from './util'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { TransitionEnum } from '@enum'

export const StyledLanguage = CreateStyledComponent(styled.div`
    justify-content: center;
    align-items: flex-start;
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    display: flex;
    flex-direction: column;
    transition: color ${TransitionEnum.DURATION};

    ${ResponsiveBetween('sm', 'lg')} {
        padding: 10px;
    }
`)

const animateProcessCirlce = (props: ProcessRingProps) => {
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
        font-size: ${dynamicTheme((theme) => theme.fontSize.sm)};
        transition: ${TransitionEnum.DURATION};
        font-family: 'Source Sans Pro', sans-serif;
    }
    circle {
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
        transition: ${TransitionEnum.DURATION};
    }
    circle.processCircle {
        animation: ${(props) =>
            css`
                ${animateProcessCirlce(props)} 1s linear 1
            `};
    }
`)

export const StyledWrapperProcessRing = CreateStyledComponent(styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .StyledContent1{
        display: inline;        
        margin: auto auto;
        font-size: ${dynamicTheme((theme) => theme.fontSize.sm)};
    }
`)

export const StyledWrapperLanguage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    .StyledContent1{
        margin: 0;
    }
`

export const StyledContainerProcessRings = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;

    ${ResponsiveMax('lg')} {
        grid-template-columns: auto auto auto auto;
    }
`
