//react
import { useState } from "react";

//firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

//firebase config
import { auth } from "../firebase/config";

//hooks
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)

    const {dispatch} = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null)
        setPending(true)

        try {
            //creating user
            const res = await createUserWithEmailAndPassword(auth, email, password)

            setPending(false)

            await updateProfile(res.user, displayName)

            dispatch({type: 'LOGIN', payload: res.user})

        } catch (err) {
            setPending(false)
            setError(err.message)
            console.log(err.message)
        }

    }
    return {signup, error, pending}
}

