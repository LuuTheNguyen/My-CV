import {
    BackgroundColor,
    FontColor,
    GridBreakpoints,
    FontSize,
    ResponsiveBetween,
    ResponsiveMax,
    ResponsiveMin,
    MediaPrint,
    Hover,
} from 'style/Theme'
import styled from 'styled-components'
import Image from 'next/image'

export const StyledMain = styled.main`
    height: auto;
    width: 100%;
    background-color: ${BackgroundColor.default};
    color: ${FontColor.default};
    margin: 0;
    padding: 10px;
    align-items: center;
    justify-content: center;

    ${ResponsiveMax('lg')} {
        flex-direction: row;
        display: flex;
    }

    ${MediaPrint} {
        background-color: ${BackgroundColor.default};
        color: ${FontColor.default};
    }
`

export const StyledContainer = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${BackgroundColor.default};
`

const StyledInfo = styled.div`
    display: flex;
    flex-direction: row;

    ${ResponsiveMax('lg')} {
        flex-direction: column;
    }
`

const StyledWrapperInfo = styled.div`
    display: flex;
    flex-direction: row;

    ${ResponsiveMax('lg')} {
        flex-direction: column;
    }
`

export { StyledInfo, StyledWrapperInfo }

export const StyledWrapperHead = styled.div`
    ${ResponsiveMax('lg')} {
        width: auto;
        display: none;

        &.show {
            display: block;
        }
    }
`

export const StyledAboutHead = styled.div`
    background-color: ${BackgroundColor.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-direction: column;
`

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
export const StyledName = styled.span`
    font-size: ${FontSize.sm};
    color: ${FontColor.default};
    font-weight: 600;
`

export const StyledDescription = styled.span`
    font-size: ${FontSize.xs};
    color: ${FontColor.primary};
`

export const StyledAboutBody = styled.div`
    background-color: ${BackgroundColor.secondary};
    padding: 20px;
    display: grid;
    ${ResponsiveBetween('sm', 'lg')} {
        grid-template-columns: 50% 50%;
    }
`

export const StyledDownloadCV = styled.div`
    color: ${FontColor.primary};
    text-transform: uppercase;
    font-weight: 600;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;

    ${ResponsiveBetween('sm', 'lg')} {
        padding: 10px;
    }

    a {
        text-decoration: none;
        color: ${FontColor.primary};
        display: flex;
        align-items: center;
        font-size: ${FontSize.xs};
    }

    a:hover {
        ${Hover.Font.default}
    }

    i {
        font-size: ${FontSize.xs};
    }

    .material-icons {
        font-size: ${FontSize.md};
    }
`

export const StyledAboutFooter = styled.div`
    background-color: ${BackgroundColor.primary};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const StyledNavBar = styled.div`
    display: none;
    background-color: ${BackgroundColor.default};

    ${ResponsiveMax('lg')} {
        display: block;
    }

    .offcanvas {
        height: 100vh;
        overflow-y: auto;
        background-color: ${BackgroundColor.primary};
        .material-icons {
            color: ${FontColor.secondary};
        }

        ${StyledAboutBody} {
            ${ResponsiveBetween('sm', 'lg')} {
                grid-template-columns: auto;
            }
        }
    }

    ${StyledDownloadCV} {
        a {
            color: ${FontColor.primary};
            font-size: ${FontSize.xs};
        }

        a:hover {
            ${Hover.Font.default}
        }

        .material-icons {
            color: ${FontColor.primary};
        }
    }
`

export const StyledWrapperContent = styled.div`
    padding: 30px;
    ${ResponsiveBetween('sm', 'lg')} {
        width: auto;
    }
`

export const StyleBanner = styled.div`
    display: flex;
`

export const StyledBannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const StyledTitleContent = styled.h4`
    color: ${FontColor.default};
    text-transform: uppercase;
    font-weight: 600;
`

export const StyledSubTitleContent = styled.div`
    color: ${FontColor.default};
    .code {
        color: ${FontColor.secondary};
    }
    button {
        background-color: ${BackgroundColor.third};
    }

    button:hover {
        ${Hover.Button.default}
    }

    a {
        text-decoration: none;
        color: inherit;
        font-weight: 600;
    }
`

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
export const StyledWrapperCloseButtonOffCanvas = styled.div`
    display: flex;
    justify-content: flex-end;
`
