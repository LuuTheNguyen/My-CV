import { Fragment } from "react";
import { StyledLib, StyledListLib } from "./styles";
import { BackGroundColor, FontColor, GridBreakpoints } from "style/Theme";

export interface LibProps {
  label: string;
}

interface Props {
  libs: LibProps[];
}

export const Lib: React.FC<Props> = ({ libs }) => {
  return (
    <StyledLib>
      {libs.map((item, index) => (
        <StyledListLib text={item.label} key={index} />
      ))}
    </StyledLib>
  );
};
