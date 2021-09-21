export interface ContactProps {
    label?: string;
    content: string;
    type: 'phone' | 'skype' | 'mail';
}

export interface RenderTypeProps extends ContactProps{
    linkProps: Record<any, any>;
}

export interface Props {
    contact: ContactProps[]
}
