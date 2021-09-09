import { StyledEducations, StyledEducationItem } from './styles'
import type { Props, EducationProp } from './interface'

export const Education: React.FC<Props> = ({ education }) => {
    return (
        <StyledEducations>
            {(Object.keys(education) as Array<keyof EducationProp>).map(
                (key, index) => (
                    <StyledEducationItem key={index}>
                        {education[key]}
                    </StyledEducationItem>
                )
            )}
        </StyledEducations>
    )
}
