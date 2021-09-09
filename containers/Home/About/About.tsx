import { StyledAbout, StyledLabel, StyledContent } from './styles'

import type { Props } from './interface'

export const About: React.FC<Props> = ({ about }) => {
    return (
        <StyledAbout>
            {about.map((item, index) => (
                <div key={index}>
                    <StyledLabel>{item.label}</StyledLabel>{' '}
                    <StyledContent>{item.content}</StyledContent>
                </div>
            ))}
        </StyledAbout>
    )
}
