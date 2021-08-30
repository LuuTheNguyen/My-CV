import styled from 'styled-components'
import {
    BackGroundColor,
    FontColor,
    GridBreakpoints,
    FontSize,
} from 'style/Theme'

export const StyledWrapperService = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: flex-start;
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media (max-width: ${GridBreakpoints.sm}) {
        grid-template-columns: auto;
    }
`

export const StyledService = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${BackGroundColor.primary};
    min-height: 250px;

    @media (max-width: ${GridBreakpoints.lg}) {
        width: 100%;
        max-width: 400px;
    }
`

export const StyledHeaderService = styled.span`
    color: ${FontColor.default};
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
`

export const StyledHeaderTitleService = styled.span`
    font-weight: 600;
`

export const StyledHeaderSubTitleService = styled.span`
    font-weight: normal;
`

export const StyledContentService = styled.div`
    color: ${FontColor.primary};
    font-size: ${FontSize.sm};
    margin-top: 10px;
    span {
        text-transform: capitalize;
        font-style: italic;
        font-weight: 600;
    }
    span + span {
        text-transform: none;
        font-weight: normal;
        font-style: normal;
    }
`

export const StyledCompany = styled.div`
    color: ${FontColor.secondary};
    font-weight: 600px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    & button {
        border: none;
        padding: 0;
    }
    & .material-icons {
        font-size: ${FontSize.md};
        cursor: pointer;
    }
    & a {
        margin-left: 5px;
        color: ${FontColor.secondary};
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`
