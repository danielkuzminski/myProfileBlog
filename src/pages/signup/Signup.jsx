//style
import './Signup.css'

//react
import { useState } from 'react'

//router
import { useNavigate } from 'react-router-dom'

//hooks
import {useSignup} from '../../hooks/useSignup'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')

    const resetForm = () => {
        setEmail('')
        setPassword('')
        setDisplayName('')
    }

    const navigate = useNavigate()

    const {signup, error, pending} = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()

        signup(email, password, displayName)

        resetForm()
    }

  return (
    <div className="login">
            {error && <p>{error}</p>}
            <span onClick={() => {navigate(-1)}} className="loginClose"><i class="fa-solid fa-angles-left"></i></span>
			<form onSubmit={handleSubmit} className='loginForm'>
				<label className="loginLabel">
					<span><i className="fa-regular fa-envelope"></i> Email:</span>
					<input 
                        type='email'
                        required
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                    />
				</label>
				<label className="loginLabel">
					<span><i className="fa-solid fa-key"></i> Password:</span>
					<input 
                        type='password'
                        required
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={password}
                    />
				</label>
                <label className='loginLabel'>
                    <span><i className="fa-solid fa-circle-user"></i> Display name:</span>
                    <input 
                        type="text"
                        required
                        onChange={(e) => {
                            setDisplayName(e.target.value)
                        }}
                        value={displayName}
                    />
                </label>
				{!pending && <button className="SubmitBtn">Submit</button>}
                {pending && <button className="SubmitBtn">Sending...</button>}
			</form>
		</div>
  )
}
