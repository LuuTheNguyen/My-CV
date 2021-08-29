import { Fragment } from "react";
import { StyledContainerAchievement, StyledAchievement } from "./styles";

export interface AchieveProps {
  label: string;
  content: string;
}

interface Props {
  achieves: AchieveProps[];
}

export const Achievement: React.FC<Props> = ({ achieves }) => {
  return (
    <StyledContainerAchievement>
      {achieves.map((item, index) => (
        <StyledAchievement key={index}>
          <span>{item.label}</span>
          <span>{item.content}</span>
        </StyledAchievement>
      ))}
    </StyledContainerAchievement>
  );
};
