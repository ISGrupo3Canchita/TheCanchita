import { useState } from "react";
import { UserContext } from "./UserContext";
import { UserType } from "../Modelo/UserType";


export const UserProvider:React.FC<React.PropsWithChildren> = ({children}) => {
   
    const [ctxUser, setCtxUser] = useState<UserType>({name:'',rol:'',token:''});


    return (
        <UserContext.Provider value={{User:ctxUser, setUser:setCtxUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext