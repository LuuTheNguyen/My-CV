import { StyledAbout } from '.'

import type { Props } from '.'

export const About: React.FC<Props> = ({ about }) => {
    return (
        <StyledAbout>
            {about.map((item, index) => (
                <div key={index}>
                    <span>{item.label}</span> <span>{item.content}</span>
                </div>
            ))}
        </StyledAbout>
    )
}
