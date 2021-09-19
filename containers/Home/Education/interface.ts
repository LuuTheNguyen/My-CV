interface Period {
    from: number
    to: number
}
export interface EducationProps {
    period: Period
    organziner: string
    majors: string
}

export interface Props {
    educations: EducationProps[]
}
