import { UserType } from "../Modelo/UserType"

export type UserContextType ={
    User : UserType,
    setUser:(user:UserType) => void,
}