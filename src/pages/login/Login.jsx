//react
import { useState } from "react"

//router
import { useNavigate } from "react-router-dom"

//styles
import "./Login.css"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

	const navigate = useNavigate()

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

	const handleSubmit = (e) => {
		e.preventDefault()

        resetForm()
	}

	return (
		<div className="login">
            <span onClick={() => {navigate(-1)}} className="loginClose"><i class="fa-solid fa-angles-left"></i></span>
			<form className='loginForm'>
				<label className="loginLabel">
					<span><i class="fa-regular fa-envelope"></i> Email:</span>
					<input type='email' />
				</label>
				<label className="loginLabel">
					<span><i class="fa-solid fa-key"></i> Password:</span>
					<input type='password' />
				</label>
				<button className="SubmitBtn">Submit</button>
			</form>
		</div>
	)
}
