import { StyledEducations, StyledEducationItem } from './styles'
import type { Props, EducationProps } from './interface'

export const Education: React.FC<Props> = ({ education }) => {
    return (
        <StyledEducations>
            {(Object.keys(education) as Array<keyof EducationProps>).map(
                (key, index) => (
                    <StyledEducationItem key={index}>
                        {education[key]}
                    </StyledEducationItem>
                )
            )}
        </StyledEducations>
    )
}
