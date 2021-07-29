export interface User {
    username: string,
    role: Role,
    password: string,
    following: string[],
    followers: string[]
}

export enum Role {
    ADMIN, USER, SUBSCRIBER
}
