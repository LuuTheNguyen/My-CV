export interface ContactProps {
    label?: string
    content: string
    type: string
}

export interface RenderTypeProps extends ContactProps {
    linkProps: Record<any, any>
}

export interface Props {
    contact: ContactProps[]
}

export type TypesProps = Pick<ContactProps, 'type'>
