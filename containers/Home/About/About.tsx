import { StyledAbout, StyledLabel, StyledContent } from './styles'

import type { Props } from './interface'
import moment from 'moment'

const handleOnContent = (value: any) =>
    typeof value === 'number' ? Number(moment().format('YYYY')) - Number(moment(value).format('YYYY')) : value

export const About: React.FC<Props> = ({ about }) => {
    return (
        <StyledAbout>
            {about.map((item, index) => (
                <div key={index}>
                    <StyledLabel>{item.label}</StyledLabel>
                    <StyledContent>{handleOnContent(item.content)}</StyledContent>
                </div>
            ))}
        </StyledAbout>
    )
}
