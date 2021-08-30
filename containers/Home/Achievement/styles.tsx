import styled from 'styled-components'
import {
    BackGroundColor,
    FontColor,
    GridBreakpoints,
    FontSize,
} from 'style/Theme'

export const StyledContainerAchievement = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const StyledAchievement = styled.div`
    width: fit-content;
    margin-right: 30px;
    padding: 20px 0;

    span {
        font-size: ${FontSize.lg};
        color: ${FontColor.secondary};
        font-weight: 600;
    }

    span + span {
        font-size: ${FontSize.md};
        color: ${FontColor.default};
        margin-left: 0.4rem;
    }

    @media (max-width: ${GridBreakpoints.lg}) {
        padding: 10px 0;
        margin-right: 10px;
    }
`
