import { StyledEducations, StyledEducationItem } from './styles'
import type { Props } from './interface'
import moment from 'moment'
import React from 'react'

export const Education: React.FC<Props> = ({ educations }) => {
    return (
        <StyledEducations>
            {educations.map((item, index) => (
                <React.Fragment key={index}>
                    <StyledEducationItem key={index}>
                        {moment(item.period.from).format('YYYY')} - {moment(item.period.to).format('YYYY')}
                    </StyledEducationItem>
                    <StyledEducationItem key={index}>{item.organziner}</StyledEducationItem>
                    <StyledEducationItem key={index}>{item.majors}</StyledEducationItem>
                </React.Fragment>
            ))}
        </StyledEducations>
    )
}
