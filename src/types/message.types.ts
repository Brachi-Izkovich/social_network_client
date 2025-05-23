import { FeedbackImougeType } from "./enums/feedbackImugeEnum.types"
import { UserType } from "./user.types"

export type MessageType = {
    id: number,
    content: string,
    timeSend: Date,
    user: UserType,
    likes: FeedbackImougeType  //  לשנות לרשימה של תגובות וכן לשנות את השם למהותי יותר
}