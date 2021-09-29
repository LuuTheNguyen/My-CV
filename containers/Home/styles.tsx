import { ResponsiveBetween, ResponsiveMax, MediaPrint } from 'style/Theme'
import styled from 'styled-components'
import Image from 'next/image'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { StyledMenuItem, StyledWrapperMenuItem, StyledContainerSwitchTheme } from '@components/Menu'
import { BoxShadowEnum, TransitionEnum } from '@enum/index'

export const StyledMain = CreateStyledComponent(styled.main`
    height: auto;
    width: 100%;
    background-color: ${dynamicTheme((theme) => theme.color.secondary)};
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;
    transition: ${TransitionEnum.DURATION};

    ${ResponsiveMax('lg')} {
        flex-direction: row;
        display: flex;
        padding: 0;
    }

    ${MediaPrint} {
        background-color: ${dynamicTheme((theme) => theme.color.default)};
        color: ${dynamicTheme((theme) => theme.fontColor.default)};
    }

    .row {
        margin: 0;
    }
`)

export const StyledContainer = CreateStyledComponent(styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${dynamicTheme((theme) => theme.color.default)};
    transition: ${TransitionEnum.DURATION};
`)

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;

    ${ResponsiveMax('lg')} {
        flex-direction: column;
        width: 100%;
    }
`

export const StyledWrapperInfo = styled.div`
    display: flex;
    flex-direction: row;

    ${ResponsiveMax('lg')} {
        flex-direction: column;
    }

    ${MediaPrint} {
        display: block;
    }
`

export const StyledWrapperHead = CreateStyledComponent(styled.div`
    box-shadow: ${BoxShadowEnum.SQUARE} ${dynamicTheme((theme) => theme.color.default)};
    padding: 0;
    transition: ${TransitionEnum.DURATION};
    font-family: 'Source Sans Pro', sans-serif;
    ${ResponsiveMax('lg')} {
        width: auto;
        display: block;
    }
    ${MediaPrint} {
        padding-top: 0;
    }
`)

export const StyledAboutHead = CreateStyledComponent(styled.div`
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 20px 20px;
    flex-direction: column;
    transition: ${TransitionEnum.DURATION};

    .StyledContent2 {
        display: inline;
        font-size: ${dynamicTheme((theme) => theme.fontSize.sm)};
        text-transform: uppercase;
        margin: 0;
    }

    .StyledContent5 {
        display: inline;
        font-size: ${dynamicTheme((theme) => theme.fontSize.xs)};
        margin: 0;
    }

`)

export const StyledWrapperImage = styled.div`
    width: 160px;
    height: 160px;
    position: relative;
`

export const StyledIcon = styled(Image)`
    border-radius: 80px;
    img {
        width: 160px;
        height: 160px;
    }
    position: relative;
`

export const StyledAboutBody = CreateStyledComponent(styled.div.attrs(() => ({ className: 'StyledAboutBody' }))`
    background-color: ${dynamicTheme((theme) => theme.color.secondary)};
    padding: 20px;
    display: grid;
    grid-row-gap: 20px;
    transition: ${TransitionEnum.DURATION};
    ${ResponsiveBetween('sm', 'lg')} {
        grid-template-columns: 50% 50%;
        grid-gap: 20px;
    }

    ${MediaPrint} {
        grid-template-columns: 50% 50%;
        grid-gap: 20px;
    }

    > div {
        position: relative;
    }

    > div:not(:first-child)::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        display: block;
        background: ${dynamicTheme((theme) => theme.fontColor.primary)};
        top: 0;
        transform: translateY(-10px);
        transition: ${TransitionEnum.DURATION};

        ${ResponsiveBetween('sm', 'lg')} {
            display: none;
        }

        ${MediaPrint} {
            display: none;
        }
    }
`)

export const StyledContainerTool = CreateStyledComponent(styled.div.attrs(() => ({ className: 'StyledContainerTool' }))`
    color: ${dynamicTheme((theme) => theme.fontColor.primary)};
    text-transform: uppercase;
    font-weight: 600;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    transition: ${TransitionEnum.DURATION};

    ${ResponsiveBetween('sm', 'lg')} {
        padding: 10px;
        display: none;
    }

    ${ResponsiveMax('sm')} {
        display: none;
    }

    a {
        text-decoration: none;
        color: ${dynamicTheme((theme) => theme.fontColor.primary)};
        display: flex;
        align-items: center;
        font-size: ${dynamicTheme((theme) => theme.fontSize.xs)};
        transition: ${TransitionEnum.DURATION};
    }

    a:hover {
        color: ${dynamicTheme((theme) => theme.hover.Font.default.color)};
        text-shadow: ${dynamicTheme((theme) => theme.hover.Font.default.textShadow)};
        transition: color ${TransitionEnum.DURATION};

        .StyledImageGit {
            filter: ${dynamicTheme((theme) => theme.images.git.hover.filter)};
        }
    }

    i {
        font-size: ${dynamicTheme((theme) => theme.fontSize.xs)};
        transition: ${TransitionEnum.DURATION};
    }

    .material-icons {
        font-size: ${dynamicTheme((theme) => theme.fontSize.md)};
        transition: ${TransitionEnum.DURATION};
    }
`)

export const StyledAboutFooter = CreateStyledComponent(styled.div`
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    transition: ${TransitionEnum.DURATION};
    justify-content: space-around;
`)

export const StyledImageGit = CreateStyledComponent(styled(Image).attrs(() => ({ className: 'StyledImageGit' }))`
    filter: ${dynamicTheme((theme) => theme.images.git.filter)};
    transition: ${TransitionEnum.DURATION};
`)

export const StyledNavBar = CreateStyledComponent(styled.div`
    display: none;
    background-color: ${dynamicTheme((theme) => theme.color.default)};
    transition: ${TransitionEnum.DURATION};

    ${ResponsiveMax('lg')} {
        display: block;
        position: fixed;
        z-index: 1;
    }

    .offcanvas {
        height: 100vh;
        background-color: ${dynamicTheme((theme) => theme.color.secondary)};
        width: 50%;
        transition: ${TransitionEnum.DURATION};
        .StyledWrapperMenuList {
            justify-content: space-around;
        }
    }

    #offcanvasRight {
        ${StyledWrapperMenuItem} {
            transform: rotate(0deg);
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 10px;
            width: 100%;
        }

        ${StyledMenuItem} {
            font-weight: 600;
        }

        ${StyledContainerSwitchTheme} {
            transform: rotate(90deg);
            width: fit-content;
        }
    }
`)

export const StyledWrapperContent = styled.div`
    padding: 30px;
    ${ResponsiveMax('lg')} {
        width: auto;
        padding-top: 60px;
    }

    ${MediaPrint} {
        display: block;
    }
`

export const StyledBanner = styled.div`
    display: flex;
`

export const StyledBannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0;

    ${MediaPrint} {
        display: block;
        break-inside: avoid;
    }
`

export const StyledSubTitleContent = CreateStyledComponent(styled.div`
    transition: ${TransitionEnum.DURATION};

    .StyledContent1 {
        display: inline;
    }

    .code {
        color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
        transition: ${TransitionEnum.DURATION};
    }

    ${MediaPrint} {
        display: block;
        break-inside: avoid;
    }
`)

export const StyledContainerService = styled.div`
    display: flex;
    flex-direction: column;

    ${MediaPrint} {
        break-inside: avoid;
        display: block;
    }
`

export const StyledWrapperMain = styled.div`
    ${ResponsiveMax('lg')} {
        flex-direction: row;
        display: flex;
    }
`

export const StyledContainerEducation = styled.div`
    display: flex;
    flex-direction: column;

    ${MediaPrint} {
        display: block;
        break-inside: avoid;
        margin: 10px 0;
    }
`

export const StyledWrapperCloseButtonOffCanvasLeft = CreateStyledComponent(styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    transition: ${TransitionEnum.DURATION};
`)

export const StyledWrapperCloseButtonOffCanvasRight = CreateStyledComponent(styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    transition: ${TransitionEnum.DURATION};
`)

export const StyledWrapperBtnNavBar = styled.div`
    display: flex;
    justify-content: space-between;
`
