import { Fragment } from "react"
import { StyledContainerAchievement, StyledAchievement } from "./styles"

interface Achieve {
    label: string,
    content: string,
}

export interface AchieveProps {
    array: Array<Achieve>
}

export const Achievement: React.FC<AchieveProps> = ({array}) => {
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