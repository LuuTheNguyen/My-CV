import styled from 'styled-components'
import { ResponsiveMax } from 'style/Theme'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { TransitionEnum } from '@enum'

export const StyledContainerAchievement = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const StyledAchievement = CreateStyledComponent(styled.div`
    width: fit-content;
    margin-right: 30px;
    padding: 20px 0;

    span {
        font-size: ${dynamicTheme((dataTheme) => dataTheme.fontSize.lg)};
        color: ${dynamicTheme((dataTheme) => dataTheme.fontColor.secondary)};
        font-weight: 600;
        transition: color ${TransitionEnum.DURATION};
    }

    span + span {
        font-size: ${dynamicTheme((dataTheme) => dataTheme.fontSize.md)};
        color: ${dynamicTheme((dataTheme) => dataTheme.fontColor.default)};
        margin-left: 0.4rem;
        transition: color ${TransitionEnum.DURATION};
    }

    ${ResponsiveMax('lg')} {
        padding: 10px 0;
        margin-right: 10px;
    }
`)
