import { StyledEducations } from './styles'
import type { Props } from './interface'
import moment from 'moment'
import React from 'react'
import { TypoComponent } from '@components/Typo'

export const Education: React.FC<Props> = ({ educations }) => {
    return (
        <StyledEducations>
            {educations.map((item, index) => (
                <React.Fragment key={index}>
                    <TypoComponent type="content1">
                        {moment(item.period.from).format('YYYY')} - {moment(item.period.to).format('YYYY')}
                    </TypoComponent>
                    <TypoComponent type="content1">{item.organziner}</TypoComponent>
                    <TypoComponent type="content1">{item.majors}</TypoComponent>
                </React.Fragment>
            ))}
        </StyledEducations>
    )
}
