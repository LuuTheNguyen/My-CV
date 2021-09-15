import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import styled from 'styled-components'

export const StyledContact = CreateStyledComponent(styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;

    span {
        font-weight: 600;
    }
    span + span {
        margin-left: 10px;
        font-weight: normal;
    }

    a {
        text-decoration: none;
        color: ${dynamicTheme((theme) => theme.fontColor.default)};
    }
`)
