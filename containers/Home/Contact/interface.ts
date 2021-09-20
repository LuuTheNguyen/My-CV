export interface ContactProps {
    label?: string;
    content: string;
    type: 'phone' | 'skype' | 'mail';
}

export interface RenderTypeProps extends ContactProps{
    linkProps: object;
}

export interface Props {
    contact: ContactProps[]
}
