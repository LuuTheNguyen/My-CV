import { BackGroundColor, FontColor, GridBreakpoints } from '@components/style'

interface PropsListLib {
    color?: string;
    text: string;
    className?: string;
  }
  
  export const ListLib = (props:PropsListLib) => {
    const color = props.color || FontColor.secondary
    return (
      <p className={props.className}>
      <span className="material-icons" style={{ color: color }}>
        done
      </span>
        <span>{props.text}</span>
      </p>
    )
  }