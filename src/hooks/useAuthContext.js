//react
import { useContext } from "react"

//auth
import { AuthContext } from "../context/AuthContext"

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw new Error('outside context')
    }

    return context
}