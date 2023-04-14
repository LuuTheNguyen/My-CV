import styled from 'styled-components'
import { GridBreakpoints, MediaPrint, ResponsiveBetween, ResponsiveMax } from 'style/Theme'
import { ListLib } from './ListLib'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { TransitionEnum } from '@enum'

export const StyledLib = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;

    ${ResponsiveBetween('sm', 'lg')} {
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10px;
    }

    ${MediaPrint} {
        padding: 5px;
        grid-template-columns: repeat(5, auto);
        grid-gap: 4px;
    }
`

export const StyledListLib = CreateStyledComponent(styled(ListLib)`
    margin-bottom: 5px;
    display: flex;
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

    .StyledContent5 {
        display: inline;
        margin: 0;
    }

    ${MediaPrint} {
        margin-bottom: 2px;
    }
`)
