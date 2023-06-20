//styles
import "./TopMenu.css"

//assets
import profile from "../assets/profil.jpg"

//router
import { NavLink, Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

//hooks
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from "../hooks/useLogout"

export default function TopMenu() {
	const navigate = useNavigate()
	const {user} = useAuthContext()
	const {logout} = useLogout()

	return (
		<div className='top'>
			<div className='topLeft'>
				<i className='topIcon fa-brands fa-square-github'></i>
				<i className='topIcon fa-brands fa-linkedin'></i>
				<i className='topIcon fa-brands fa-square-facebook'></i>
				<i className='topIcon fa-brands fa-square-instagram'></i>
			</div>
			<div className='topCenter'>
				<ul className='topList'>
					<NavLink className='navigationLink' to='/'>
						<li className='topListItem'>Home</li>
					</NavLink>
					<NavLink className='navigationLink' to='/react'>
						<li className='topListItem'>React</li>
					</NavLink>
					<NavLink className='navigationLink' to='/firebase'>
						<li className='topListItem'>Firebase</li>
					</NavLink>
					<NavLink className='navigationLink' to='/web-dev'>
						<li className='topListItem'>Web-dev</li>
					</NavLink>
				</ul>
			</div>
			<div className='topRight'>
				<img className='topImg' onClick={() => {navigate('/login')}} src={profile} alt='this is us' />
				{user && (<span className="logout-btn" onClick={logout}>wyloguj <i className="fa-solid fa-arrow-right-from-bracket"></i></span>)}
			</div>
		</div>
	)
}
