console.log("UserContext.js")
import { useContext,createContext } from 'react';

export const UserContext = createContext({
    username:"",
    password:"",
    loginProfile:(user,pass)=>{}
})

export const UserContextProvider = UserContext.Provider

export default function useUser(){
    return useContext(UserContext)
} 

