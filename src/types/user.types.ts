import { RoleUserType } from "./enums/roleUserEnum.types";

export type UserType = {
    id: number,
    name: string,
    password: string,
    email: string,
    imageProfileUrl: string, // לא חובה. איך עושים
    role: RoleUserType,
    countMessages: number,
}
