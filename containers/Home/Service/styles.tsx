import styled from 'styled-components'
import { MediaPrint, ResponsiveMax } from 'style/Theme'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { BoxShadowEnum, TransitionEnum } from '@enum'

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

export const StyledService = CreateStyledComponent(styled.div`
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

export const StyledHeaderService = CreateStyledComponent(styled.div`
    display: flex;
    flex-direction: column;
    transition: ${TransitionEnum.DURATION};

    .StyledContent3{        
        display: inline;
        margin: 0;
    }

    .StyledContent1{    
        display: inline;
        margin: 0;
    }
`)

export const StyledContentService = CreateStyledComponent(styled.div`
    margin-top: 10px;
    .StyledContent5{
        display: inline;
    }
`)

export const StyledCompany = CreateStyledComponent(styled.div`
    display: flex;
    align-items: center;
    transition: ${TransitionEnum.DURATION};
    .StyledContent4{
        display: inline;
        margin: 0;
    }
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
`)
