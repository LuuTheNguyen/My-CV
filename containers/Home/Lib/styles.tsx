import styled from 'styled-components'
import { FontColor, GridBreakpoints, ResponsiveBetween } from 'style/Theme'
import { ListLib } from './ListLib'

export const StyledLib = styled.div`
    ${ResponsiveBetween('sm', 'lg')} {
        justify-content: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 10px;
    }
`

export const StyledListLib = styled(ListLib)`
    margin-bottom: 5px;
    display: flex;
    & .material-icons {
        color: ${(props) => props.color || FontColor.secondary};
        margin-right: 8px;
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
`
