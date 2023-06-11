//styles
import "./TopMenu.css"

//assets
import profile from "../assets/profil.jpg"

//router
import { NavLink, Link } from "react-router-dom"

export default function TopMenu() {
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
				<img className='topImg' src={profile} alt='this is us' />
			</div>
		</div>
	)
}
