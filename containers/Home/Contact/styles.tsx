import { TransitionEnum } from '@enum'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import styled from 'styled-components'
import { animated } from 'react-spring'

export const StyledContact = CreateStyledComponent(styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;

    span {
        font-weight: 600;
        color: ${dynamicTheme((theme) => theme.fontColor.default)};
        transition: color ${TransitionEnum.DURATION};
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
`)

export const StyledWrapCircle =  CreateStyledComponent(styled(animated.span)`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
    display: block;
    position: absolute
`)
