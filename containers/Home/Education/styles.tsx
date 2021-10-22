import styled from 'styled-components'
import { MediaPrint, ResponsiveMax } from 'style/Theme'
import { CreateStyledComponent, dynamicTheme, setTheme } from 'style/ultis'
import { TransitionEnum } from '@enum'

export const StyledEducationItem = CreateStyledComponent(styled.span`
    font-size: ${dynamicTheme((dataTheme) => dataTheme.fontSize.md)};
    color: ${dynamicTheme((dataTheme) => dataTheme.fontColor.default)};
    transition: color ${TransitionEnum.DURATION};
`)

export const StyledEducations = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 50px;
    grid-row-gap: 20px;
    margin-bottom: 30px;

    ${ResponsiveMax('md')} {
        grid-template-columns: auto auto;
    }

    ${ResponsiveMax('sm')} {
        grid-template-columns: auto;
    }

    ${MediaPrint} {
        grid-template-columns: auto auto auto;
        grid-column-gap: 10px;
    }
`
