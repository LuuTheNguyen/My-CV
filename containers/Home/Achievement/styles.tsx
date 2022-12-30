import styled from 'styled-components'
import { ResponsiveMax } from 'style/Theme'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'

export const StyledContainerAchievement = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const StyledAchievement = CreateStyledComponent(styled.div`
    width: fit-content;
    margin-right: 30px;
    padding: 20px 0;

    .StyledContent2 {
        font-size: ${dynamicTheme((theme) => theme.fontSize.lg)};
        color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
        display: inline;
    }

    .StyledContent2 + .StyledContent2 {
        font-size: ${dynamicTheme((theme) => theme.fontSize.md)};
        color: ${dynamicTheme((theme) => theme.fontColor.default)};
    }

    ${ResponsiveMax('lg')} {
        padding: 10px 0;
        margin-right: 10px;
    }
`)
