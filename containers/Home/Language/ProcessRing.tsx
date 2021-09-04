import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'

import type { ProcessRingProp } from '.'

export const ProcessRing: React.FC<ProcessRingProp> = ({
    width = 10,
    strokeWidth = 10,
    percent,
    className,
    stroke = '10',
    strokeBackground,
}) => {
    /**TODO: link for example processRing */
    /* https://codepen.io/jeremenichelli/pen/vegymB */
    const radius: number = width / 2 - strokeWidth * 2
    const circumference: number = radius * 2 * Math.PI
    const percentValue: number =
        percent && percent > 0 && percent < 101 ? percent : 100
    const offset: number = circumference - (percentValue / 100) * circumference
    return (
        <svg className={className} width={width} height={width}>
            <text
                x={width / 2}
                y={width / 2 + width / 10}
                fontSize={width / 4}
                fill={`${FontColor.primary}`}>
                {percentValue}%
            </text>
            
            <circle
                stroke={strokeBackground}
                strokeWidth={strokeWidth}
                fill="transparent"
                r={radius}
                cx={width / 2}
                cy={width / 2}
            />
            
            <circle
                className="processCircle"
                stroke={stroke}
                strokeWidth={strokeWidth}
                fill="transparent"
                r={radius}
                cx={width / 2}
                cy={width / 2}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={`${offset}`}
            />
        </svg>
    )
}
