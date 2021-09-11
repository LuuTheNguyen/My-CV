import styled from 'styled-components'
import { StyledLink } from './StyledLink'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { ThemeEnum, TransitionEnum } from '@enum/index'
import React from 'react'
import { Prop, Ref } from './interface'

export const StyledMenuList = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100vh;
    padding: 0;
`

export const StyledMenuItem = styled(StyledLink)`
    transform: rotate(90deg);
`

export const StyledItemLink = React.forwardRef<Ref, Prop>((props, ref) => {
    return <StyledItemLinkImp> {props.children} </StyledItemLinkImp>
})

const StyledItemLinkImp = CreateStyledComponent(styled.a`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    text-decoration: none;
    cursor: pointer;
    transition: background-color ${TransitionEnum.DURATION};

    &:hover {
        color: ${dynamicTheme((theme) => theme.fontColor.default)};
    }
`)

export const StyledWrapperMenuList = CreateStyledComponent(styled.div`
    position: relative;
    background-color: ${dynamicTheme((theme) => theme.color.secondary)};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0;
    transition: background-color ${TransitionEnum.DURATION};
`)

export const StyledContainerMenuList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: fit-content;
    height: 100%;
    position: fixed;
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
`

export const StyledHeaderMenu = CreateStyledComponent(styled.div`
    min-width: 50px;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    transition: background-color ${TransitionEnum.DURATION};
    i {
        cursor: pointer;
    }
    .material-icons {
        color: ${dynamicTheme((theme) => theme.fontColor.default)};
    }
`)

export const StyledContainerMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const StyledContainerSwitchTheme = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const StyledWrapSwitchTheme = CreateStyledComponent(styled.div`
    width: fit-content;
    height: fit-content;
    border-radius: 20px;
    background-color: ${dynamicTheme((theme) => theme.color.tertiary)};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-shadow: 0 0px 15px ${dynamicTheme((theme) => theme.color.primary)};
    transform: ${({ theme }) =>
        theme === ThemeEnum.DARK ? 'translateY(0)' : 'translateY(100%)'};
    cursor: pointer;
    transition: ${TransitionEnum.DURATION};

    .material-icons {
        color: #fff;
    }
`)

export const StyledSlider = CreateStyledComponent(styled.div`
    width: 30px;
    height: 60px;
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    transition: background-color ${TransitionEnum.DURATION};
`)
