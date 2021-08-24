import { BackGroundColor, FontColor, GridBreakpoints } from 'style/Theme'

interface PropsListLib {
    color?: string;
    text: string;
    className?: string;
  }
  
  export const ListLib:React.FC<PropsListLib> = ({className, text="-"}) => {
    return (
      <p className={className}>
        <span className="material-icons">
          done
        </span>
        <span>{text}</span>
      </p>
    )
  }