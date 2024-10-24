import React, { createContext } from "react";
import { UserContextType } from "./UserContextType";


export const UserContext : React.Context<UserContextType> = createContext<UserContextType>({
    User:{name:'', rol:'', token:''},
    setUser:()=>{}
})