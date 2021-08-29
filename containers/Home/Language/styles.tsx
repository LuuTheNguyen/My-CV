import styled from "styled-components";
import { BackGroundColor, FontColor, GridBreakpoints } from "style/Theme";
import { ProcessRing } from "./ProcessRing";

export const StyledLanguage = styled.div`
  justify-content: space-evenly;
  color: ${FontColor.default};
  display: flex;

  @media (min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}) {
    width: 50%;
    padding: 10px;
  }
`;

export const StlyedProcessRing = styled(ProcessRing)`
  text {
    text-anchor: middle;
  }
  circle {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
`;

export const StyledWrapperProcessRing = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StlyedTitleProcessRing = styled.div`
  color: ${FontColor.default};
  margin: auto auto;
  font-size: 10px;
`;
