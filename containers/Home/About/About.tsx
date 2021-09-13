import { StyledAbout, StyledLabel, StyledContent } from './styles'

import type { Props } from './interface'
import moment from 'moment'

export const About: React.FC<Props> = ({ about }) => {
    return (
        <StyledAbout>
            {about.map((item, index) => (
                <div key={index}>
                    <StyledLabel>{item.label}</StyledLabel>
                    <StyledContent>
                        {typeof item.content === 'number'
                            ? Number(moment().format('YYYY')) - Number(moment(item.content).format('YYYY'))
                            : item.content}
                    </StyledContent>
                </div>
            ))}
        </StyledAbout>
    )
}
