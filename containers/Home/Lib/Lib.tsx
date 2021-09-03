import { StyledLib, StyledListLib } from './styles'
import { LibProps, Prop } from './interface'

export const Lib: React.FC<Prop> = ({ libs }) => {
    return (
        <StyledLib>
            {libs.map((item, index) => (
                <StyledListLib text={item.label} key={index} />
            ))}
        </StyledLib>
    )
}
