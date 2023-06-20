//react
import { useState } from "react"

//router
import { useNavigate } from "react-router-dom"

//styles
import "./Login.css"

//hooks
import { useLogin } from "../../hooks/useLogin"


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const {login, pending, error} = useLogin()

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

	const handleSubmit = (e) => {
		e.preventDefault()

		login(email, password)

        resetForm()
	}

	return (
		<div className="login">
            <span onClick={() => {navigate(-1)}} className="loginClose"><i class="fa-solid fa-angles-left"></i></span>
			{error && <span>{error}</span>}
			<form onSubmit={handleSubmit} className='loginForm'>
				<label className="loginLabel">
					<span><i class="fa-regular fa-envelope"></i> Email:</span>
					<input 
						type='email'
						onChange={(e) => {
							setEmail(e.target.value)
						}}
						value={email}
					/>
				</label>
				<label className="loginLabel">
					<span><i class="fa-solid fa-key"></i> Password:</span>
					<input 
						type='password'
						onChange={(e) => {
							setPassword(e.target.value)
						}}
						value={password}
					/>
				</label>
				<button className="SubmitBtn">Submit</button>
			</form>
		</div>
	)
}
