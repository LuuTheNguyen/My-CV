import { StyledLib, StyledListLib } from '.'
import type { Props } from '.'

export const Lib: React.FC<Props> = ({ lib }) => {
    return (
        <StyledLib>
            {lib.map((item, index) => (
                <StyledListLib text={item.label} key={index} />
            ))}
        </StyledLib>
    )
}
