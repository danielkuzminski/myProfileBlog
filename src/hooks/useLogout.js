//context
import { useAuthContext } from "./useAuthContext";

//firebase config
import { auth } from "../firebase/config";

//firebase
import { signOut } from "firebase/auth";

//react
import { useState } from "react";


export const useLogout = () => {
    const [error, setError] = useState(null)
    const {dispatch} = useAuthContext()

    const logout = async () => {
        setError(null)

        try {
            await signOut(auth)

            dispatch({type: 'LOGOUT'})
        } catch (err) {
            setError(err.message)
        }
    }

    return {logout, error}
}