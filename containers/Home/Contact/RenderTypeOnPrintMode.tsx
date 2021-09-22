import { decodePhoneNumber } from './utils'
import type { RenderTypeProps } from './interface'

export const RenderTypeOnPrintMode: React.FC<RenderTypeProps> = ({ type, linkProps, content }) => {
    const renderContent = type === 'phone' ? decodePhoneNumber(content) : content
    return <a {...linkProps}> {renderContent} </a>
}
