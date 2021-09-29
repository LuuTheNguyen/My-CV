import { StyledAbout } from './styles'

import type { Props } from './interface'
import moment from 'moment'
import { TypoComponent } from '@components/Typo'

const handleOnContent = (value: any) =>
    typeof value === 'number' ? Number(moment().format('YYYY')) - Number(moment(value).format('YYYY')) : value

export const About: React.FC<Props> = ({ about }) => {
    return (
        <StyledAbout>
            {about.map((item, index) => (
                <div key={index}>
                    <TypoComponent type="content1">{item.label}</TypoComponent>
                    <TypoComponent type="content5">{handleOnContent(item.content)}</TypoComponent>
                </div>
            ))}
        </StyledAbout>
    )
}
