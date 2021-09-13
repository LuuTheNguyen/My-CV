export interface ServiceProps {
    time: string
    project: string
    responsibilities?: string
    tech?: string
    description?: string
    company?: string
    companyHref: string
}

export interface Props {
    service: ServiceProps[]
}
