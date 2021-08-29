import type { AchieveProps } from "@containers/Home/Achievement/Achievement";
import type { ServiceProps } from "@containers/Home/Service/Service";
import type { AboutProps } from "@containers/Home/About/About";
import type { LanguageProps } from "@containers/Home/Language/Language";
import type { SkillProps } from "@containers/Home/Skill/Skill";
import type { LibProps } from "@containers/Home/Lib/Lib";
import type { ContactProps } from "@containers/Home/Contact/Contact";

export interface DataHeadProps {
  languages: LanguageProps[];
  contacts: ContactProps[];
  libs: LibProps[];
  abouts: AboutProps[];
  skills: SkillProps[];
}
export interface HeadProps {
  data: DataHeadProps;
}

export interface DataContentProps {
  achieves: AchieveProps[];
  services: ServiceProps[];
}
export interface ContentProps {
  data: DataContentProps;
}
