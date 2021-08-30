import { StyledEducations, StyledEducationItem } from './styles'
import { Prop } from './interface'

export const Education: React.FC<Prop> = ({ educations }) => {
    return (
        <StyledEducations>
            <StyledEducationItem>{educations.graduated}</StyledEducationItem>
            <StyledEducationItem>{educations.university}</StyledEducationItem>
            <StyledEducationItem>{educations.majors}</StyledEducationItem>
        </StyledEducations>
    )
}
