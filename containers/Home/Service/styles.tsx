import styled from 'styled-components'
import { ResponsiveMax } from 'style/Theme'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { BoxShadowEnum } from '@enum'

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
`

export const StyledService = CreateStyledComponent(styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    min-height: 250px;
    box-shadow: ${BoxShadowEnum.SQUARE}
        ${dynamicTheme((theme) => theme.color.default)};

    ${ResponsiveMax('lg')} {
        width: 100%;
    }
`)

export const StyledHeaderService = CreateStyledComponent(styled.span`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
`)

export const StyledHeaderTitleService = styled.span`
    font-weight: 600;
`

export const StyledHeaderSubTitleService = styled.span`
    font-weight: normal;
`

export const StyledContentService = CreateStyledComponent(styled.div`
    color: ${dynamicTheme((theme) => theme.fontColor.primary)};
    font-size: ${dynamicTheme((theme) => theme.fontSize.sm)};
    margin-top: 10px;
    span {
        text-transform: capitalize;
        font-style: italic;
        font-weight: 600;
    }
    span + span {
        text-transform: none;
        font-weight: normal;
        font-style: normal;
    }
`)

export const StyledCompany = CreateStyledComponent(styled.div`
    color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
    font-weight: 600px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    & button {
        border: none;
        padding: 0;
    }
    & .material-icons {
        font-size: ${dynamicTheme((theme) => theme.fontSize.md)};
        cursor: pointer;
    }
    & a {
        margin-left: 5px;
        color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`)
