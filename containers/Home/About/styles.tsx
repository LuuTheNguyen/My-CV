import styled from 'styled-components'
import { ResponsiveBetween } from 'style/Theme'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { TransitionEnum } from '@enum'

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;

    ${ResponsiveBetween('sm', 'lg')} {
        padding: 10px;
    }

    & div {
        display: flex;
        justify-content: space-between;
    }
`

export const StyledLabel = CreateStyledComponent(styled.span`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    transition: color ${TransitionEnum.DURATION};
`)

export const StyledContent = CreateStyledComponent(styled.span`
    color: ${dynamicTheme((theme) => theme.fontColor.primary)};
    transition: color ${TransitionEnum.DURATION};
`)
