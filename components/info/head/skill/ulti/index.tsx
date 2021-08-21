
interface PropsProcessBar {
    percent: number;
    label: string;
    className?: string;
    height: number;
  }
  
  export const ProcessBar = (props:PropsProcessBar) => {
    return (
      <div className={props.className}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{props.label}</span>
          <span>{props.percent}</span>
        </div>
        <div className="progress">      
          <div className="progress-bar" role="progressbar" style={{width: `${props.percent}%`}} aria-valuenow={props.percent} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
      </div>
    )
  }