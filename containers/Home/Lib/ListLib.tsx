interface ListLibProp {
    color?: string
    text: string
    className?: string
}

export const ListLib: React.FC<ListLibProp> = ({ className, text = '-' }) => {
    return (
        <p className={className}>
            <span className="material-icons">done</span>
            <span>{text}</span>
        </p>
    )
}
