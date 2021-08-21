import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

interface PropsProcessRing {
    width: number;
    strokeWidth: number;
    percent?: number;
    className?: string;
    stroke: string;
}

export const ProcessRing = (props: PropsProcessRing) => {

    /* https://codepen.io/jeremenichelli/pen/vegymB */
    const radius: number = (props.width / 2) - (props.strokeWidth * 2);
    const circumference: number = radius * 2 * Math.PI;
    const percent: number = (props.percent && props.percent > 0 && props.percent < 101) ? props.percent : 100
    const offset: number = circumference - percent / 100 * circumference;
    return (
        <svg
            className={props.className}
            width={props.width}
            height={props.width}>
            <text x={props.width / 2} y={props.width / 2 + props.width / 10} fontSize={props.width / 4} fill={`${FontColor.default}`}>{props.percent ? props.percent : 100}%</text>
            <circle
                stroke={props.stroke}
                strokeWidth={props.strokeWidth}
                fill="transparent"
                r={radius}
                cx={props.width / 2}
                cy={props.width / 2}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={`${offset}`}
            />
        </svg>
    )
}