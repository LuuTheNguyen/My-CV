import { StyledEducations, StyledEducationItem } from './styles'
import type { Props } from './interface'
import moment from 'moment'
import React from 'react'

export const Education: React.FC<Props> = ({ educations }) => {
    return (
        <StyledEducations>
            {educations.map((item, index) => (
                <React.Fragment key={index}>
                    <StyledEducationItem>
                        {moment(item.period.from).format('YYYY')} - {moment(item.period.to).format('YYYY')}
                    </StyledEducationItem>
                    <StyledEducationItem>{item.organziner}</StyledEducationItem>
                    <StyledEducationItem>{item.majors}</StyledEducationItem>
                </React.Fragment>
            ))}
        </StyledEducations>
    )
}
