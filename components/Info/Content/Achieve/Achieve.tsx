import { Fragment } from "react"
import { StyledContainerAchievement, StyledAchievement } from "./styles"

export interface AchieveProps {
    label: string,
    content: string,
}

interface Props {
    achieves: AchieveProps[]
}

export const Achievement: React.FC<Props> = ({achieves}) => {
    return (
        <>           
            {achieves.map(
                (item, index) => (                    
                    <StyledContainerAchievement key={index}>
                        <StyledAchievement>
                            <span>{item.label}</span>
                            <span>{item.content}</span>
                        </StyledAchievement>
                    </StyledContainerAchievement>
                )
            )}
        </>
    )
}