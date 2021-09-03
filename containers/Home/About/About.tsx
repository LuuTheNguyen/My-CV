import { StyledAbout } from './styles'

import { AboutProps, Prop } from './interface'

export const About: React.FC<Prop> = ({ abouts }) => {
    return (
        <StyledAbout>
            {abouts.map((item, index) => (
                <div key={index}>
                    <span>{item.label}</span> <span>{item.content}</span>
                </div>
            ))}
        </StyledAbout>
    )
}
