//firebase config
import { auth } from "../firebase/config"

//firebase
import { signInWithEmailAndPassword } from "firebase/auth"

//react
import { useState } from "react"

//context
import { useAuthContext } from "./useAuthContext"


export const useLogin = () => {
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)

    const {dispatch} = useAuthContext()

    const login = async (email, password) => {
        setPending(true)

        try {
            const res = await signInWithEmailAndPassword(auth, email, password)
            setPending(false)
            dispatch({type: 'LOGIN', payload: res.user})
        } catch (err) {
            setPending(false)
            setError(err.message)
        }
    }
    return {login, error, pending}
}