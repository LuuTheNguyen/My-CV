export interface ServiceProps {
    from: number
    to: number
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

export interface RenderServiceProps{
    item: ServiceProps;
    style?: any;
}
