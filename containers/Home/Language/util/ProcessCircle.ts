import { ProcessRingProp } from '@containers/Home/Language'

export const utilProcessCircle = (props: ProcessRingProp) => {
    const radius: number = props.width / 2 - props.strokeWidth * 2
    const circumference: number = radius * 2 * Math.PI
    const percentValue: number =
        props.percent && props.percent > 0 && props.percent < 100
            ? props.percent
            : 100
    const offset: number = circumference - (percentValue / 100) * circumference

    return { radius, circumference, percentValue, offset }
}
