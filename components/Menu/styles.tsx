import styled from 'styled-components'
import {
    BackgroundColor,
    FontColor,
    GridBreakpoints,
    ResponsiveMax,
} from 'style/Theme'
import { StyledLink } from './StyledLink'

export const StyledMenuList = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 100vh;

    ${ResponsiveMax('lg')} {
        padding: 0;
    }
`

export const StyledMenuItem = styled(StyledLink)`
    transform: rotate(90deg);
    a {
        color: ${FontColor.default};
        text-decoration: none;
    }
`

export const StyledWrapperMenuList = styled.div`
    position: relative;
    background-color: ${BackgroundColor.secondary};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0;
`

export const StyledContainerMenuList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: fit-content;
    height: 100%;
    position: fixed;
`

export const StyledHeaderMenu = styled.div`
    min-width: 50px;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${BackgroundColor.primary};
    i {
        cursor: pointer;
    }
`

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

interface StyledWrapSwitchThemeProps{
    isDarkTheme?: boolean
}

export const StyledWrapSwitchTheme = styled.div<StyledWrapSwitchThemeProps>`
    width: fit-content;
    height: fit-content;    
    border-radius: 20px;
    background-color: ${BackgroundColor.third};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    box-shadow: 0 0px 15px ${BackgroundColor.primary};
    transform: ${props => props.isDarkTheme ? 'translateY(0)' : 'translateY(100%)'}
`

export const StyledSlider = styled.div`
    width: 30px;
    height: 60px;
    background-color: ${BackgroundColor.primary};
    border-radius: 20px;
    display: flex;
    justify-content: center;
`