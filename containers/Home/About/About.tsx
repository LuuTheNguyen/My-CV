import { Fragment } from "react";
import { StyledAbout } from "./styles";

export interface AboutProps {
  label: string;
  content: string;
}

interface Props {
  abouts: AboutProps[];
}

export const About: React.FC<Props> = ({ abouts }) => {
  return (
    <StyledAbout>
      {abouts.map((item, index) => (
        <div key={index}>
          <span>{item.label}</span> <span>{item.content}</span>
          <br />
        </div>
      ))}
    </StyledAbout>
  );
};
