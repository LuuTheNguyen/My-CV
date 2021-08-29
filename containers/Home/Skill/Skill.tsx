import { Fragment } from "react";
import { StyledSkill, StyledProcessBar } from "./styles";
import { BackGroundColor, FontColor, GridBreakpoints } from "style/Theme";

export interface SkillProps {
  label: string;
  percent: number;
}

interface Props {
  skills: SkillProps[];
}

export const Skill: React.FC<Props> = ({ skills }) => {
  return (
    <StyledSkill>
      {skills.map((item, index) => (
        <StyledProcessBar
          label={item.label}
          percent={item.percent}
          height={5}
          key={index}
        />
      ))}
    </StyledSkill>
  );
};
