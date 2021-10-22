import styled, { keyframes } from 'styled-components'
import { MediaPrint, ResponsiveMax } from 'style/Theme'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { BoxShadowEnum, TransitionEnum } from '@enum'
import { animated } from '@react-spring/web'

export const StyledWrapperService = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: flex-start;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    ${ResponsiveMax('sm')} {
        grid-template-columns: auto;
    }

    ${MediaPrint} {
        display: block;
    }
`

export const StyledService = CreateStyledComponent(styled(animated.div)`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${dynamicTheme((dataTheme) => dataTheme.color.primary)};
    box-shadow: ${`${BoxShadowEnum.SQUARE} ${dynamicTheme((dataTheme) => dataTheme.color.default)}`};
    height: 100%;
    transition: ${TransitionEnum.DURATION};

    ${ResponsiveMax('lg')} {
        width: 100%;
    }

    ${MediaPrint} {
        display: block;
        break-inside: avoid;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`)

export const StyledHeaderService = CreateStyledComponent(styled.span`
    color: ${dynamicTheme((dataTheme) => dataTheme.fontColor.default)};
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    transition: ${TransitionEnum.DURATION};
`)

export const StyledHeaderTitleService = styled.span`
    font-weight: 600;
`

export const StyledHeaderSubTitleService = styled.span`
    font-weight: normal;
`

export const StyledContentService = CreateStyledComponent(styled.div`
    color: ${dynamicTheme((dataTheme) => dataTheme.fontColor.primary)};
    font-size: ${dynamicTheme((dataTheme) => dataTheme.fontSize.md)};
    margin-top: 10px;
    transition: ${TransitionEnum.DURATION};
`)

export const StyledCompany = CreateStyledComponent(styled.div`
    color: ${dynamicTheme((dataTheme) => dataTheme.fontColor.secondary)};
    font-weight: 600px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    transition: ${TransitionEnum.DURATION};
    & button {
        border: none;
        padding: 0;
    }
    & .material-icons {
        font-size: ${dynamicTheme((dataTheme) => dataTheme.fontSize.md)};
        cursor: pointer;
        transition: ${TransitionEnum.DURATION};
    }
    & a {
        margin-left: 5px;
        color: ${dynamicTheme((dataTheme) => dataTheme.fontColor.secondary)};
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: ${TransitionEnum.DURATION};
    }
`)
