import styled from 'styled-components'
import { GridBreakpoints, ResponsiveBetween, ResponsiveMax } from 'style/Theme'
import { ListLib } from './ListLib'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { TransitionEnum } from '@enum'

export const StyledLib = styled.div`
    ${ResponsiveBetween('sm', 'lg')} {
        justify-content: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10px;
    }

    ${ResponsiveMax('sm')} {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 10px;
    }
`

export const StyledListLib = CreateStyledComponent(styled(ListLib)`
    margin-bottom: 5px;
    display: flex;
    color: ${dynamicTheme((theme) => theme.fontColor.primary)};
    transition: ${TransitionEnum.DURATION};
    & .material-icons {
        color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
        margin-right: 8px;
        transition: ${TransitionEnum.DURATION};
    }

    ${ResponsiveBetween('sm', 'lg')} {
        justify-content: flex-start;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-right: 15px;
    }

    i {
        margin-right: 5px;
    }
`)
