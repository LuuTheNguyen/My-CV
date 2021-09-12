import {
    ResponsiveBetween,
    ResponsiveMax,
    MediaPrint,
    ResponsiveMin,
} from 'style/Theme'
import styled from 'styled-components'
import Image from 'next/image'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'
import {
    StyledMenuItem,
    StyledWrapperMenuItem,
    StyledContainerSwitchTheme,
} from '@components/Menu'
import { BoxShadowEnum } from '@enum/index'

export const StyledMain = CreateStyledComponent(styled.main`
    height: auto;
    width: 100%;
    background-color: ${dynamicTheme((theme) => theme.color.secondary)};
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    margin: 0;
    padding: 0;
    align-items: center;
    justify-content: center;

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
    ${ResponsiveMin('lg')} {
        padding: 10px;
    }
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
`

export const StyledWrapperHead = CreateStyledComponent(styled.div`
    box-shadow: ${BoxShadowEnum.SQUARE}
        ${dynamicTheme((theme) => theme.color.default)};
    padding: 0;
    ${ResponsiveMax('lg')} {
        width: auto;
        display: none;

        &.show {
            display: block;
        }
    }
`)

export const StyledAboutHead = CreateStyledComponent(styled.div`
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
`)

export const StyledWrapperImage = styled.div`
    width: 80px;
    height: 80px;
    position: relative;
`

export const StyledIcon = styled(Image)`
    border-radius: 40px;
    img {
        width: 100px;
        height: 100px;
    }
    position: relative;
`
export const StyledName = CreateStyledComponent(styled.span`
    font-size: ${dynamicTheme((theme) => theme.fontSize.sm)};
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    font-weight: 600;
`)

export const StyledDescription = CreateStyledComponent(styled.span`
    font-size: ${dynamicTheme((theme) => theme.fontSize.xs)};
    color: ${dynamicTheme((theme) => theme.fontColor.primary)};
`)

export const StyledAboutBody = CreateStyledComponent(styled.div`
    background-color: ${dynamicTheme((theme) => theme.color.secondary)};
    padding: 20px;
    display: grid;
    ${ResponsiveBetween('sm', 'lg')} {
        grid-template-columns: auto;
    }
`)

export const StyledDownloadCV = CreateStyledComponent(styled.div`
    color: ${dynamicTheme((theme) => theme.fontColor.primary)};
    text-transform: uppercase;
    font-weight: 600;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;

    ${ResponsiveBetween('sm', 'lg')} {
        padding: 10px;
    }

    a {
        text-decoration: none;
        color: ${dynamicTheme((theme) => theme.fontColor.primary)};
        display: flex;
        align-items: center;
        font-size: ${dynamicTheme((theme) => theme.fontSize.xs)};
    }

    a:hover {
        color: ${dynamicTheme((theme) => theme.hover.Font.default.color)};
        text-shadow: ${dynamicTheme(
            (theme) => theme.hover.Font.default.textShadow
        )};
    }

    i {
        font-size: ${dynamicTheme((theme) => theme.fontSize.xs)};
    }

    .material-icons {
        font-size: ${dynamicTheme((theme) => theme.fontSize.md)};
    }
`)

export const StyledAboutFooter = CreateStyledComponent(styled.div`
    background-color: ${dynamicTheme((theme) => theme.color.primary)};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
`)

export const StyledNavBar = CreateStyledComponent(styled.div`
    display: none;
    background-color: ${dynamicTheme((theme) => theme.color.default)};

    ${ResponsiveMax('lg')} {
        display: block;
        position: fixed;
    }

    .offcanvas {
        height: 100vh;
        overflow-y: auto;
        background-color: ${dynamicTheme((theme) => theme.color.secondary)};
    }

    ${StyledDownloadCV} {
        a {
            color: ${dynamicTheme((theme) => theme.fontColor.primary)};
            font-size: ${dynamicTheme((theme) => theme.fontSize.xs)};
        }

        a:hover {
            color: ${dynamicTheme((theme) => theme.hover.Font.default.color)};
            text-shadow: ${dynamicTheme(
                (theme) => theme.hover.Font.default.textShadow
            )};
        }

        .material-icons {
            color: ${dynamicTheme((theme) => theme.fontColor.primary)};
        }
    }

    #offcanvasRight {
        ${StyledWrapperMenuItem} {
            transform: rotate(0deg);
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 10px;
        }

        ${StyledMenuItem} {
            font-weight: 600;
        }

        ${StyledContainerSwitchTheme} {
            transform: rotate(90deg);
        }
    }
`)

export const StyledWrapperContent = styled.div`
    padding: 30px;
    ${ResponsiveMax('lg')} {
        width: auto;
        padding-top: 60px;
    }
`

export const StyleBanner = styled.div`
    display: flex;
`

export const StyledBannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${ResponsiveBetween('sm', 'lg')} {
        padding: 0;
    }
`

export const StyledTitleContent = CreateStyledComponent(styled.h4`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    text-transform: uppercase;
    font-weight: 600;
`)

export const StyledSubTitleContent = CreateStyledComponent(styled.div`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    .code {
        color: ${dynamicTheme((theme) => theme.fontColor.secondary)};
    }
    button {
        background-color: ${dynamicTheme((theme) => theme.color.tertiary)};
    }

    button:hover {
        transform: ${dynamicTheme(
            (theme) => theme.hover.Button.default.transform
        )};
    }

    a {
        text-decoration: none;
        color: inherit;
        font-weight: 600;
    }
`)

export const StyledContainerService = styled.div`
    display: flex;
    flex-direction: column;
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
`

export const StyledWrapperCloseButtonOffCanvasLeft =
    CreateStyledComponent(styled.div`
        display: flex;
        justify-content: flex-end;
        background-color: ${dynamicTheme((theme) => theme.color.primary)};
    `)

export const StyledWrapperCloseButtonOffCanvasRight =
    CreateStyledComponent(styled.div`
        display: flex;
        justify-content: flex-start;
        background-color: ${dynamicTheme((theme) => theme.color.primary)};
    `)

export const StyledWrapperBtnNavBar = styled.div`
    display: flex;
    justify-content: space-between;
`
