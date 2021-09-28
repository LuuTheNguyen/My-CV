import { ResponsiveBetween, ResponsiveMax, MediaPrint, ResponsiveMin } from 'style/Theme'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import { StyledMenuItem, StyledWrapperMenuItem, StyledContainerSwitchTheme } from '@components/Menu'
import { BoxShadowEnum, TransitionEnum } from '@enum/index'

export const StyledContainerLayout = styled.div`
    * {
        -webkit-print-color-adjust: exact !important; /* Chrome, Safari, Edge */
        color-adjust: exact !important; /*Firefox*/

        hr {
            opacity: unset;
        }
    }

    @page {
        size: a4;
    }
`
export const StyledWrapperHead = CreateStyledComponent(styled.div`
    box-shadow: ${BoxShadowEnum.SQUARE} ${dynamicTheme((theme) => theme.color.default)};
    padding: 0;
    z-index: 1;
    transition: ${TransitionEnum.DURATION};
    height: 100%;
    ${ResponsiveMax('lg')} {
        padding-top: 30px;
        z-index: unset;
    }
    ${MediaPrint} {
        padding-top: 0;
        z-index: unset;
    }
`)

export const StyledAboutHead = CreateStyledComponent(styled.div`
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
    transition: ${TransitionEnum.DURATION};
`)

export const StyledWrapperImage = CreateStyledComponent(styled.div`
    width: 160px;
    height: 160px;
    position: relative;

    &:hover {
        cursor: pointer;
        ::before {
            font-family: 'Material Icons';
            content: 'zoom_out_map';
            display: inline-block;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 50%;
            z-index: 1;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 100px;
            opacity: 0.6;
            text-align: center;
            vertical-align: middle;
            transition: ${TransitionEnum.DURATION};
            color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
        }
    }
`)

const RADIUS_ICON = 80

export const StyledIcon = styled(Image)`
    border-radius: ${RADIUS_ICON}px;
    img {
        width: ${RADIUS_ICON * 2}px;
        height: ${RADIUS_ICON * 2}px;
    }
    position: relative;
`

const animateSkeletonImg = keyframes`
    0% {
        background-color: #f0f0f6;
    }

    100% {
        background-color: #c0c0ca;
    }
`

export const StyledSkeletonImg = styled.div`
    border-radius: ${RADIUS_ICON}px;
    width: ${RADIUS_ICON * 2}px;
    height: ${RADIUS_ICON * 2}px;
    position: absolute;
    animation: ${animateSkeletonImg} 0.8s linear infinite;
`

export const StyledZoomIcon = styled(Image)`
    border-radius: ${RADIUS_ICON}px;
    z-index: 999999;
    img {
        width: ${RADIUS_ICON * 2}px;
        height: ${RADIUS_ICON * 2}px;
    }
    position: relative;
`

export const StyledWrapperZoomImage = styled.div`
    width: 500px;
    ${MediaPrint} {
        display: none;
    }
`
export const StyledContainerZoomImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    transition: ${TransitionEnum.DURATION};

    ${MediaPrint} {
        display: none;
    }
`

export const StyledContainerOpacity = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    opacity: 0.8;
    background: #000000;
    z-index: 999999;

    ${MediaPrint} {
        display: none;
    }
`

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

export const StyledWrapperBtnNavBar = CreateStyledComponent(styled.div`
    display: flex;
    justify-content: space-between;

    .material-icons {
        color: ${dynamicTheme((theme) => theme.fontColor.default)};
    }
`)

export const StyledWrapperCloseButtonOffCanvasRight = CreateStyledComponent(styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    transition: ${TransitionEnum.DURATION};

    .material-icons {
        color: ${dynamicTheme((theme) => theme.fontColor.default)};
    }
`)

export const StyledName = CreateStyledComponent(styled.span`
    font-size: ${dynamicTheme((theme) => theme.fontSize.sm)};
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    font-weight: 600;
    text-transform: uppercase;
    transition: ${TransitionEnum.DURATION};
`)

export const StyledDescription = CreateStyledComponent(styled.span`
    font-size: ${dynamicTheme((theme) => theme.fontSize.xs)};
    color: ${dynamicTheme((theme) => theme.fontColor.primary)};
    transition: ${TransitionEnum.DURATION};
`)

export const StyledAboutBody = CreateStyledComponent(styled.div.attrs(() => ({ className: 'StyledAboutBody' }))`
    background-color: ${dynamicTheme((theme) => theme.color.secondary)};
    padding: 20px;
    display: grid;
    grid-row-gap: 20px;
    transition: ${TransitionEnum.DURATION};
    height: 100%;
    overflow: auto;

    ${ResponsiveBetween('sm', 'lg')} {
        grid-template-columns: 50% 50%;
        grid-gap: 20px;
        height: 100%;
        overflow: unset;
    }

    ${MediaPrint} {
        grid-template-columns: 50% 50%;
        grid-gap: 20px;
        overflow: unset;
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

export const StyledAboutFooter = CreateStyledComponent(styled.div`
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    transition: ${TransitionEnum.DURATION};
    justify-content: space-around;
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

export const StyledImageGit = CreateStyledComponent(styled(Image).attrs(() => ({ className: 'StyledImageGit' }))`
    filter: ${dynamicTheme((theme) => theme.images.git.filter)};
    transition: ${TransitionEnum.DURATION};
`)

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;

    ${ResponsiveMax('lg')} {
        flex-direction: column;
    }

    ${MediaPrint} {
        display: block;
    }
`

export const StyledContainer = CreateStyledComponent(styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${dynamicTheme((theme) => theme.color.secondary)};
    transition: ${TransitionEnum.DURATION};

    .container-xxl {
        ${ResponsiveMin('xxl')} {
            max-width: 1990px !important;
        }
    }
`)
