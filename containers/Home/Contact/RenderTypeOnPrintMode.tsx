import type { RenderTypeProps } from './interface'
import { RenderIcon } from './RenderTypeDesktop'

export const RenderTypeOnPrintMode: React.FC<RenderTypeProps> = ({ type, linkProps, content }) => {
    return (
        <>
            <RenderIcon type={type} /> &nbsp; <a {...linkProps}> {content} </a>
        </>
    )
}
