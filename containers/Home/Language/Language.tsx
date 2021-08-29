import { Fragment } from "react";
import {
  StyledLanguage,
  StlyedProcessRing,
  StyledWrapperProcessRing,
  StlyedTitleProcessRing,
} from "./styles";
import { BackGroundColor, FontColor, GridBreakpoints } from "style/Theme";

export interface LanguageProps {
  label: string;
  percent: number;
}

interface Props {
  languages: LanguageProps[];
}

export const Language: React.FC<Props> = ({ languages }) => {
  return (
    <StyledLanguage>
      {languages.map((item, index) => (
        <div key={index}>
          <StyledWrapperProcessRing>
            <StlyedProcessRing
              width={40}
              stroke={FontColor.secondary}
              strokeWidth={2}
              percent={item.percent}
            />
            <StlyedTitleProcessRing>{item.label}</StlyedTitleProcessRing>
          </StyledWrapperProcessRing>
        </div>
      ))}
    </StyledLanguage>
  );
};
