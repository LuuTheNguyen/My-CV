import type { ListLibProps } from './interface'

export const ListLib: React.FC<ListLibProps> = ({ className, text = '-' }) => {
    return (
        <p className={className}>
            <span className="material-icons">done</span>
            <span>{text}</span>
        </p>
    )
}
