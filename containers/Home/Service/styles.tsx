import styled, { keyframes } from 'styled-components'
import { MediaPrint, ResponsiveMax } from 'style/Theme'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { BoxShadowEnum, TransitionEnum } from '@enum'
import { animated } from '@react-spring/web'

export const StyledWrapperService = styled.section`
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
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    box-shadow: ${`${BoxShadowEnum.SQUARE} ${dynamicTheme((theme) => theme.color.default)}`};
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
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    transition: ${TransitionEnum.DURATION};

    .StyledContent3,
    .StyledContent1 {
        margin: 0;
    }
`)

export const StyledHeaderTitleService = styled.span`
    font-weight: 600;
`

export const StyledHeaderSubTitleService = styled.span`
    font-weight: normal;
`

export const StyledContentService = CreateStyledComponent(styled.div`
    color: ${dynamicTheme((theme) => theme.fontColor.primary)};
    font-size: ${dynamicTheme((theme) => theme.fontSize.md)};
    margin-top: 10px;
    transition: ${TransitionEnum.DURATION};

    .StyledContent5 {
        margin: 0;
        display: inline;
    }
`)

export const StyledCompany = CreateStyledComponent(styled.div`
    color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
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
        font-size: ${dynamicTheme((theme) => theme.fontSize.md)};
        cursor: pointer;
        transition: ${TransitionEnum.DURATION};
    }
    & a {
        margin-left: 5px;
        color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: ${TransitionEnum.DURATION};
    }

    .StyledContent4 {
        margin: 0;
    }
`)
