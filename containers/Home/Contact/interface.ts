export interface ContactProps {
    label: string
    content: string
    type?: string
}

export interface Props {
    contact: ContactProps[]
}
