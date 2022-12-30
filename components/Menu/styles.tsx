import styled from 'styled-components'
import { StyledLink } from './StyledLink'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { ThemeEnum, TransitionEnum, BoxShadowEnum } from '@enum/index'
import React from 'react'
import { Props, Ref } from './interface'
import { ResponsiveMax } from 'style/Theme'

export const StyledMenuList = styled.div`
    display: flex;
    height: 100vh;
    justify-content: flex-end;
    padding: 0;    
    position: absolute;
    right: 0;
    width: auto;

    ${ResponsiveMax('lg')} {
        display: none;
    }
`

export const StyledMenuItem = styled(StyledLink)`
    font-weight: 600;
    font-family: 'Source Sans Pro', sans-serif;
    margin-right: 10px;
`

export const StyledItemLink = React.forwardRef<Ref, Props>((props, ref) => {
    return <StyledItemLinkImp {...props}> {props.children} </StyledItemLinkImp>
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

export const StyledWrapperMenuList = CreateStyledComponent(styled.div.attrs(() => ({
    className: 'StyledWrapperMenuList',
}))`
    position: relative;
    background-color: ${dynamicTheme((theme) => theme.color.secondary)};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0;
    transition: background-color ${TransitionEnum.DURATION};
    align-items: center;
    overflow: auto;
`)

export const StyledContainerMenuList = CreateStyledComponent(styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: fit-content;
    height: calc(100% - 20px);
    position: fixed;
    box-shadow: ${BoxShadowEnum.SQUARE} ${dynamicTheme((theme) => theme.color.default)};
    transition: box-shadow ${TransitionEnum.DURATION};
`)

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
        transition: color ${TransitionEnum.DURATION};
    }
`)

export const StyledContainerMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
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
    box-shadow: ${BoxShadowEnum.CIRCLE} ${dynamicTheme((theme) => theme.fontColor.secondary)};
    transform: ${({ theme }) => (theme === ThemeEnum.DARK ? 'translateY(0)' : 'translateY(100%)')};
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
    box-shadow: ${BoxShadowEnum.CIRCLE} ${dynamicTheme((theme) => theme.color.default)};
`)

export const StyledWrapperMenuItem = styled.div`
    position: absolute;
    transform: rotate(90deg) translateX(50%);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: calc(100vh - 150px);
    overflow: auto;
`
