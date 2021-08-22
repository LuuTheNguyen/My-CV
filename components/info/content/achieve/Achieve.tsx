import { Fragment } from "react"
import { StyledContainerAchievement, StyledAchievement } from "./styles"

export interface AchieveProps {
    label: string,
    content: string,
}

interface Props {
    array: Array<AchieveProps>
}

export const Achievement: React.FC<Props> = ({array}) => {
    return (
        <Fragment>           
            {array.map(
                (item, index) => (                    
                    <StyledContainerAchievement key={index}>
                        <StyledAchievement>
                            <span>{item.label}</span>
                            <span>{item.content}</span>
                        </StyledAchievement>
                    </StyledContainerAchievement>
                )
            )}
        </Fragment>
    )
}