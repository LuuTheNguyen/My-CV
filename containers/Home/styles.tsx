import { BackGroundColor, FontColor, GridBreakpoints } from "style/Theme";
import styled from "styled-components";
import Image from "next/image";

export const StyledMain = styled.main`
  height: auto;
  width: 100%;
  background-color: ${BackGroundColor.default};
  color: ${FontColor.default};
  margin: 0;
  padding: 10px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${GridBreakpoints.lg}) {
    flex-direction: row;
    display: flex;
  }
`;

export const StyledContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${BackGroundColor.default};
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${GridBreakpoints.lg}) {
    flex-direction: column;
  }
`;

const StyledWrapperInfo = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${GridBreakpoints.lg}) {
    flex-direction: column;
  }
`;

export { StyledInfo, StyledWrapperInfo };

export const StyledWrapperHead = styled.div`
  @media (max-width: ${GridBreakpoints.lg}) {
    width: auto;
    display: none;
  }
`;

export const StyledAboutHead = styled.div`
  background-color: ${BackGroundColor.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
`;

export const StyledWrapperImage = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
`;

export const StyledIcon = styled(Image)`
  border-radius: 40px;
  img {
    width: 100px;
    height: 100px;
  }
  position: relative;
`;
export const StyledName = styled.span`
  font-size: 14px;
  color: ${FontColor.default};
  font-weight: 600;
`;

export const StyledDescription = styled.span`
  font-size: 12px;
  color: ${FontColor.primary};
`;

export const StyledAboutBody = styled.div`
  background-color: ${BackGroundColor.secondary};
  padding: 20px 20px 20px 20px;

  @media (min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledDownloadCV = styled.div`
  color: ${FontColor.primary};
  text-transform: uppercase;
  font-weight: 600;

  @media (min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}) {
    padding: 10px;
  }

  i {
    font-size: 10px;
  }
`;

export const StyledAboutFooter = styled.div`
  background-color: ${BackGroundColor.primary};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledNavBar = styled.div`
  display: none;
  background-color: ${BackGroundColor.default};

  @media (max-width: ${GridBreakpoints.lg}) {
    display: block;
  }

  .offcanvas {
    background-color: ${BackGroundColor.primary};
    .material-icons {
      color: ${FontColor.default};
    }
    .text-reset {
      text-align: end;
    }
  }
`;

export const StyledWrapperContent = styled.div`
  padding: 30px 30px 30px 30px;
  @media (min-width: ${GridBreakpoints.sm}) and (max-width: ${GridBreakpoints.lg}) {
    width: auto;
  }
`;

export const StyleBanner = styled.div`
  display: flex;
  @include media-breakpoint-down(lg) {
    flex-direction: column-reverse;
  }
`;

export const StyledBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const StyledTitleContent = styled.div`
  color: ${FontColor.default};
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const StyledSubTitleContent = styled.div`
  color: ${FontColor.default};
  .code {
    color: ${FontColor.secondary};
  }
  button {
    background-color: ${BackGroundColor.third};
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
`;

export const StyledContainerService = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledWrapperMain = styled.div`
  @media (max-width: ${GridBreakpoints.lg}) {
    flex-direction: row;
    display: flex;
  }
`;

export const StyledContainerEducation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledEducationItem = styled.span`
  font-size: 16px;
  color: ${FontColor.default};
`;

export const StyledEducations = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  margin-bottom: 30px;

  @media (max-width: ${GridBreakpoints.md}) {
    grid-template-columns: auto auto;
  }

  @media (max-width: ${GridBreakpoints.sm}) {
    grid-template-columns: auto;
  }
`;
