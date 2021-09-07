import { ThemeEnum } from '@enum'
import { dynamicTheme, setTheme } from 'style/ultis'
import styled from 'styled-components'

export const StyledFieldInfo = styled.span.attrs(setTheme())`
    background-color: ${dynamicTheme((theme) => theme.Color.tertiary)};
`

export const StyledContact = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;

    span {
        font-weight: 600;

        &.${ThemeEnum.LIGHT} {

        }
    }
    span + span {
        margin-left: 10px;
        font-weight: normal;
    }
`