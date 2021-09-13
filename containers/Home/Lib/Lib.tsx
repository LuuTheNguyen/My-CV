import { StyledLib, StyledListLib } from './styles'
import type { Props } from './interface'

export const Lib: React.FC<Props> = ({ lib }) => {
    return (
        <StyledLib>
            {lib.map((item, index) => (
                <StyledListLib text={item.label} key={index} />
            ))}
        </StyledLib>
    )
}
