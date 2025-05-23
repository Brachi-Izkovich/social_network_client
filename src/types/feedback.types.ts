import { FeedbackImougeType } from "./enums/feedbackImugeEnum.types"
import { UserType } from "./user.types"

export type FeedbackType = {
    id: number,
    type: FeedbackImougeType,
    user: UserType
}