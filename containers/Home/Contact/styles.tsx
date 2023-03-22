import { TransitionEnum } from '@enum'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import styled from 'styled-components'
import { animated } from 'react-spring'
import { MediaPrint } from 'style/Theme'

export const StyledContact = CreateStyledComponent(styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 0;

    span {
        font-weight: 600;
        color: ${dynamicTheme((theme) => theme.fontColor.default)};
        transition: color ${TransitionEnum.DURATION};
        cursor: pointer;
    }
    span + span {
        margin-left: 10px;
        font-weight: normal;
    }

    a {
        text-decoration: none;
        color: ${dynamicTheme((theme) => theme.fontColor.default)};
        transition: color ${TransitionEnum.DURATION};
    }

    ${MediaPrint} {
        padding: 5px;
    }
`)

export const StyledIcon = CreateStyledComponent(styled(animated.a)`
    font-size: 22px;
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 20px;
    background-color: ${dynamicTheme((theme) => theme.fontColor.tertiary)};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`)

export const StyledWrapCircle = CreateStyledComponent(styled(animated.span)`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
    display: block;
    position: absolute;
`)
