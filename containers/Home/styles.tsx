import { TransitionEnum } from '@enum/index'
import { ResponsiveMax, MediaPrint } from 'style/Theme'
import styled from 'styled-components'
import { CreateStyledComponent, dynamicTheme } from 'style/ultis'

export const StyledMain = CreateStyledComponent(styled.main`
    height: auto;
    background-color: ${dynamicTheme((theme) => theme.color.secondary)};
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    margin: 0;
    padding: 0 50px 0 0;
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
        padding: 0;
    }

    .row {
        margin: 0;
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

    ${MediaPrint} {
        display: block;
    }
`

export const StyledWrapperContent = styled.div`
    padding: 30px;
    overflow: auto;
    height: 100%;

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

export const StyledTitleContent = CreateStyledComponent(styled.h4`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    text-transform: uppercase;
    font-weight: 600;
    transition: ${TransitionEnum.DURATION};
`)

export const StyledSubTitleContent = CreateStyledComponent(styled.div`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    transition: ${TransitionEnum.DURATION};
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

export const StyledTitleItems = CreateStyledComponent(styled.h5`
    color: ${dynamicTheme((theme) => theme.fontColor.default)};
    text-transform: uppercase;
    font-weight: 600;
    transition: ${TransitionEnum.DURATION};
`)
