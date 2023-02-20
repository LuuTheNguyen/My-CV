import { decodePhoneNumber } from './utils'
import type { RenderTypeProps } from './interface'

export const RenderTypeOnPrintMode: React.FC<RenderTypeProps> = ({ type, linkProps, content }) => {
    return <a {...linkProps}> {content} </a>
}
