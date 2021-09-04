import { StyledEducations, StyledEducationItem } from '.'
import type { Props } from '.'

export const Education: React.FC<Props> = ({ education }) => {
    return (
        <StyledEducations>
            <StyledEducationItem>{education.graduated}</StyledEducationItem>
            <StyledEducationItem>{education.university}</StyledEducationItem>
            <StyledEducationItem>{education.majors}</StyledEducationItem>
        </StyledEducations>
    )
}
