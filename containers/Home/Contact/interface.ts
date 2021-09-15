export interface ContactProps {
    label: string
    content: string
    type: 'phone' | 'skype' | 'mail'
}

export interface Props {
    contact: ContactProps[]
}
